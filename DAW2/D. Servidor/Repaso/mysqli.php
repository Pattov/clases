<?php

$dwes = new mysqli('localhost', 'dwess', 'abc123.','dwes');
$error = $dwes->connect_errno;

    $dwes->autocommit(false);

    if ($error == null) {
        $resultado= $dwes -> query("SELECT * FROM producto WHERE familia = 'NETBOK'");
        $realizada= $dwes -> query("DELETE * FROM producto WHERE familia = 'NETBOK'")

        $datos =$resultado ->fetch_array();
        //obtenemos el primer registro
        var_dump($datos);
        echo '<br>';
        echo $datos->cod;
        echo '<br>';
        echo $datos[0];
        echo '<br>';
        
     $conexion->commit();   
        
    }
$dwes->close();
}
        

