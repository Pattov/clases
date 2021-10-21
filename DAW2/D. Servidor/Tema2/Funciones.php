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
        //F U N C I O N E S   S I N    P A R A M E T R O S 
        function funcion1() {
            //aqui escribimos las instrucciones
        }
        function saludaPorPantalla() {
            echo "Hola";
        }
        //F U N C I O N E S   c o n    P A R A M E T R O S 
        function funcion2($par1, $par2) {
            //escribimos lo que hace la funcion
        }
        function sumaDosNumeros($a, $b) {
            echo $a+$b;
        }
        //F U N C I O N E S   Q U E    D E V U E L V E   U N   V A L O R
        function funcion3 ($param1, $param2) : int {
            //escribo la funcion
            return $resultado;
        }
        function sumaDosNumeros2($a, $b) {
            return $a+$b;
        }
        // P A S O    D E    P A R A M E T R O S   P O R   R E F E R E N C I A
        function sumaDosNumeros2B(&$a, &$b) {
            return $a+$b;
        }
        //flujo de nuestro script
        saludaPorPantalla();//hola
        echo "<br>";
        sumaDosNumeros(5, 12);//17
        echo "<br>";
        $numero1 = 4;
        $numero2= 5;
        sumaDosNumeros($numero1, $numero2);//9
        echo "<br>";
        echo sumaDosNumeros2(8, 5);//13
 ?>
    </body>
</html>