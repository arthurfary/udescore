<?php
require_once 'api.php';
require_once 'db.php';

try {
    $api = new Api();
    $api->check_method('GET');

    $db = new DB();

    $resultado = $db->query("SELECT q.id as questionario_ID,id_questionario,p.descricao as pergunta_descricao,p.tipo,p.respostas FROM questionario q
                             INNER JOIN pergunta p ON p.id_questionario = q.id   ");

    $questionario = [];

    foreach ($resultado as $linha) {
        $alternativas = explode('|', $linha['respostas']);
        $alternativaCorreta = $alternativas[0];
        shuffle($alternativas);
        $indiceCorreto = array_search($alternativaCorreta, $alternativas);
            $questionario[] = [
            'id'                  => $linha['questionario_ID'],
            'id_questionario'     => $linha['id_questionario'],
            'pergunta'            => $linha['pergunta_descricao'],
            'alternativa_correta' => $indiceCorreto,
            'alternativas'        => $alternativas
        ];
    }
    
    $api->sendResponse(200, [
        'success' => true,
        'data' => $questionario
    ]);
} catch (Exception $e) {
    if (isset($api)) {
        $api->tratarException($e);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => $e->getMessage()]);
    }
}
