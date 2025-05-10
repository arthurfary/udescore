# Schema database

Qual será o schema do banco de dados?

- Usuarios                 status deletado ?
| id | nome | matricula | senha | status | tipo | 
| 1  | eu   | 12345678  | oieoe | a      | a    |

- Salas/Materias ativas  (Web, prog ...)
| id | cod | nome | periodo | status |

- Permissoes (chaveadas a tabela usu)
| id_seq | cod_usu | matricula | cod_materia 

- Questionários
| id | desc | id_materia | titulo | data de criacao

- Perguntas (v&f, multipla escolha...) -> Facil med dificil
| id | desc | tipo | respostas | dificulde | id_quest
> Respostas vai ser separada com um separador tipo | e aleatorizada na mostra

