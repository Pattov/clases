<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Estructura de control</title>
    </head>
    <body>
        <?php
        // E S T R U C T U R A    D E    C O N T R O L
        //if... else if... else
        $a = 1;
        if ($a == 1) {
            echo "La variable es igual a uno </br>";
        } else {
            echo "La variable a no es 1</br>";
        }//La variable es igual a uno
        if ($a != 1) {
            echo "La variable no es igual a uno </br>";
        } elseif ($a < 0) {
            echo "La variable es negativa</br>";
        } else {
            echo "La variable es igual a uno </br>";
        }//La variable es igual a uno
        echo "<hr>";
        //switch
        switch ($a) {
            case 0:
                echo "La variable es 0</br>";
                break;
            case 1:
                echo "La variable es uno</br>";
                break;
            default:
                break;
        }
        echo "<hr>";
        //Bucles
            //While
            while ($a<10){ //condicion de entrada
                echo $a++;
            }
            //Do...While
            do{
                echo $a++;
            }while ($a<15);//condicion de salida
            //For
            for ($indice = 0; $indice < 10; $indice++) {
                echo $indice;
            }
            //ForEach
            $array = array(1, 2, 3, 4);
            foreach ($array as &$valor) {//& es para modificar los valores del array si es para un echo no es necesario ponerla
                $valor = $valor * 2;
            }
            
        ?>
    </body>
</html>