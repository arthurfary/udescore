<?php
require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $resultado = $db->query("SELECT id,nome,matricula,status,tipo,email FROM usuario");

    $usuario = [];

    foreach ($resultado as $linha) {
        $usuario[] = [
            'id' => $linha['id'],
            'nome' => $linha['nome'],
            'matricula' => $linha['matricula'],
            'status' => $linha['status'],
            'tipo' => $linha['tipo'],
            'email' => $linha['email']
        ];
    }

    $api->sendResponse(200, [
        'success' => true,
        'data' => $usuario
    ]);
} catch (Exception $e) {
    if (isset($api)) {
        $api->tratarException($e);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
