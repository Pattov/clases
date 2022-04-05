<html>
    <head>
        <title>AÑADE UNA NUEVA TIENDA</title>
    </head>
    <body>
        <?php
            if (isset($_GET['cod'])&& isset($_GET['nombre']) && isset($_GET['tlf'])) {
                $dwes = new PDO("mysql:host=localhost; dbname=dwes", "root", "");
                $todo_bien = true; // Definimos una variable para comprobar la ejecución
                $dwes->beginTransaction();// Iniciamos la transacción
                $sql = "INSERT INTO tienda VALUES ('" .$_GET['cod'] . "','" . $_GET['nombre'] . "'," . $_GET['tlf']."');";

                if ($prewic->exec($sql) == 0) {
                    $todo_bien = false; //Si hay error ponemos false
                }

                if ($todo_bien == true){
                    $prewic->commit();
                    print "<p>Los cambios se han realizado correctamente.</p>";
                    print "Tienda nueva con cod ".$_GET['cod']." y nombre ".$_GET['nombre']." abierta en la ciudad.";
                } else {
                    $prewic->rollback();
                    print "<p>No se han podido realizar los cambios.</p>";
                }
                // Cerramos la conexion
                unset($prewic);
            }
        ?>
    </body>
</html>
