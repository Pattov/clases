<html>
    <head>
        <title>Gestion de Errores</title>
    </head>
    <body>
        <?php
            // voy a gestionar yo los errores
            set_error_handler("miGestorDeErrores");
            // variables y operaciones
            $dividendo=25;
            $divisor=0;
            $resultado = $dividendo / $divisor;
            //volvemos a darle el control del manejo de errores a PHP
            restore_error_handler();
            //defino la funcion del manejo de errores
            function miGestorDeErrores($nivel, $mensaje){
                switch($nivel) {
                    case E_WARNING:
                        echo "Error de tipo WARNING:".$mensaje."<\br>";
                        break;
                    default:
                        echo "Error de tipo no especificado:".$mensaje."<br/>";
                }
            }
        ?>
    </body>
</html>
