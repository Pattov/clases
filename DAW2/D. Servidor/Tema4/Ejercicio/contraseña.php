<html>
    <head>
        <title>contraseña</title>
        <style>
            .error {color: tomato;}
        </style>
    </head>
    <body>
        <?php
        // Declaro las variables a utilizar
            $mensaje = "";
            $contraTemp = "";
            
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (empty($_POST["contrasenia"])) {
                    $mensaje = "La contraseña es obligatoria";
                } else {
                    $contraTemp = $_POST["contrasenia"];
                    // chequeo que el nombre sólo contiene letras y espacios en blanco
                    if (!preg_match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/",$contraTemp)) {
                        $mensaje = "Error, la contraseña no es robusta";
                    } else {
                        $mensaje = "Enhorabuena, La contraseña es robusta";
                    }
                }
        }
        ?>
        <h1>Introduce tu contraseña</h1>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
            <input type="text" name="contrasenia" value="<?php echo $contraTemp;?>">
            <span class="error"><?php echo $mensaje;?></span></br>
            <input type="submit" value="comprobar contraseña" />
        </form>
    </body>
</html>