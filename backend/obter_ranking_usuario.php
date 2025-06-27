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

    $parameters = [
        ":id_aluno" => $id_aluno,
    ];

    $resposta = $db->query($query, $parameters);

    // Organiza para o aluno estar sempre no meio (se possível)
    $alunoIndex = null;
    foreach ($resposta as $i => $row) {
        if ($row["id_aluno"] == $id_aluno) {
            $alunoIndex = $i;
            break;
        }
    }

    $data = [];

    if ($alunoIndex !== null) {
        // Pega até 2 antes e 2 depois, mas mantendo a ordem e evitando índice inválido
        $start = max(0, $alunoIndex - 2);
        $end = min(count($resposta) - 1, $alunoIndex + 2);

        for ($i = $start; $i <= $end; $i++) {
            $data[] = $resposta[$i];
        }
    }

    $api->sendResponse(200, [
        "success" => true,
        "data" => $data,
    ]);

} catch (Exception $e) {
    $db->TRollback();
    $api->tratarException($e);
}
