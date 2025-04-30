<?php

class DB
{
    protected $dbh;
    private $transaction;

    // Inicializa uma conexão com o banco
    function __construct()
    {
        $config = require __DIR__ . "/config.php";

        try {
            $dsn = "mysql:host={$config["host"]};dbname={$config["dbname"]}";
            $this->dbh = new PDO($dsn, $config["user"], $config["pass"]);
            $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->dbh->setAttribute(
                PDO::ATTR_DEFAULT_FETCH_MODE,
                PDO::FETCH_ASSOC
            );
        } catch (PDOException $e) {
            throw new Exception(
                "Erro ao conectar ao banco de dados: " . $e->getMessage()
            );
        }
    }
    /**
     * @param mixed $query
     * @param mixed $params
     */
    // Faz uma query no banco de dados
    function query($query, $params = []): array
    {
        try {
            $stmt = $this->dbh->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new Exception(
                "Erro ao executar a consulta: " . $e->getMessage()
            );
        }
    }

    // Inicia uma transação
    function TStart(): void
    {
        try {
            $this->dbh->beginTransaction();
            $this->transaction = true;
        } catch (PDOException $e) {
            throw new Exception(
                "Erro ao iniciar a transação: " . $e->getMessage()
            );
        }
    }

    // Faz commit da transação
    function TCommit(): void
    {
        try {
            $this->dbh->commit();
            $this->transaction = false;
        } catch (PDOException $e) {
            throw new Exception(
                "Erro ao comitar a transação: " . $e->getMessage()
            );
        }
    }

    // Faz rollback da transação
    function TRollback(): void
    {
        try {
            if ($this->transaction == true) {
                return;
            }
            $this->dbh->rollBack();
        } catch (PDOException $e) {
            throw new Exception(
                "Erro ao fazer rollback da transação: " . $e->getMessage()
            );
        }
    }
}

?>
