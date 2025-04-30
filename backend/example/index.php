<?php

require_once "../api.php";
require_once "../db.php";

try {
    $api = new Api(); // Inicializa a api

    $api->method("GET"); // Seta qual será o metodo da api

    $anime = $api->obterParametro("anime"); // Obtém o valor de um parameter específico da api
    //$token = $api->obterHeader("Authorization") // Obtém o valor de header específico

    $api->sendResponse(
        200, // Código http de retorno
        [
            // Array de retorno
            "success" => true, // booleano falando se a api executou com sucesso
            "data" => "Exemplo", // Mensagem/dados de retorno
        ]
    );
} catch (Exception $e) {
    $api->tratarException($e); // Trata os erros dos métodos chamados durante a api
}
