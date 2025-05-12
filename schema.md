# Schema database

Qual será o schema do banco de dados?

- Usuarios
         
| id | nome | matricula | senha | status | tipo |
|---|---|---|---|---|---|
| 1  | eu   | 12345678  | oieoe | a      | a    |

- Salas/Materias ativas  (Web, prog ...)
  
| id | cod | nome | periodo | status |
|---|---|---|---|---|
| 1  | prog002 | Progamação 2 | 202502 | a |

- Permissoes (chaveadas a tabela usu)
  
| id_seq | cod_usu | matricula | cod_materia |
|---|---|---|---|
| 1 | 3 | 1234567898 | prog002 |

- Questionários
  
| id | titulo | desc | id_materia | data de criacao
|---|---|---|---|---|
| 1 | Rest api | Desafie seu conhecimento em rest api | 1 | 20250203 | 

- Perguntas (v&f, multipla escolha...) -> Facil med dificil
  
| id | desc | tipo | respostas | dificulde | id_quest |
|---|---|---|---|---|---|
| 1 | qual a capital do brasil ? | multiplo | brasilia&#124;são bento do sul | d | 3 |

> Respostas vai ser separada com um separador tipo | e aleatorizada na mostra

