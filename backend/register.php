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

    $db_email = $db->query("SELECT email FROM usuario WHERE email = '$email'");

    if ($db_email) { // se já tiver cadastrado o email
        return $api->sendResponse(
            400,
            ['success' => false, 'message' => 'Email já cadastrado.']
        );
    }

    // Hash em argon2id
    $pass_hash = password_hash($senha, PASSWORD_ARGON2ID);
    $db->TStart();

    $db->query(
        "INSERT INTO usuario (nome, email, senha, matricula, status, tipo) "
        . "VALUES ('$nome', '$email', '$pass_hash', '$matricula', 'a', 'a')"
    );

    $db->TCommit();

    $api->sendResponse(200, ['success' => true, 'message' => 'Email cadastrado com sucesso.']);

} catch (Exception $e) {
    $db->TRollback();
    
    $api->tratarException($e);
}
