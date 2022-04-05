
<html>
    <head>
        <meta charset="UTF-8">
        <title>Formulario Invulnerable</title>
    </head>
    <body>
        <!-- Valida la informacion del formulario -->
        <?php
            //Declaro las variables a utilizar
            $name = $email = "";
        
            //Vamos a formatear los datos que recojamos del formulario
            if($_SERVER["REQUEST_METHOD"] == "POST"){
                $name = verificar ($_POST["name"]);
                $email = verificar ($_POST["email"]);
            }
            
            // funcion de verificacion
            function verificar($data){
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmspecialchars($data);
                return $data;
            }
        ?>
        <!-- Formulario en el mismo -->
       <h1>Formulario de recogida de datos</h1>
       <form action="<?php echo htmlspecialchars ($SERVER ['PHP_SELF']);?>" method="post">
            Nombre: <input type="text" name="name"><br/>
            Email:  <input type="text" name="email"><br/>
            <input type="submit">
       </form>
       
       <!-- Salida del Formulario -->
       <h1>La salida de tu formulario es </h1>
       <?php
         echo "Bienvenido a esta web ";
         echo $name."<br/>";
         echo "Tu direccion de correo electronico es ";
         echo $email;
       ?>
    </body>
</html>
