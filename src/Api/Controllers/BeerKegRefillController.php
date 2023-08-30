<?php
class BeerKegRefillController extends BaseController
{
  private $requestMethod;
  private $service;

  public function __construct($requestMethod)
  {
    $this->requestMethod = $requestMethod;
    $this->service = new BeerKegRefillService();
  }

  public function processRequest()
  {
    switch ($this->requestMethod) {
      case 'GET':
        $response = $this->getAllBeerKegRefill();
        break;
      case 'POST':
        $response = $this->createBeerKegRefill();
        break;
      default:
        $response = $this->notFoundResponse();
        break;
    }
    header($response['status_code_header']);
    if ($response['body']) {
      echo $response['body'];
    }
  }


  private function getAllBeerKegRefill()
  {
    $strErrorDesc = '';
    $arrQueryStringParams = $this->getQueryStringParams();
    try {
      $intLimit = 10;
      if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {
        $intLimit = $arrQueryStringParams['limit'];
      }
      $arrUsers = $this->service->getBeerKegRefills($intLimit);
      $responseData = json_encode($arrUsers);
    } catch (Error $e) {
      $strErrorDesc = $e->getMessage() . 'Something went wrong! Please contact support.';
      $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
    }

    // send output
    if (!$strErrorDesc) {
      $this->sendOutput(
        $responseData,
        array('Content-Type: application/json', 'HTTP/1.1 200 OK')
      );
    } else {
      $this->sendOutput(
        json_encode(array('error' => $strErrorDesc)),
        array('Content-Type: application/json', $strErrorHeader)
      );
    }
  }

  private function createBeerKegRefill()
  {
    $input = (array) json_decode(file_get_contents('php://input'), TRUE);

    // Check if there are any parameters in the input
    if (empty($input)) {
        return $this->unprocessableEntityResponse();
    }

    if (!$this->validateData($input)) {
      return $this->unprocessableEntityResponse();
    }
    $this->service->insert($input);
    $response['status_code_header'] = 'HTTP/1.1 201 Created';
    $response['body'] = null;
    return $response;
  }

  private function validateData($input)
  {
    if (!isset($input['BarName'])) {
      return false;
    }
    if (!isset($input['BeerName'])) {
      return false;
    }
    if (!isset($input['BeerKegId'])) {
      return false;
    }
    if (!isset($input['RefillDateTime'])) {
      return false;
    }
    if (!isset($input['QuantityLeftInKeg'])) {
      return false;
    }
    if (!isset($input['QuantityRefilled'])) {
      return false;
    }

    return true;
  }

  private function unprocessableEntityResponse()
  {
      $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
      $response['body'] = json_encode([
          'error' => 'Invalid input'
      ]);
      return $response;
  }

  private function notFoundResponse()
  {
    $response['status_code_header'] = 'HTTP/1.1 422 Unprocessable Entity';
    $response['body'] = 'Method not supported';
    return $response;
  }
}
