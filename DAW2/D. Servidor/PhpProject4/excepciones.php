<html>
    <head>
        <title>Gestion de Errores</title>
    </head>
    <body>
        <?php
            // variables y operaciones
            $dividendo=25;
            $divisor=0;
            //bloque de prueba y captura de excepciones
            try {
               //evaliamos el valor de la variable conflictiva
                if($divisor==0)
                {
                    //Lanzamos la excepcion para capturarla en el blocke catch
                    throw new Exception("Division por cero.");
                }
                //Si nuestro divisor no es nulo (no lanzaremos la excepcion )
                
                $resultado = $dividendo / $divisor;
            } catch (Exception $exc) {
                echo "Se ha producido el siguiente error: ".$e->getMessage();
            }

            
        ?>
    </body>
</html>
