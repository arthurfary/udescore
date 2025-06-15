<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("POST");

    $body = $api->obterBody();
    
    $descricao = $body["descricao"];
    $tipo = $body["tipo"];
    $id_questionario = $body["id_questionario"];
    $dificuldade = $body["dificuldade"];
    $respostas = $body["respostas"];

    $db->TStart();

    $query = "INSERT INTO pergunta (descricao, tipo, respostas, dificuldade, id_questionario) VALUES (:descricao, :tipo, :respostas, :dificuldade, :id_questionario)";
    $parameters = [
        ":descricao" => $descricao,
        ":tipo" => $tipo,
        ":respostas" => $respostas,
        ":dificuldade" => $dificuldade,
        ":id_questionario" => $id_questionario
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
