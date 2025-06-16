<?php

require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $id_professor = $api->obterParametro("id", true); // Obrigatorio

    $resultado = $db->query("SELECT id, cod, nome, periodo, status FROM turma WHERE id_professor = '$id_professor'");

    if (!$resultado) {
        return $api->sendResponse(
            400,
            [
                'success' => false,
                'message' => "Professor não encontrado."
            ]
        );
    }

    $turmas_professor = [];

    foreach ($resultado as $linha) {
        $turmas_professor[] = [
            "id" => $linha["id"],
            "cod" => $linha["cod"],
            "nome" => $linha["nome"],
            "periodo" => $linha["periodo"],
            "status" => $linha["status"],
        ];
    }

    $api->sendResponse(
        200,
        [
            'success' => true,
            'data' => $turmas_professor
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
