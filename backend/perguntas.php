<?php
require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $resultado = $db->query("SELECT id,descricao, respostas FROM pergunta");

    $perguntasFormatadas = [];

    foreach ($resultado as $linha) {
        $alternativas = explode('|', $linha['respostas']);
        $perguntasFormatadas[] = [
            'id' => $linha['id'],
            'pergunta' => $linha['descricao'],
            'alternativa_correta' => $alternativas[0],
            'alternativas' => $alternativas
        ];
    }

    $api->sendResponse(200, [
        'success' => true,
        'data' => $perguntasFormatadas
    ]);
} catch (Exception $e) {
    if (isset($api)) {
        $api->tratarException($e);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
