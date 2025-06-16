<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("GET");

    $query = "SELECT DISTINCT questionario_aluno.id_aluno, usuario.nome, SUM(questionario_aluno.pontos) AS total_pontos
                FROM questionario_aluno
                JOIN usuario ON usuario.id = questionario_aluno.id_aluno
                GROUP BY questionario_aluno.id_aluno, usuario.nome
                ORDER BY total_pontos DESC
                LIMIT 10";

    $resposta = $db->query($query);

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
