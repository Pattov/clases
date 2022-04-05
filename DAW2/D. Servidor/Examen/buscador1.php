<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Busqueda</title>
    </head>
    <body>
        <?php
            // Valor inicial (si es que lo hay)
            $busqueda = (isset($_GET['busqueda'])) ? htmlspecialchars($_GET['busqueda']) : '';
        ?>
            <form action="busqueda1.php" method="get">
            Buscar:
            <input type="text" name="busqueda" value="<?php echo $busqueda;?>">
            <input type="submit" value="Enviar">
            </form>
    </body>
</html>
