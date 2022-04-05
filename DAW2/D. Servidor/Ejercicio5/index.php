<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        require_once './Empleado.php';
        require_once './Gerente.php';
        require_once './Trabajador.php';

        $emp = new Empleado(85);
        $emp5 = new Empleado(86);
        $emp->setNombre('Juan');
        $emp5->setNombre('Dani');
        echo getEmpleado();
        ?>
    </body>
</html>
