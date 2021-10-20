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
        //1. Realiza un programa que calcule la media de tres números.
        $a = 5;
        $b = 3;
        $c = 4;
        $resultado = $a + $b + $c;
        echo "La media de " . $a . " + " . $b . " + " . $c . " es " . ($resultado / 3);
        "<hr>";
        //2. Realizar un programa que intercambie el valor de dos variables.
        $b = $a;
        $c = $a;
        echo "</br>El segundo número es ahora " . $b;
        echo "</br>El tercer número es ahora " . $c;
        "<hr>";
        //3. Realizar un programa que desglose una cantidad de euros en billetes de 10 y 5 y monedas de 1 euro.
        $dinero = 50;
        $Bill_5 = 0;
        $Bill_10 = 0;
        $Mon_euro = 0;
        do {
            if (($dinero - 10) >= 0) {//32
                $Bill_10++;
                $dinero = $dinero - 10;
                echo "<br>".$dinero."</br>";
            } 
                elseif (($dinero - 5) >= 0) {//32
                $Bill_5++;
                $dinero = $dinero - 5;
                echo "<br>".$dinero."</br>";
            } 
            else{
                
                $dinero = $dinero - 1;
                $Mon_euro++;
                echo "<br>".$dinero."</br>";  
            }
        } while ($dinero != 0);
        echo "</br>Hay " . $Bill_10 . " Billetes de 10€ \t" . $Bill_5 . " Billetes de 5€ " . $Mon_euro . " Monedas de 1 €";
        ?>
    </body>
</html>