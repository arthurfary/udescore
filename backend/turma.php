<?php
require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $resultado = $db->query("SELECT id,cod,nome,periodo,status,id_professor FROM turma");

    $turma = [];

    foreach ($resultado as $linha) {
        $turma[] = [
            'id' => $linha['id'],
            'cod' => $linha['cod'],
            'nome' => $linha['nome'],
            'periodo' => $linha['periodo'],
            'status' => $linha['status'],
            'id_professor' => $linha['id_professor'],

        ];
    }

    $api->sendResponse(200, [
        'success' => true,
        'data' => $turma
    ]);
} catch (Exception $e) {
    if (isset($api)) {
        $api->tratarException($e);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
