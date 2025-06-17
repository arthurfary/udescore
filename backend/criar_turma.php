<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("POST");

    $body = $api->obterBody();
    
    $nome = $body["nome"];
    $codigo = $body["codigo"];
    $periodo = $body["periodo"];
    $id_professor = $body["id_professor"];

    $db->TStart();

    $query = "INSERT INTO turma (nome, cod, periodo, id_professor, status) VALUES (:nome, :codigo, :periodo, :id_professor, :status)";
    $parameters = [
        ":nome" => $nome,
        ":codigo" => $codigo,
        ":periodo" => $periodo,
        ":id_professor" => $id_professor
    ];

    $resposta = $db->query($query, $parameters);

    $db->TCommit();

    $api->sendResponse(
        200,
        [
            "success" => true,
            "data" => $resposta,
        ]
    );
    
} catch (Exception $e) {
    $db->TRollback();
    $api->tratarException($e);
}
