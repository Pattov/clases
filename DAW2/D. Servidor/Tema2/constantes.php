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
        // define($name, $value, $case_insensitive)
        define ("PI", 3.14, false); //por defecto es false
        echo PI."<br";
        echo pi; //al ponerle false da fallo

        //  C O N S T A N T E    D E    U N    A R R A Y
        define("cars", ["Volvo", "BMw","Tesla"]);
        echo cars[0];

        // Asi vemos que son globales
        function myConstant() {
            echo cars[1];
        }
        myConstant ();
    ?>
</body>
</html>