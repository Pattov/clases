<?php
//Inicio Sesion
session_start();

if(isset($_SESSION['numVisitas'])){
    $_SESSION['numVisitas'] += 1;
}else{
    $_SESSION['numVisitas'] = 1;
}
echo "Numero de visitas de la página ".$_SESSION['numVisitas'];
