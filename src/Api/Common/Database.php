<?php
class Database
{
    protected $connection = null;
    public function __construct()
    {
        try {
            $this->connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);

            if ( mysqli_connect_errno()) {
                throw new Exception("Could not connect to database.");
            }
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
    public function select($query = "" , $params = [])
    {
        try {
            $stmt = $this->executeStatement( $query , $params );
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
            $stmt->close();
            return $result;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }
        return false;
    }
    public function executeStatement($query = "", $params = [])
    {
        try {
            $stmt = $this->connection->prepare($query);
            if ($stmt === false) {
                throw new Exception("Unable to do prepared statement: " . $query);
            }
            if ($params) {
                $bindParams = array_merge([$params[0]], array_slice($params, 1));
                $stmt->bind_param(...$bindParams);
            }
            $stmt->execute();
            return $stmt;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
