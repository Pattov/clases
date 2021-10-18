<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2.3</title>
</head>
<body>
    <?php
    /**
     *3.- Comprueba las capacidades aritméticas de PHP. 
     * Para ello, crea dos variables $operador1 y $operador2. 
     * Asígnales los valores 13 y 4, respectivamente. 
     * Define una tercera variable $resultado y escribe un código que permita 
     * hacer las siguientes operaciones:
        13 – 4
        13 + 4
        13 * 4
        13 / 4
        13 % 4

     */
    $operador1 = 13;  $operador2 = 4; $resultado;
    //Resta
    echo $operador1.' - '.$operador2." = ";
    echo $resultado = $operador1-$operador2;
    echo '</br>';
    //Suma
    echo $operador1.' + '.$operador2." = ";
    echo $resultado = $operador1+$operador2;
    echo '</br>';
    //multiplicacion
    echo $operador1.' x '.$operador2." = ";
    echo $resultado = $operador1*$operador2;
    echo '</br>';
    //division
    echo $operador1.' / '.$operador2." = ";
    echo $resultado = $operador1/$operador2;
    echo '</br>';
    //resto
    echo $operador1.' % '.$operador2." = ";
    echo $resultado = $operador1%$operador2;
    echo '</br>';
    ?>
</body>
</html>