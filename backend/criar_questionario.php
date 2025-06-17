<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("POST");

    $body = $api->obterBody();
    
    $titulo = $body["titulo"];
    $descricao = $body["descricao"];
    $id_turma = $body["id_turma"];
    $data_de_criacao = date("Y-m-d H:i:s");

    $db->TStart();

    $query = "INSERT INTO questionario (titulo, descricao, id_turma, data_de_criacao, aberto, qtd_questoes) VALUES (:titulo, :descricao, :id_turma, :data_de_criacao, :aberto, :qtd_questoes)";
    $parameters = [
        ":titulo" => $titulo,
        ":descricao" => $descricao,
        ":id_turma" => $id_turma,
        ":data_de_criacao" => $data_de_criacao,
        ":aberto" => 1,
        ":qtd_questoes" => 0
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
