<?php

require_once "../api.php";

try {
    $api = new Api(); // Inicializa a api

    $api->method("GET"); // Valida se o método chamado é o correto

    $parametroValor = $api->obterParametro("parametro"); // Obtém o valor de um parameter específico da api (http://www.udescore/?parametro=1)
    // Nesse caso a variável parametroValor terá o valor 1
    $token = $api->obterHeader("Authorization"); // Obtém o valor de um header específico, nesse caso irá trazer o valor do Authorization

    $api->sendResponse(
        200, // Código http de retorno
        [
            // Array de retorno
            "success" => true, // booleano falando se a api executou com sucesso
            "data" => "Exemplo", // Mensagem/dados de retorno
        ]
    );
} catch (Exception $e) {
    $api->tratarException($e); // Trata os erros dos métodos chamados durante a execução da api
}
