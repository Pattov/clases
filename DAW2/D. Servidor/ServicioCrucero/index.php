
<?php

// Llamada al controlador
require_once './mvc/controllers/controller.php';
$server = new SoapServer(null, array('uri' => ''));
$server->handle();
?>