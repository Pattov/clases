<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <input type="checkbox" name="" id="">
        <?php
        //cargamos los datos de conexion a la base de datos
        require 'datos_acceso.php';
        //$dwes = new mysqli('localhost:80', 'root', '', 'dwes');
            $dwes = new mysqli();
            $dwes->connect($host, $user, $pass,$db);
            $error = $dwes->connect_errno;
            if($error != null){
                echo "<p>Error $error conectando a la base de datos: $dwes->connect_errno</p>";
            }else{
                $sql = 'SELECT nombre_corto FROM producto';
                $resultado = $dwes->query($sql);
                if($resultado){
                    for ($i = 0; $i < $resultado->num_rows; $i++) {
                        $row = $resultado->fetch_row();
                        echo $row[0]."<br>";
                    }
                    $resultado->free();
                } else {
                    echo "La query ejecutada no ha funcionado";
                }
            }
        ?>
    </body>
</html>