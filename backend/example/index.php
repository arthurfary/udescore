<?php

require_once "../api.php"; // Importa classe para API
require_once "../db.php"; // Importa classe para DataBase

try {
    $api = new Api(); // Inicializa a api
    $db = new DB(); // Instancia o banco de dados

    $api->check_method("POST"); // Valida se o método chamado é o correto

    $parametroValor = $api->obterParametro("parametro"); // Obtém o valor de um parameter específico da api (http://www.udescore/?parametro=1)
    // Nesse caso a variável parametroValor terá o valor 1

    $token = $api->obterHeader("Authorization"); // Obtém o valor de um header específico, nesse caso irá trazer o valor do Authorization

    $body = $api->obterBody(); // Obtém todas as informações do body da requisição em forma de array
    // Exemplo: {nome:"example"} será transformado em:

    $nome = $body["nome"]; // Exemplo para obter o nome no body da requisição

    $db->TStart(); // Inicia uma transação no DB (Usar sempre para inputs ou update de informação no banco)

    $query1 = "INSERT INTO tabela (nome) VALUES (:nome)"; // Define uma query para ser executada no banco de dados
    $parameters = [":nome" => $nome]; // Em um array, define os parameters, ou seja, os :variavel que serão substituidos no sql.

    $resposta1 = $db->query($query1, $parameters); // Chama a query criada com os parâmetros e armazena a resposta na variável $resposta1

    $db->TCommit(); // Efetiva a transação no DB

    // Query 2

    $query2 = "SELECT * FROM tabela"; // Define uma query para ser executada no banco de dados

    $resposta2 = $db->query($query2); // Chama a query criada e armazena a resposta na variável $resposta2

    $api->sendResponse(
        200, // Código http de retorno
        // Array de retorno
        [
            "success" => true, // booleano falando se a api executou com sucesso
            "data" => $resposta2, // Mensagem/dados de retorno (Nesse caso retorna o resultado da query)
        ]
    );
} catch (Exception $e) {
    $db->TRollback(); // Sempre quando tiver Tstart e TCommit precisa ter o TRollback no catch
    $api->tratarException($e); // Trata os erros dos métodos chamados durante a execução da api
}
