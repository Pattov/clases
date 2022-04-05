<html>
    <head>
        <title>Gestión de errores</title>
    </head>
    <body>
        <header>
            <h1>Nuestro Horario</h1></br>
            <a href="index.php">Volver al inicio</a>
            
        </header>
        <main>
            <?php
                $academia = new PDO('mysql:host=localhost;dbname=academia', 'root', '');
                $resultado = $academia->query('SELECT nivel, dia, hora FROM clases;');
                
                while ($registro = $resultado->fetch()){
                    
                }
                
                unset($academia);
            ?> 
        ?>
    </body>
</html>
