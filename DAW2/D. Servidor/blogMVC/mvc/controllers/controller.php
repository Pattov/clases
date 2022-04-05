<?php

if (!isset($_GET['controller']) || (isset($_GET['controller']) && empty($_GET('controller')))) {
    //cargar la vista del index, la vista por defecto (indexView.php)
    $html = file_get_contents('./mvc/views/indexView.php');
    $html = str_replace('{titulo}', 'Blog MVC', $html);
} else {
    //Cargar un modelo y vista diferentes en funcion de los parametros
    switch ($_GET['controller']) {
        case 'login':
            //cargo la vista del formulario para el login
            $html = file_get_contents('./mvc/views/formView.php');
            $formulario = file_get_contents('./site_media/html/loginForm.html');
            $action = './index.php?controller=usuario&action=checkUsuario';
            //Recuperar el contenido configurable para esa vista
            $html = str_replace('{titulo}', 'Blog MVC - Login', $html);
            $html = str_replace('{formulario}', $formulario, $html);
            $html = str_replace('{action}', $action, $html);
            break;
        case 'usuario':
            //cargo un modelo especifico = modelo 'usuario'
            require_once './mvc/models/'.$_GET['controller'].'model.php';
            //creo un objeto del modelo que estoy cargando
            
            if(isset($_GET['action']) && !empty($_GET('action')) && isset($_POST['username'])&& isset($_POST['password'])){
                $user1= new Usuario($_POST['username'],$_POST['password']);
                //llamar a la accion pasada por parametros en el $_GET                
                //LLamar al metodo check
                if($user1->checkUsuario(USER_FIELD, PASS_FIELD, AUTH_TABLE)){
                    echo "Estás logueado";
                }
            }
            break;
        default:
            break;
    }
}
//Devolver la vista
echo $html;
?>
