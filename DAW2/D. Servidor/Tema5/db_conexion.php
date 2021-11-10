<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        //$dwes = new mysqli('localhost:80', 'root', '', 'dwes');
            $dwes = new mysqli();
            $dwes->connect('localhost', 'root', '', 'dwes');
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