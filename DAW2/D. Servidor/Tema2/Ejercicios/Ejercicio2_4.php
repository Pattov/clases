<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2.4</title>
</head>
<body>
    <?php
    /**
     *4.- Conoce toda la información de una variable 
     * (utilice la función var_ dump()), de tal forma que puedas obtener una s
     * salida por pantalla similar a la siguiente:
        Información de la variable “nombre”: string (4) “Juan”
        Contenido de la variable: Juan
        Después de asignarle un valor nulo: NULL
     */
    $nombre="Juan";
    echo "Información de la variable “nombre”: </br>".(var_dump($nombre));
    echo 'Contenido de la variable:'.$nombre."</br>";
    $nombre=Null;
    echo 'Después de asignarle un valor nulo ';
    echo (var_dump($nombre));
    ?>
</body>
</html>