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
    function validaciones(){
        //Esta funcion devuelve true si todas las validaciones son correctas
        //Devuelva false si hay validaciones incorrectas (y escribe el error)
        $err = false;
        if(strpos($_POST["mail"], "@")===false){
            echo "Falta la arroba.";
            $err = true;
        }

        //resto de validaciones...
        if($_POST["pass"]== ''){
            echo "No has escrito nada.";
            $err = true;
        }
        return !$err;
    }
    //Aquí empieza el flujo principal del script
    
    //Vamos a mostrar el contenido del formulario
    echo "Email: ".$_POST["mail"]."<br>";
    echo "Psword: ".$_POST["pass"]."<br>";
    echo "Nombre: ".$_POST["nombre"]."<br>";
    
    if(validaciones()){
        //podemos seguir con el proceso porque todo esta ok
        echo "Todos los campos OK"
    }
    //validaciones
    //comprobar
?>   
</body>
</html>
