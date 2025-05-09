# Padrões a serem seguidos nas APIs

# Como começar a desenvolver

Fazer o fork do projeto original (https://github.com/arthurfary/udescore).
Em relação ao seu repositório após o fork faça os seguintes passos:

Entrar na pasta do seu apache pelo terminal:
- Windows: /xampp/htdocs
- Linux: /var/www/html

Clonar o repositório:

```
git clone https://github.com/{usuario}/udescore
```

Agora abra no VS Code a pasta criada (udescore) e começe a desenvolver, mas não antes do próximo passo:

## Antes de Começar a Desenvolver - Acesso ao DB

Baixar os arquivos de configurações através do link do drive: https://drive.google.com/file/d/1RK1tvsl-elTu_WQoRKkyghRftmZsbl4S/view?usp=sharing

Senha do arquivo zip: uu6QYk~L]3

Pegar os arquivos ".htaccess" e "config.php" e colocar dentro da pasta /backend.
Pronto, seu acesso ao banco de dados deve estar funcionando normalmente.

# Backend API - Exemplo

Este diretório contém o backend da aplicação, com APIs organizadas por subpastas. Cada subpasta pode conter sua própria `index.php`, que será usada como ponto de entrada para as rotas.
Foi criado um exemplo de api no diretório /backend/example/index.php com os principais detalhes necessários na criação da api.

## 📁 Estrutura

```
backend
│
├── example
│   └── index.php        (Arquivo da API em /backend/example)
│
├── api.php              (Classe para definições da API)
└── db.php               (Classe para interações com o Banco de Dados)
```
