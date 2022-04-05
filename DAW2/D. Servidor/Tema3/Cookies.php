<html>
    <head>
        <title>Cookies</title>
    </head>
    <body>
        <?php
            // Si la cookie está presente, mostramos hora de la última visita
            if (isset($_COOKIE['ultima_visita']))
            {
                // Saludamos y decimos hora
                echo "<h1>Bienvenido de vuelta!</h1>";
                echo "<p>Tu última visita fue en: ".date("Y-m-d H:i:s", $_COOKIE['ultima_visita'])."<br/>";
            } else {
                // Almacenamos el tiempo actual en la cookie y saludamos
                setcookie("ultima_visita", time(), time()+60);
                echo "<h1>Bienvenido usuario nuevo!</h1>";
            }
        ?>
    </body>
</html>

