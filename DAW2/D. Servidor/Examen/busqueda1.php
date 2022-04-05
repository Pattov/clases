<html>
    <head>
        <title>Buscar nombre corto</title>
    </head>
    <body>
        
        <?php
        if(isset($_GET['busqueda'])){
            $v1 = $_GET['busqueda'];
            // Crear nuestro objeto de conexión a la base de datos
            $dwes = new PDO("mysql:host=localhost; dbname=dwes", "root", "");
            // Establecemos que la gestión de errores se va a hacer mediante el lanzamiento de excepciones
            $dwes->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Comienza nuestro código susceptible de fallar
            try {
                // Query que vamos a lanzar 
                $sql = "SELECT * FROM producto WHERE nombre_corto like '%".$v1."%';";
                $todo_bien = true; // Definimos una variable para comprobar la ejecución
                $dwes->beginTransaction();// Iniciamos la transacción
                
                if ($dwes>exec($sql) == 0) {
                    $todo_bien = false; //Si hay error ponemos false
                }

                if ($todo_bien == true){
                    // Lanzar la query a la base de datos y recoger el result-set en $result
                $result = $dwes->query($sql);
                $numero = mysql_num_rows($result);
                echo '<form action="busqueda.php" method="get">
                    Buscar:
                    <input type="text" name="busqueda" value="<?php echo $busqueda;?>">
                    <input type="submit" value="Enviar">
                    </form>';
                echo "Tu búsqueda ha devuelto " . $numero . " resultados<br>";
                while ($registro = $result->fetch()){
                    echo "codigo : " . $registro['cod'] . "<br>";
                    echo "Nombre : " . $registro['nombre_corto'] . "<br>";
                    echo "Descripcion : " . $registro['descripcion'] . "<br>";
                    echo "Familia : " . $registro['familia'] . "<br>";
                    echo "PVP : " . $registro['PVP'] . "<br>";
                    echo "<br>";
                }
                    $dwes->commit();
                    print "<p>Los cambios se han realizado correctamente.</p>";
                } else {
                    $dwes->rollback();
                    print "<p>No se han podido realizar los cambios.</p>";
                }
                
                
                //EL EJERCICIO 2 ES MODIFICAR LA QUERY CON UN update Y SU SELECT TENIENDO EN CUENTA LAS CONDICIONES EN EL WHERE
                //ACLARACION: Y NO HARIA FALTA HACER DESDE LA LINEA 27 HASTA LA 42
                
                
                
            } catch (PDOException $p) {
                echo "Error ".$p->getMessage()."<br />";
            }
            unset($dwes);
        }
        ?>
        
    </body>
</html>

