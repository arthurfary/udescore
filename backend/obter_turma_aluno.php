<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("GET");

    $id_aluno = $api->obterParametro("id_aluno");

    $query = "SELECT turma.nome
                FROM aluno_turma
                JOIN turma ON aluno_turma.id_turma = turma.id
                WHERE aluno_turma.id_usuario = :id_aluno";

    $resposta = $db->query($query, [":id_aluno" => $id_aluno]);

    $api->sendResponse(
        200,
        [
            "success" => true,
            "data" => $resposta,
        ]
    );
    
} catch (Exception $e) {
    $api->tratarException($e);
}
