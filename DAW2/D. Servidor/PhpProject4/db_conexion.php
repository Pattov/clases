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
        //cargamos los datos de conexion a la base de datos
        require 'datos_acceso.php';
        //$dwes = new mysqli('localhost:80', 'root', '', 'dwes');
            $dwes = new mysqli();
            $dwes->connect($host, $user, $pass, $db);
            $error = $dwes->connect_errno;
            if($error != null){
                echo "<p>Error $error conectando a la base de datos: $dwes->connect_errno</p>";
            }else{
                echo "Conexion exitosa";
                echo $dwes->server_info;
                //cerrar la conexión
                $dwes->close();
            }
        ?>
    </body>
</html>
