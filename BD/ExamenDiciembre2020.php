<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function creaConxMySQL(){
        $mysqli = new mysqli("localhost", "phpgalax","1234", "galaxweb");
        if ($mysqli->connect_errno) {
            echo "Falló la conexión con MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
            return false;
        }
        echo "Conexion extrablecida";
        return $mysqli;
    }
    $con = creaConxMySQL();
    $consulta = "Select nombre from usuaios where email='felipito@cabra.com';";
    $resultado = $con->query($consulta);
        if($resultado){
            $resultado->data_seek(0);
            $fila = $resultado->fetch_assoc();
            $usuario = $fila['nombre'];

        }
        //$usuario = "Pepino";
    ?>
    <h1>Bienvenido <?=$usuario?></h1>
    <table>
        <?php
        $consulta = "Select * from noticias;";
        $resultado = $con->query($consulta);
            if($resultado){
                $resultado->data_seek(0);
                while ($fila = $resultado->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>".$fila['titulo']."</td>\n";
                    echo "<td>".$fila['cuerpo']."</td>ªn";
                    echo "</tr>";
                }
            }
        ?>
    </table>
</body>
</html>