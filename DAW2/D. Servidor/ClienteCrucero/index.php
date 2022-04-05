<?php

$url = 'http://localhost/ServicioCrucero/index.php';
$uri = 'http://localhost/ServicioCrucero/';

// Instanciamos objeto cliente SOAP
$cliente = new SoapClient(null, array('location' => $url, 'uri' => $uri));

// Hacemos las peticiones al servidor mediante formularios
?>
