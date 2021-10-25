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
            echo "Desde el día 7/4/2021 hasta el día 22/10/2021 hay ";
            $dia1 = new DateTime("2021-4-7");
            $dia2 = new DateTime("2021-10-22");
            $diferencia = $dia1->diff($dia2);
            echo $diferencia->days." dias <hr>";

            //5.Haz un script que sume un número de horas a una fecha.
            $y = strtotime("+5  hours 20 minutes");
            echo "Ahora mismo son ".date("d-m-Y H:i:s", $x)."</br>";
            echo "Si le sumas 5 horas y 20 minutos son las ".date("d-m-Y H:i:s", $y)."<hr>";


            /**6.Comprueba por pantalla el resultado de las siguientes comprobaciones si a las variables se les asignan los valores 8, 3 y 3.
                    $a == $b
                    $a != $b
                    $a < $b
                    $a > $b
                    $a >= $c
                    $a <= $c*/
                    $a = 8;
                    $b = 3;
                    $c = 3;
                    if ($a == $b){
                        echo $a." es igual a".$b."</br>";
                    }
                    if ($a != $b){
                        echo $a." no es igual a".$b."</br>";
                    }
                    if ($a < $b){
                        echo $a." es menos que ".$b."</br>";
                    }
                    if ($a > $b){
                        echo $a." es mayor que ".$b."</br>";
                    }
                    if ($a >= $c){
                        echo $a." es mayor o igual que ".$c."</br>";
                    }
                    if ($a <= $c){
                        echo $a." es menor o igual que ".$c."</br>";
                    }    
        

            /**7.Haz lo mismo que en el ejercicio anterior pero con las instrucciones y tomando los mismos valores anteriores:
                    ($a == $b) && ($c > $b)
                    ($a == $b) || ($b == $c)
                    ($b <= $c)*/
                    if (($a == $b) && ($c > $b)){
                        echo $a." es igual a".$b." y ".$c." es mayor que ".$b."</br>";
                    }
                    if (($a == $b) || ($b == $c)){
                        echo $a." es igual a".$b." y ".$b." es igual que ".$c."</br>";
                    }
                    if ($b <= $c){
                        echo $a." es menos o igual que ".$b."</br>";
                    }   

            //8.Hacer un programa que muestre en pantalla información de PHP con la función phpinfo(). Muestra la información centrada horizontalmente en la pantalla.
            phpinfo();        

        ?>
    </body>
</html>