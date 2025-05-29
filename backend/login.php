<?php

require_once("Api.php");

$api = new Api();

try {
    // Permite apenas POST
    $api->check_method("POST");

    // Lê e valida o corpo da requisição
    $body = $api->obterBody();
    $api->validarCamposObrigatoriosBody(["email", "senha"], $body);

    $email = $body["email"];
    $senha = $body["senha"];

    // Aqui você faria uma verificação no banco de dados, por exemplo
    if ($email === "teste@exemplo.com" && $senha === "123456") {
        $api->sendResponse(200, [
            "message" => "Login realizado com sucesso!",
            "success" => true,
            "token" => "fake-jwt-token-aqui"
        ]);
    } else {
        $api->sendResponse(401, [
            "message" => "Email ou senha inválidos.",
            "success" => false
        ]);
    }
} catch (Exception $e) {
    $api->tratarException($e);
}
