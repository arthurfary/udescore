<?php

class Api
{
    // Método que inicia a api
    function __construct()
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: *");
        header(
            "Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
        );

        if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
            exit();
        }
    }
    /**
     * @param string $method
     */
    // Valida o método da api chamado
    public function check_method(string $method): void
    {
        if (strtoupper($_SERVER["REQUEST_METHOD"]) !== strtoupper($method)) {
            throw new InvalidArgumentException(
                "Método incorreto: " . strtoupper($_SERVER["REQUEST_METHOD"])
            );
        }
    }
    /**
     * @param mixed $code
     * @param mixed $data
     */
    // Escrever mensagem de retorno em JSON
    function sendResponse($code, $data): void
    {
        http_response_code($code);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        exit();
    }

    /**
     * @param mixed $camposObrigatorios
     * @param mixed $data
     */
    // Valida se todos os campos obrigatórios estão preenchidos
    function validarCamposObrigatoriosBody($camposObrigatorios, $data): void
    {
        $camposFaltando = [];
        foreach ($camposObrigatorios as $campo) {
            if (!isset($data[$campo]) || empty($data[$campo])) {
                $camposFaltando[] = $campo;
            }
        }

        if (!empty($camposFaltando)) {
            throw new InvalidArgumentException(
                "Preencha os campos obrigatórios"
            );
        }
    }
    // Obtém o body da chamada
    function obterBody(): mixed
    {
        $request_body = file_get_contents("php://input");
        if (empty($request_body)) {
            throw new InvalidArgumentException("No data provided");
        }
        $data = json_decode($request_body, true);
        if ($data === null) {
            throw new InvalidArgumentException("Invalid JSON data");
        }
        return $data;
    }
    /**
     * @param mixed $parametro
     * @param mixed $obrigatorio
     */
    // Obtém o valor de um parâmetro específico da API e define se vai ser obrigatório
    function obterParametro($parametro, $obrigatorio = false): string|null
    {
        if (
            $obrigatorio &&
            (!isset($_GET[$parametro]) || empty($_GET[$parametro]))
        ) {
            throw new InvalidArgumentException(
                "Parâmetro não informado: " . $parametro
            );
        }

        if (!isset($_GET[$parametro])) {
            return null;
        }

        return $_GET[$parametro];
    }
    // Centraliza o tratamento de todas as mensagens de erro das APIs
    public function tratarException(Exception $exception): void
    {
        if ($exception instanceof InvalidArgumentException) {
            $this->sendResponse(400, [
                "message" => $exception->getMessage(),
                "success" => false,
            ]);
        } else {
            $this->sendResponse(500, [
                "message" => $exception->getMessage(),
                "success" => false,
            ]);
        }
    }
    /**
     * @param mixed $header
     */
    // Obter o valor de um header específico (Sempre obrigatório)
    public function obterHeader($header): array|bool
    {
        $headers = getallheaders();
        if (!isset($headers[$header])) {
            throw new InvalidArgumentException(
                "Header não informado: " . $header
            );
        }
        return $headers[$header];
    }
}

class Perguntas
{
    private PDO $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function listar(): array
    {
        $stmt = $this->pdo->query("SELECT * FROM pergunta");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}


?>
