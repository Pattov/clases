<html>
    <head>
        <title>Pre WIC</title>
    </head>
    <body>
        <header>
            <h1>VER RECETAS</h1>
            <a href="index.php">Volver al inicio</a>
        </header>
        <main>
            <?php
                $prewic = new PDO('mysql:host=localhost;dbname=prewic', 'root', '');
                
                $resultado = $prewic->query('SELECT nombre, tiempo, nivel FROM recetas;');
                while ($registro = $resultado->fetch()){
                    echo "Receta : " . $registro['nombre'] . "<br>";
                    echo "Tiempo : " . $registro['tiempo'] . "min <br>";
                    echo "Nivel : " . $registro['nivel'] . "/5<br>";
                    echo "<br>";
                }
                
                unset($prewic);
            ?> 
        </main>    
    </body>
</html>

