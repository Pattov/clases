
<?php

session_start();

if (!isset($_GET['controller']) || (isset($_GET['controller']) && empty($_GET['controller']))) {
    // Cargar la vista por defecto, la del loguin (indexView.php)
    $html = file_get_contents('./mvc/views/indexView.php');
    // Recuperar el contenido configurable para esa vista
    $html = str_replace('{titulo}', 'Blog MVC', $html);
} else {
    // Cargar un modelo y vista diferentes en función de los parámetros
   
    switch ($_GET['controller']) {

        case 'login':
            // Cargo la vista del formulario para el login
            $html = file_get_contents('./mvc/views/formView.php');
            // Cargo trocitos de HTML
            $formulario = file_get_contents('./site_media/html/loginForm.html');
            // Otras variables
            $action = './index.php?controller=usuario&action=checkUsuario';

            // Recuperar el contenido configurable para esa vista
            $html = str_replace('{titulo}', 'Crucero - Login', $html);
            $html = str_replace('{formulario}', $formulario, $html);
            $html = str_replace('{action}', $action, $html);
            break;
        
        case 'logout':
             
            // Cargo la vista del formulario para el login
            $html = file_get_contents('./mvc/views/formView.php');
            // Cargo trocitos de HTML
            
            // Otras variables

            // Recuperar el contenido configurable para esa vista
            $html = str_replace('{titulo}', 'Crucero LOGOUT', $html);
            $html = str_replace('{formulario}', "<h1 style='background-color: tomato;'>El usuario está fuera del sistema</h1>"."<h3 style='background-color: white;'>Redireccionando...</h3>", $html);
            header("Refresh:5; url=index.php?controller=usuario&action=outUsuario");
            //header("Refresh:5; url=index.php");
            
            break;

        case 'register':
            // Cargo la vista del formulario para el registro
            $html = file_get_contents('./mvc/views/formView.php');
            // Cargo trocitos de HTML
            $formulario = file_get_contents('./site_media/html/registrationForm.html');
            // Otras variables
            $action = './index.php?controller=usuario&action=registraUsuario';

            // Recuperar el contenido configurable para esa vista
            $html = str_replace('{titulo}', 'Cruceros - Registration', $html);
            $html = str_replace('{formulario}', $formulario, $html);
            $html = str_replace('{action}', $action, $html);
            break;
  
        
    }//fin controler
}


echo $html;


?>