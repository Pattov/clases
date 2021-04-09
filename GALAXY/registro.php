<!DOCTYPE html>
<html lang="es">
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

        return $mysqli;
    }
    function validaciones($mysql){
        //Esta funcion devuelve true si todas las validaciones son correctas
        //Devuelva false si hay validaciones incorrectas (y escribe el error)
        $err = false;
        if(strpos($_POST["mail"], "@") ===false){
            echo "Falta la arroba.";
            $err = true;
        }

        //resto de validaciones...
        if($_POST["pass"] == ''){
            echo "No has escrito nada.";
            $err = true;
        }
        //Comprobamos que no este dado de alta el email introducido
        //$query = "SELECT * From usuarios WHERE email = '".$_POST["mail"]."';";
        $query = "SELECT * From usuarios;";
        $resultado = $mysql->query($query);
        if($resultado){
            $resultado->data_seek(0);
            while ($fila = $resultado->fetch_assoc()) {
                echo " email = " . $fila['email'] . "\n";
                echo " sha = " . $fila['password'] . "\n";
                echo " nombre = " . $fila['nombre'] . "\n";
            }
        }
        return !$err;
    }
    //Aquí empieza el flujo principal del script
    
    //Vamos a mostrar el contenido del formulario
    echo "Email: ".$_POST["mail"]."<br>";
    echo "Psword: ".$_POST["pass"]."<br>";
    echo "Nombre: ".$_POST["nombre"]."<br>";
    $con = creaConxMySQL();
    if($con !== false){
        if(validaciones($con)){
            //podemos seguir con el proceso porque todo esta ok
            echo "Todos los campos OK";
        }
        //validaciones
        //comprobar
    }
    
?>   
</body>
</html>
