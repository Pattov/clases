<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FUNCIONES</title>
    </head>
    <body>
        <?php 
            //1.Obtén la fecha actual con formato día-mes-año.
            echo date("d-m-Y")."<hr>";
            
            //2.Haz un script que reste un número de días a la fecha.
            $x = strtotime("-5 days"); 
            echo date("d-m-Y", $x)."<hr>";

            //3.Haz un script en php que compruebe si una fecha dada es correcta o no e imprima en pantalla un mensaje.
            $mes = 2;
            $dia = 30;
            $anio = 2021;
            
            if(checkdate($mes, $dia, $anio)==false){
                echo "La fecha ".$dia."-".$mes."-".$anio." es falsa";
            }else{
                echo "La fecha es valida";
            }
            echo "<hr>";
            //4.Haz un script que calcule el número de días transcurridos desde una fecha dada a otra.
            

            //5.Haz un script que sume un número de horas a una fecha.



            /**6.Comprueba por pantalla el resultado de las siguientes comprobaciones si a las variables se les asignan los valores 8, 3 y 3.
                    $a == $b
                    $a != $b
                    $a < $b
                    $a > $b
                    $a >= $c
                    $a <= $c*/

            /**7.Haz lo mismo que en el ejercicio anterior pero con las instrucciones y tomando los mismos valores anteriores:
                    ($a == $b) && ($c > $b)
                    ($a == $b) || ($b == $c)
                    ($b <= $c)*/

            //8.Hacer un programa que muestre en pantalla información de PHP con la función phpinfo(). Muestra la información centrada horizontalmente en la pantalla.

        ?>
    </body>
</html>