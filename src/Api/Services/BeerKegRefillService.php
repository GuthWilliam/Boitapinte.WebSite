<?php
require_once PROJECT_ROOT_PATH . "/Common/Database.php";
class BeerKegRefillService extends Database
{
    public function getBeerKegRefills($limit)
    {
        return $this->select("SELECT * FROM BeerKegRefill ORDER by InsertionDate DESC LIMIT ?", ["i", $limit]);
    }

    public function insert(Array $input)
    {
        $query = "INSERT INTO BeerKegRefill (BarName, BeerName, BeerKegId, RefillDateTime, QuantityLeftInKeg, QuantityRefilled) VALUES (?, ?, ?, ?, ?, ?)";

        // Define data types for each parameter
        $params = ['ssisdd', $input['BarName'], $input['BeerName'], $input['BeerKegId'], $input['RefillDateTime'], $input['QuantityLeftInKeg'], $input['QuantityRefilled']];

        try {
            $stmt = $this->executeStatement($query, $params);
            $stmt->close();
            return true; // Successful insertion
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
