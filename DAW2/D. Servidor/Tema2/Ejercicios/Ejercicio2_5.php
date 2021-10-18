<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2.5</title>
</head>
<body>
    <?php
    /**
     *5.- Asigna los siguientes valores a una variable $temporal: “Juan”; 3,14;
     *  false; 3; null. Muestra por pantalla el tipo que se le asigna a la 
     * variable utilizando la función gettype().
     */
    $temporal= "Juan";
    echo gettype($temporal)."</br>";
    $temporal= 3.14;
    echo gettype($temporal)."</br>"; 
    $temporal= false;
    echo gettype($temporal)."</br>";
    $temporal= 3;
    echo gettype($temporal)."</br>";
    $temporal= null;
    echo gettype($temporal)."</br>";
    ?>
</body>
</html>