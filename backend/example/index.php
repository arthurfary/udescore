<?php

require_once "../api.php";

try {
    $api = new Api(); // Inicializa a api

    $api->check_method("POST"); // Valida se o método chamado é o correto

    $parametroValor = $api->obterParametro("parametro"); // Obtém o valor de um parameter específico da api (http://www.udescore/?parametro=1)
    // Nesse caso a variável parametroValor terá o valor 1

    $token = $api->obterHeader("Authorization"); // Obtém o valor de um header específico, nesse caso irá trazer o valor do Authorization

    $body = $api->obterBody(); // Obtém todas as informações do body da requisição em forma de array
    // Exemplo: {nome:"example",id:"1"} será transformado em:

    $id = $body["id"]; // Exemplo para obter o id no body da requisição
    $nome = $body["nome"]; // Exemplo para obter o nome no body da requisição

    $api->sendResponse(
        200, // Código http de retorno
        // Array de retorno
        [
            "success" => true, // booleano falando se a api executou com sucesso
            "data" => "Exemplo", // Mensagem/dados de retorno
        ]
    );
} catch (Exception $e) {
    $api->tratarException($e); // Trata os erros dos métodos chamados durante a execução da api
}
