# Schema database

Qual será o schema do banco de dados?

- Usuarios

nome: usuario

| id | nome | matricula | senha | status | tipo | email |
|---|---|---|---|---|---|---|
| 1  | eu   | 12345678  | oieoe | a      | a    | eu@gmail.com |

- Salas/Materias ativas  (Web, prog ...)

nome: turma

| id | cod | nome | periodo | status | id_professor |
|---|---|---|---|---|---|
| 1  | prog002 | Progamação 2 | 202502 | a | 1 |

- Realcionamento dos alunos com as turmas (chaveadas a tabela usu)

nome: aluno_turma

| id_seq | id_usuario  | id_turma |
|---|---|---|
| 1 | 3 | prog002 |

- Questionários

nome: questionario

| id | titulo | descricao | id_turma | data_de_criacao | aberto | qtd_questoes |
|---|---|---|---|---|---|---|
| 1 | Rest api | Desafie seu conhecimento em rest api | 1 | 20250203 | f | 3 |

- Perguntas (v&f, multipla escolha...) -> Facil med dificil

nome: pergunta

| id | descricao | tipo | respostas | dificulde | id_questionario |
|---|---|---|---|---|---|
| 1 | qual a capital do brasil ? | multiplo | brasilia&#124;são bento do sul | d | 3 |

> Respostas vai ser separada com um separador tipo | e aleatorizada na mostra

- Questionários do Aluno

nome: questionario_aluno

| id_questionario | id_aluno | pontos | data_de_termino | qtd_acertos | tempo |
|---|---|---|---|---|---|
| 1 | 1 | 50 | 20250203 | 5 | 600 |
