<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <style>
            input{
                margin:0 10px;
            }
        </style>
        <title></title>
    </head>
    <body>
        <h1>Productos tienda 1</h1>
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
                        echo "<input type=\"checkbox\" >";
                        $row = $resultado->fetch_row();
                        echo $row[0]."<br>";
                    }
                    $sql2 = 'SELECT p.nombre_corto as "Nombre producto", s.unidades as "Stock" FROM `producto` as p,`tienda`as t,`stock` as s WHERE p.cod = s.producto && s.tienda = t.cod;';
                    $resultado = $dwes->query($sql2);
                    for ($i = 0; $i < $resultado->num_rows; $i++) {
                        echo "<input type=\"checkbox\" >";
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
