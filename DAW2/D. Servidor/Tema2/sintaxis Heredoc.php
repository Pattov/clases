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
        //Sintaxis heredoc
        $a = <<<MICADENA
                Desarrollo de aplicaciones Web</br>
                en Entorno Servidor</br>
            MICADENA;
        echo $a;
    ?>
</body>