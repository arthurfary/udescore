<?php

require_once "api.php";
require_once "db.php";

$api = new Api();

try {
    // Permite apenas POST

    $api->check_method("POST");

    $db = new DB();

    // Lê e valida o corpo da requisição
    $body = $api->obterBody();
    $api->validarCamposObrigatoriosBody(["nome", "email", "senha", "matricula"], $body);

    $nome = $body["nome"];
    $email = $body["email"];
    $senha = $body["senha"];
    $matricula = $body["matricula"];

    // Hash em argon2id
    $pass_hash = password_hash($senha, PASSWORD_ARGON2ID);

    $db->TStart();

    $db->query("INSERT INTO usuario (nome, email, senha, matricula, status, tipo) VALUES ('$nome', '$email', '$pass_hash', '$matricula', 'a', 'a')");

    $db->TCommit();

    $api->sendResponse(200, ['success' => true]);

} catch (Exception $e) {
    $db->TRollback();

    $api->sendResponse(500, ['success' => false]);
    $api->tratarException($e);
}
