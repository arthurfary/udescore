# Schema database

Qual será o schema do banco de dados?

- Usuarios

| id  | nome | matricula | senha | status | tipo | email        |
| --- | ---- | --------- | ----- | ------ | ---- | ------------ |
| 1   | eu   | 12345678  | oieoe | a      | a    | eu@gmail.com |

- Salas/Materias ativas (Web, prog ...)

| id  | cod     | nome         | data_criacao | status | id_professor |
| --- | ------- | ------------ | ------------ | ------ | ------------ |
| 1   | prog002 | Progamação 2 | 2025-02-15   | a      | 1            |

- Permissoes (chaveadas a tabela usu)

| id_seq | cod_usu | matricula  | cod_materia |
| ------ | ------- | ---------- | ----------- |
| 1      | 3       | 1234567898 | prog002     |

- Questionários

| id  | titulo   | desc                                 | id_materia | data de criacao | aberto | qtd_questoes |
| --- | -------- | ------------------------------------ | ---------- | --------------- | ------ | ------------ |
| 1   | Rest api | Desafie seu conhecimento em rest api | 1          | 20250203        | f      | 3            |

- Perguntas (v&f, multipla escolha...) -> Facil med dificil

| id  | desc                       | tipo     | respostas                      | dificulde | id_quest |
| --- | -------------------------- | -------- | ------------------------------ | --------- | -------- |
| 1   | qual a capital do brasil ? | multiplo | brasilia&#124;são bento do sul | d         | 3        |

> Respostas vai ser separada com um separador tipo | e aleatorizada na mostra

- Questionários do Aluno

| id_quest | id_aluno | pontos | data de termino | qtd_acertos | tempo |
| -------- | -------- | ------ | --------------- | ----------- | ----- |
| 1        | 1        | 50     | 20250203        | 5           | 600   |
