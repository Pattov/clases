<?php
    // nombre de la cookie , valor de la cookie, tiempo de expiracion
    //setcookie("ultima_Visita", time(), time()+10);
    //var_dump($_COOKIE);
    $format = 'D, d M Y H:i:s';
    if(!isset($_COOKIE['ultimaVisita'])){
        //Usuario Nuevo
        setcookie("ultimaVisita", time());
        echo '<h1>Bienvenido!</h1>';
        
    }else{
        echo '<h1> Esta no es tu primera visita</h1>';
        echo '<h2> Tu última visita ha sido </h2> <br>';
        echo date($format, $_COOKIE['ultimaVisita']);
        
    }
?>