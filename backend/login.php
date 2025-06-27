<?php

require_once "api.php";
require_once "db.php";

$api = new Api();

$db = new DB();

try {
    // Permite apenas POST
    $api->check_method("POST");

    // Lê e valida o corpo da requisição
    $body = $api->obterBody();
    $api->validarCamposObrigatoriosBody(["email", "senha"], $body);

    $email = $body["email"];
    $senha = $body["senha"];

    $usuario = $db->query(
        "SELECT id, nome, email, senha, tipo FROM usuario WHERE email = ('$email')"
    )[0];

    // Aqui você faria uma verificação no banco de dados, por exemplo
    if (!$usuario) {
        return $api->sendResponse(
            401,
            [
                "message" => "Email não encontrado.",
                "success" => false
            ]
        );
    }

    if ($email !== $usuario["email"] || !password_verify($senha, $usuario["senha"])) {
        return $api->sendResponse(
            401,
            [
                "message" => "Email ou senha inválidos.",
                "success" => false
            ]
        );
    }

    return $api->sendResponse(
        200,
        [
          "message" => "Login realizado com sucesso!",
          "success" => true,
          "data" => [
            "id" => $usuario["id"],
            "nome" => $usuario["nome"],
            "tipo" => $usuario["tipo"]
          ]
        ]
    );
} catch (Exception $e) {
    $api->tratarException($e);
}
