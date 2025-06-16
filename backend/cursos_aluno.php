<?php

require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $id_usuario = $api->obterParametro("id", true); // Obrigatorio

    $resultado = $db->query("SELECT id_seq, id_usuario, id_turma FROM aluno_turma WHERE id_usuario = '$id_usuario'");

    if (!$resultado) {
        return $api->sendResponse(
            400,
            [
                'success' => false,
                'message' => "Aluno não faz parte de nenhuma turma"
            ]
        );
    }

    $aluno_turma = array();

    foreach ($resultado as $linha) {
        array_push($aluno_turma, $linha["id_turma"]);
    }

    $api->sendResponse(
        200,
        [
            'success' => true,
            'data' => $aluno_turma
        ]
    );

} catch (Exception $e) {
    if (isset($api)) {
        $api->tratarException($e);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
