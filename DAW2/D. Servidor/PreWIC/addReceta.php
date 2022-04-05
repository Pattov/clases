<html>
    <head>
        <title>Pre WIC</title>
    </head>
    <body>
        <header>
            <h1>¡AÑADE UNA NUEVA RECETA!</h1>
            <a href="index.php">Volver al inicio</a>
        </header>
        <form action="addReceta.php" method="POST">
            <div class="campo">
                <label for="codigo">Codigo de la receta:</label> <!-- RE000003 -->
                <input type="text" id="codigo" name="codigo" required>
            </div>
            <div class="campo">
                <label for="nombre">Nombre de la receta:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="campo">
                <label for="tiempo">Tiempo de preparación (minutos):</label>
                <input type="number" id="tiempo" name="tiempo" min="1" max="3000" required> <!-- Establecemos un límite entre 1 y 3000 -->
            </div>
            <div class="campo">
                <label for="nivel">Nivel de dificultad (1-5):</label>
                <input type="number" id="nivel" name="nivel" min="1" max="5" required>
            </div>
            <div class="campo">
                <label for="comensales">Nº de comensales:</label>
                <input type="number" id="comensales" name="comensales" min="1" required>
            </div>
            <div class="campo">
                <label for="ingredientes">Listado de ingredientes:</label>
                <input type="text" id="ingredientes" name="ingredientes" required>
            </div>
            <div class="campo">
                <label for="pasos">Pasos para la receta:</label>
                <input type="text" id="pasos" name="pasos" required>
            </div>
            <div class="campo">
                <label for="url">Enlace a la receta:</label>
                <input type="url" id="url" name="url" required>
            </div>
            <input type="submit" value="Agregar receta">
        </form>
        <?php
            if (isset($_POST['codigo'])) {
                $prewic = new PDO('mysql:host=localhost;dbname=prewic', 'root', '');

                $todo_bien = true; // Definimos una variable para comprobar la ejecución
                $prewic->beginTransaction();// Iniciamos la transacción

                $sql = "INSERT INTO recetas VALUES ('" . $_POST['codigo'] . "','" . $_POST['nombre'] . "'," . $_POST['tiempo']. "," . $_POST['nivel'] . "," . $_POST['comensales'] . ",'" . $_POST['ingredientes'] . "','" . $_POST['pasos'] . "','" . $_POST['url'] ."');";

                if ($prewic->exec($sql) == 0) {
                    $todo_bien = false; //Si hay error ponemos false
                }

                if ($todo_bien == true){
                    $prewic->commit();
                    print "<p>Los cambios se han realizado correctamente.</p>";
  
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



