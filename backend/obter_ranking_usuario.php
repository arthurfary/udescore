<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("GET");

    $id_aluno = $api->obterParametro("id_aluno");

    $query = "WITH ranking AS (
                SELECT 
                    questionario_aluno.id_aluno,
                    usuario.nome,
                    SUM(questionario_aluno.pontos) AS total_pontos,
                    ROW_NUMBER() OVER (ORDER BY SUM(questionario_aluno.pontos) DESC) AS position
                FROM questionario_aluno
                JOIN usuario ON usuario.id = questionario_aluno.id_aluno
                GROUP BY questionario_aluno.id_aluno, usuario.nome
            ),
            posicao_aluno AS (
                SELECT position FROM ranking WHERE id_aluno = :id_aluno
            )
            SELECT * FROM ranking
            WHERE position BETWEEN (SELECT position FROM posicao_aluno) - 2 
                                AND (SELECT position FROM posicao_aluno) + 2
            ORDER BY position
        ";

    $parameters = [ ":id_aluno" => $id_aluno ];
    $resposta = $db->query($query, $parameters);

    // Objeto vazio padrão
    $nullObj = [
        "id_aluno" => null,
        "nome" => "null",
        "total_pontos" => null,
        "position" => null
    ];

    // Encontrar o índice do aluno
    $alunoIndex = null;
    foreach ($resposta as $i => $row) {
        if ($row["id_aluno"] == $id_aluno) {
            $alunoIndex = $i;
            break;
        }
    }

    // Inicializa o array com objetos nulos
    $data = [$nullObj, $nullObj, $nullObj, $nullObj, $nullObj];

    if ($alunoIndex !== null) {
        // aluno no centro (índice 2)
        $data[2] = $resposta[$alunoIndex] ?? $nullObj;
        $data[1] = $resposta[$alunoIndex - 1] ?? $nullObj;
        $data[0] = $resposta[$alunoIndex - 2] ?? $nullObj;
        $data[3] = $resposta[$alunoIndex + 1] ?? $nullObj;
        $data[4] = $resposta[$alunoIndex + 2] ?? $nullObj;
    }

    $api->sendResponse(200, [
        "success" => true,
        "data" => $data
    ]);

} catch (Exception $e) {
    $db->TRollback();
    $api->tratarException($e);
}
