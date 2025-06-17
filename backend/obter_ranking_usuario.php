<?php

require_once "./api.php";
require_once "./db.php";

try {
    $api = new Api();
    $db = new DB();

    $api->check_method("GET");

    $id_aluno = $api->obterParametro("id_aluno");

    $query = " WITH ranking AS (
                SELECT 
                    questionario_aluno.id_aluno,
                    usuario.nome,
                    SUM(questionario_aluno.pontos) AS total_pontos,
                    ROW_NUMBER() OVER (ORDER BY SUM(questionario_aluno.pontos) DESC) AS posicao
                FROM questionario_aluno
                JOIN usuario ON usuario.id = questionario_aluno.id_aluno
                GROUP BY questionario_aluno.id_aluno, usuario.nome
            ),
            posicao_aluno AS (
                SELECT posicao FROM ranking WHERE id_aluno = :id_aluno
            )
            SELECT * FROM ranking
            WHERE posicao BETWEEN (SELECT posicao FROM posicao_aluno) - 2 
                            AND (SELECT posicao FROM posicao_aluno) + 2
            ORDER BY posicao
        ";

    $parameters = [
        ":id_aluno" => $id_aluno,
    ];

    $resposta = $db->query($query, $parameters);

    $data = [
        "aluno-2" => null,
        "aluno-1" => null,
        "aluno"   => null,
        "aluno+1" => null,
        "aluno+2" => null,
    ];
    
    // Procura o índice do aluno na lista
    $index = null;
    foreach ($resposta as $i => $row) {
        if ($row['id_aluno'] == $id_aluno) {
            $index = $i;
            break;
        }
    }
    
    if ($index !== null) {
        $data["aluno"] = $resposta[$index] ?? null;
        $data["aluno-1"] = $resposta[$index - 1] ?? null;
        $data["aluno-2"] = $resposta[$index - 2] ?? null;
        $data["aluno+1"] = $resposta[$index + 1] ?? null;
        $data["aluno+2"] = $resposta[$index + 2] ?? null;
    }
    
    $api->sendResponse(200, [
        "success" => true,
        "data" => $data,
    ]);
    
} catch (Exception $e) {
    $db->TRollback();
    $api->tratarException($e);
}
