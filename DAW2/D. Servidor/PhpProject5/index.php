<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Productos</title>
    </head>
    <body>
        <?php
            require_once ('./Producto.php');
            require_once './DB.php';
            $p = new Prod();
            $p->color = 'Rojo';
            $p->nombre = 'Samsung Galaxy';
            $p->muestra();
            
            
            
            $dwes = new mysqli();
            $dwes->connect(DB::HOST, DB::USERS, DB::PASSWORD,DB::DB);
        ?>
    </body>
</html>
