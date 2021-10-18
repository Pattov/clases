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
   
        //operaciones matematicas
        echo (pi())."</br>"; //3.1415926535898
        //Maximos y minimos
        echo "</br>".(min(5,89,45,1));//1
        echo "<br>".max(45,48,65,15)."</br>";//65
        //Valor absotulo
        echo (abs(-4565.45621))."</br>"; //4565.45621
        //Raiz Cuadrada
        echo (sqrt(45.4))."</br>";//6.737952211692
        //redondeo
        echo "</hr>".round(25.48213,2)."</br>"; // por defecto sin redondeo es 0 //25.48
        echo floor(25.48213)."</br>";//25
        echo ceil(25.48213)."</br>";//26
        //numeros random
        echo "<hr>".rand(4,60);
        
        
        // F U N C I O N E S   R E L A C I O N A L E S  
        // con tipos de datos
       $variable1 = "hola";
         echo "</br>". gettype($variable1);//string
         echo "</br>". is_integer($variable1);
         echo "</br>". isset($variable1);
         unset($variable1);
         
         //Ámbito de variables
         $x = 1;//variable local
         function prueba(){
             global $x;
             static $c = 0;
             $c++;
             $b = $x;
             echo "<hr> Ámbito variables".$b;
             echo "</br> Static".$c;
         }
         prueba();
         prueba();
    ?>
</body>