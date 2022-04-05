<html>
    <head>
        <title>Autenticación con tabla en BD</title>
    </head>
    <body>
        <?php
            // Recoger el usuario y la contraseña
            // Forzar a que el servidor envíe un error de "Acceso no autorizado" (código 401).
            if (!isset($_SERVER['PHP_AUTH_USER']))
            {
                header('HTTP/1.1 401 Unauthorized');
                header('WWW-Authenticate: Basic Realm="Contenido restringido"');
                //echo "Usuario no Registrado"
            }
            
            // Conectar con la base de datos (tabla autenticacion)
            //  Variables base datos
            $host = 'localhost';
            $db = 'dwess';
            $user = 'root';
            $pass = '';
            $dsn = "mysql:host=$host;dbname=$db";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ];
            try 
            {
                $conexion = new PDO($dsn, $user, $pass, $options);
            } catch (PDOException $e) {
                echo "Excepción capturada: ", $e->getMessage(), (int)$e->getCode();
            }
        
            // Comprobar que el usuario y contraseña son correctos y mostrar
            // contenido página
            $sql = 'SELECT username, password FROM autenticacion WHERE username = ? AND password = ?';
            $consulta = $conexion->prepare($sql);
            //N O M B R E   D E   U S U A R I O
            $consulta->bindParam(1, $_SERVER['PHP_AUTH_USER']);
            // C O N T R A S E Ñ A    I N T R O D U C I D A
            $consulta->bindParam(2, $_SERVER['PHP_AUTH_PW']);
            $consulta->execute();
            $registrosEncontrados = $consulta->rowCount();
            if ($registrosEncontrados > 0)
            {
                // El usuario autentica
                echo "<h1>Bienvenido ".$_SERVER['PHP_AUTH_USER']." !</h1>";
            }
            print_r($_SERVER)
        ?>
    </body>
</html>