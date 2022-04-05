<html>
    <head>
        <title>Selección de Candidatos a agentes de la TIA</title>
        <style>
            .error {color: tomato;}
        </style>
    </head>
    <body>
        <!-- VALIDACION FORMULARIO -->
         <?php
            // Declaro las variables a utilizar
            $name = $dni = $edad = $altura = $tlf = "";
            $nameErr = $dniErr = $edadErr = $alturaErr = $tlfErr = "";
            $nameTemp = $dniTemp = $edadTemp = $alturaTemp = $tlfTemp = "";
            $nameVal = $dniVal = $tlfVal = false;
            // Vamos a formatear los datos que recojamos del formulario
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                
                if (empty($_POST["name"])) {
                    $nameErr = "El nombre es obligatorio";
                } else {
                    $nameTemp = verificar($_POST["name"]);
                    // El nombre y apellidos sólo tiene letras.
                    if (!preg_match("/\b\w{1,}\s\w{1,}\s\w{1,}\b/gi",$nameTemp)) {
                        $nameErr = "Sólo se permiten letras y espacios";
                    } else {
                        $nameVal = true;
                        $name = $nameTemp;
                    }
                }
                
                if (empty($_POST["dni"])) {
                    $dniErr = "El DNI es obligatorio";
                } else {
                    $dniTemp = verificar($_POST["dni"]);
                    // El DNI tiene 9 dígitos y una letra al final.
                    if (!preg_match("/\b[0-9]{9}[a-zA-Z]\b/",$dniTemp)) {
                        $dniErr = "Esto no es un DNI";
                    } else {
                        $dniVal = true;
                        $dni = $dniTemp;
                    }
                }
                
                if (empty($_POST["edad"])) {
                    $edadErr = "La edad es obligatoria";
                } else {
                    $edadTemp = verificar($_POST["edad"]);
                    // La edad está comprendida entre 0 y 120 años.
                    if (!preg_match("/([0-9])|([1-9][0-9])|(1[0-1][0-9]|120)/",$edadTemp)) {
                        $edadErr = "Sólo se permiten la edad entre 0 y 120";
                    } else {
                        $edad = $edadTemp;
                    }
                }
                
                if (empty($_POST["altura"])) {
                    $alturaErr = "La altura es obligatoria";
                } else {
                    $alturaTemp = verificar($_POST["altura"]);
                    // La altura es mayor que 0 y menor que 250 cm.
                    if (!preg_match("/([0-9])|([1-9][0-9])|(1[0-9][0-9]|2[0-4][0-9])/",$alturaTemp)) {
                        $alturaErr = "Sólo se permiten la edad entre 0 y 250";
                    } else {
                        $altura = $alturaTemp;
                    }
                }
                if (empty($_POST["telefono"])) {
                    $tlfErr = "El telefono es obligatorio";
                } else {
                    $tlfTemp = verificar($_POST["telefono"]);
                    //El teléfono tiene 9 dígitos y empieza por 6, 7, 8 (móviles españoles) o 9 (fijos españoles).
                    if (!preg_match("/[6-9][0-9]{8}/",$tlfTemp)) {
                        $tlfErr = "Sólo se permiten la edad entre 0 y 250";
                    } else {
                        $tlf = $tlfTemp;
                        $tlfVal = true;
                    }
                }
            }
            
            // Función de verificación
            function verificar($data) {
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }
        ?>
        <!-- FORMULARIO -->
        <h1>Formulario de solicitud</h1>
        <p><span class="error">* campo obligatorio</span></p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
            <label for="name">Nombre y Apellidos</label> 
            <input type="text" id="name" name="name" value="<?php echo $nameTemp;?>">
            <span class="error">* <?php echo $nameErr;?></span><br/>
            <label for="dni">DNI</label> 
            <input type="text" id="dni" name="dni" value="<?php echo $dniTemp;?>">
            <span class="error">* <?php echo $dniErr;?></span><br/>
            <label for="edad">Edad</label> 
            <input type="number" id="edad" name="edad" value="<?php echo $edadTemp;?>">
            <span class="error">* <?php echo $edadErr;?></span><br/>
            <label for="altura">Altura (cm)</label> 
            <input type="text" id="altura" name="altura" value="<?php echo $alturaTemp;?>">
            <span class="error">* <?php echo $alturaErr;?></span><br/>
            <label for="tlf">Teléfono</label> 
            <input type="text" id="tlf" name="telefono" value="<?php echo $tlfTemp;?>">
            <span class="error">* <?php echo $tlfErr;?></span><br/>
            <input type="submit">
        </form>
        <!-- RESULTADO DEL FORMULARIO -->
        </br>
        <?php
        if($nameVal && $dniVal && $tlfVal ){ //si el nombre, dni y el telefono estan true
            if(18>=$edad&&$edad<=30&&160>=$altura&&$altura<=200){ //si la edad, altura
                echo "\"Hola.".$name." con DNI ".$dni." y teléfono ".$tlf." Tienes ".$edad." años y una altura de ".$altura." metros. Cumples los requisitos para aplicar a la T.I.A. Tu solicitud ha sido recogida y destruida. No existimos, no te llamaremos, nunca has recibido este mensaje ni has rellenado ningún formulario.\"";
            }else 
                echo "\"Sentimos comunicarle que no cumple los requisitos mínimos para pertenecer a la T.I.A. Es usted demasiado";
                if(18<$edad){
                    echo "joven.\"";
                }else{
                    echo "viejo.\"";
                }
                if(160<$altura){
                    echo "joven.\"";
                }else {
                    echo "bajo.\"";
                } 
        }
        ?>
    </body>
</html>

