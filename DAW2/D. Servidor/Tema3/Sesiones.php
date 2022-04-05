<html>
    <head>
        <title>Sesiones</title>
    </head>
    <body>
        <?php
            // Iniciamos sesión
            session_start();
            
            // Vamos a comprobar si el usuario está autenticado
            if (!isset($_SESSION['Authenticated']))
            {
                // Si no lo está, le abrimos el diálogo para que inicie sesión
                if (!isset($_SERVER['PHP_AUTH_USER']))
                {
                    header('HTTP/1.1 401 Unauthorized');
                    header('WWW-Authenticate: Basic Realm="Contenido restringido"');
                }

                // Y conectamos con la base de datos (tabla autenticacion)
                // Variables base datos
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
                $consulta->bindParam(1, $_SERVER['PHP_AUTH_USER']);
                $consulta->bindParam(2, $_SERVER['PHP_AUTH_PW']);
                $consulta->execute();
                $registrosEncontrados = $consulta->rowCount();
                if ($registrosEncontrados > 0)
                {
                    // El usuario autentica
                    // Registramos este hecho en la variable de sesión correspondiente
                    $_SESSION['Authenticated'] = true;
				
                    // Como, en caso de que autentique no me muestra nada más, voy a refrescar la página
                    $rutaAbsolutaCurrentPage = "http://".$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
                    header("Location: ".$rutaAbsolutaCurrentPage);
                } else {
                    header('HTTP/1.1 401 Unauthorized');
                    header('WWW-Authenticate: Basic Realm="Contenido restringido"');
                }
            } else {
                // Si está autenticado, no hace falta consultar otra vez a la 
                // base de datos.
                echo "*Usuario autenticado: no consultamos la base de datos";
                echo "<h1>Bienvenido ".$_SERVER['PHP_AUTH_USER']." !</h1>";
                // Vamos a ver si estamos aquí como resultado de pulsar el botón de borrado de visitas
                if (isset($_POST['borrarVisitas']))
                {
                    unset($_SESSION['mis_visitas']);
                }
                // Ahora vamos a ver si tenemos visitas previas
                if (isset($_SESSION['mis_visitas']))
                {
                    // Saludamos y decimos horas de visitas
                    echo "<h2>No eres nuevo aquí. Tus últimas visitas han sido:</h2>";
                    foreach($_SESSION['mis_visitas'] as $visita)
                    {
                        echo date("d/m/y \a \l\a\s H:i:s", $visita)."<br/>";
                    }
                    // Registro nueva visita
                    $_SESSION["mis_visitas"][] = time();
                    // Informo de la hora de la actual visita
                    echo "<h3>Tu visita actual se ha producido el</h3>";
                    echo date("d/m/y \a \l\a\s H:i:s", $_SESSION['mis_visitas'][count($_SESSION['mis_visitas'])-1])."<br/>";
                } else {
                    // Almacenamos el tiempo actual en la sesión y saludamos
                    $_SESSION["mis_visitas"][] = time();
                    echo "<h2>Ésta es tu primera visita</h2>";
                }
                // Mostrar un botón que, cuando lo clique, me recargue la página sin visitas
                // Otra forma de hacer el botón sin formulario (by Eric):
                // https://stackoverflow.com/questions/19323010/execute-php-function-with-onclick
                echo "<br/><form action='Sesiones.php' method='POST'><button type='submit' name='borrarVisitas'>Borrar visitas</button></form>";
            }   
        ?>
    </body>
</html>