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
        //devuelve la longitud de la cadena
        echo strlen ( "Hola"); //4
        echo "<br>";
        //devuelve el numero de las palablas
        echo str_word_count (" Hola esto quiero que lo cuentes") // 6
        echo "<br>";
        //darle la vuelta a la cadena
        echo strrev ("Palencia") //aicnelaP
        echo "<br>";
        //Buscar texto dentro de una cadena
        echo strpos ("hola amigo","a");  // 3 -> coge la primera que encuentra y recuerda que la posicion empieza en 0
        echo "<br>";
        //Sustituye un texto dentro de una cadena
        echo str_replace("mundo","clase", "Hola mundo"); // Hola Clase              buscar,reemplazar
        echo "<br>";


    ?>
</body>
</html>