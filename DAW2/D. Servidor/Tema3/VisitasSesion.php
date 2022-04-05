<?php
    // Iniciamos la sesión o recuperamos la anterior sesión existente
    if(session_start())
    {
        if(!isset($_SESSION['mis_visitas']))
        {
            // En cada visita añadimos un valor al array "mis_visitas"
            $_SESSION['mis_visitas'][] = time();
            // Dar la bienvenida al nuevo usuario
            echo "<h1>BIENVENIDO NUEVO USUARIO</h1>";
        } else {
            // Decirle al usuario que no es su primera visita
            echo "<h1>BIENVENIDO de NUEVO, USUARIO</h1>";
            // Pintar los tiempos de sus visitas anteriores
            echo "<h2>Tus visitas anteriores han sido:</h2>";
            foreach($_SESSION['mis_visitas'] as $visita)
            {
                echo date("d/m/y \a \l\a\s H:i:s", $visita)."<br/>";
            }
            // Meter nueva visita en el array
            $_SESSION['mis_visitas'][] = time();
        }
    }
?>