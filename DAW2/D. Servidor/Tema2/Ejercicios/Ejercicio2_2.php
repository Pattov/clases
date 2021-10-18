<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2.2</title>
</head>
<body>
    <?php
    /**
     * Muestra por pantalla el mensaje “Segundo ejercicio: visualización del contenido de variables”. 
     * A continuación, define dos variables $nombre y $edad y asígnales un valor correcto.
     * Después, crea una sentencia que muestre un mensaje que contenga dichas variables similar 
     * a “Mi nombre es valor_de_la_ variable_$nombre y mi edad es valor_de_la_variable_$edad”. 
     * Inserta un comentario encima de cada variable explicando el significado del valor que almacenará cada variable.
     * 
     */
    echo 'Segundo ejercicio: visualización del contenido de variables'."</br>"; 
    //string
    $nombre = "Pepe";  
    //int
    $edad = 24;
    echo 'Mi nombre es '.$nombre.' y mi edad es '.$edad.' .';
    ?>
</body>
</html>