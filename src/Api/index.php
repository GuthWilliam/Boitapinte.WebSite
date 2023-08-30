<?php
ini_set('display_errors',1);
require __DIR__ . "/inc/bootstrap.php";

$apiKey = isset($_SERVER['HTTP_X_API_KEY']) ? $_SERVER['HTTP_X_API_KEY'] : null;
$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($apiKey != API_KEY && $requestMethod == 'POST') {
  header("HTTP/1.1 401 Unauthorized");
  echo json_encode(['error' => 'Unauthorized']);
  exit();
}

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode( '/', $uri );
if ((isset($uri[3]) && $uri[3] != 'BeerKegRefill') || !isset($uri[3])) {
    header("HTTP/1.1 404 Not Found");
    exit();
}
require PROJECT_ROOT_PATH . "/Controllers/BeerKegRefillController.php";
$controller = new BeerKegRefillController($requestMethod);
$controller->processRequest();
?>
