<?php
require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $resultado = $db->query("SELECT id,id_questionario,id_aluno,pontos,data_de_termino,qtd_acertos,tempo FROM questionario_aluno");

    $questionario_aluno = [];

    foreach ($resultado as $linha) {
        $questionario_aluno[] = [
            'id' => $linha['id'],
            'id_questionario' => $linha['id_questionario'],
            'id_aluno' => $linha['id_aluno'],
            'pontos' => $linha['pontos'],
            'data_de_termino' => $linha['data_de_termino'],
            'qtd_acertos' => $linha['qtd_acertos'],
            'tempo' => $linha['tempo'],
        ];
    }

    $api->sendResponse(200, [
        'success' => true,
        'data' => $questionario_aluno
    ]);
} catch (Exception $e) {
    if (isset($api)) {
        $api->tratarException($e);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
