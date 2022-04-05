<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $url = 'http://localhost/ServicioWebCalculadora/index.php';
        $uri = 'http://localhost/ServicioWebCalculadora';
        
       $cliente = new SoapClient(null,array('location' => $url,'uri' => $uri));

        $suma = $cliente->suma(2,3);
        $resta = $cliente->resta(2,3);
        print("La suma es ".$suma);
        print("<br />La resta es ".$resta);
        ?>
    </body>
</html>
