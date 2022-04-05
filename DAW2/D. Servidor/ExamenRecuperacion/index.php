<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>Banco</title>
        <style>
            .error {color: #FF0000;}
        </style>
    </head>
    <body>
        <!-- Valida la información del formulario -->
        <?php
            // Declaro las variables a utilizar
            $fecha = $importe = $tipo = $concepto="";
            $fechaErr = $importeErr = $tipoErr= $conceptoErr = "";
            $fechaTemp = $importeTemp = $tipoTemp = $conceptoTemp = "";
            
            // Vamos a formatear los datos que recojamos del formulario
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                if (empty($_POST["fecha"])) {
                    $fechaErr = "La fecha es obligatoria";
                } 
               // este mantiene el importe el resto nop
                if (empty($_POST["importe"])) {
                    $importeErr = "El importe es obligatorio";
                } else {
                    $importeTemp = verificar($_POST["importe"]);
                    // chequeo que el nombre sólo contiene letras y espacios en blanco
                    if (!preg_match("/[0-9]+/",$importeTemp)) {
                        $importeErr = "El importe ha de ser Positivo";
                        
                    } else {
                        $importe = $importeTemp;
                    }
                }
                
                if (empty($_POST["tipo"])) {
                    $tipoErr = "El tipo es obligatorio, Despliegue el campo";
                } else {
                    $tipoTemp = verificar($_POST["tipo"]);
                    // chequeo que el nombre sólo contiene letras y espacios en blanco
                    if ($tipoTemp==1&&$importe>3000) {
                        $importeErr = "El importe en gastos es 3000€ no puede superarlo";
                    } 
                }
                
                if (empty($_POST["concepto"])) {
                    $conceptoErr = "El concepto es obligatorio";
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
        <!-- Formulario en si -->
        <h1>TU Banco PT</h1>
        <p><span class="error">* campo obligatorio</span></p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">

            <label for="fecha">Fecha del movimiento</label>
            <input id="fecha" type="date" name="fecha" value="<?php echo $fechaTemp;?>">
            <span class="error">* <?php echo $fechaErr;?></span>
            </br>
            
            <label for="importe">Importe del movimiento</label>
            <input id="importe" type="number" name="importe" min="1" value="<?php echo $importeTemp;?>" >
            <span class="error">* <?php echo $importeErr;?></span>
            </br>
            
            <label for="tipo">Tipo del movimiento</label>
            <select id="tipo" name="tipo" >
                <option value="" selected="true" disabled="disabled" >Define un tipo de movimiento</option>
                <option value="2">Ingreso</option>
                <option value="1">Gasto</option>
            </select>
            </br>
            
            <label for="concepto">Concepto del movimiento</label>
            <input type="text" id="concepto" name="concepto" value="<?php echo $conceptoTemp;?>" >
            <span class="error">* <?php echo $conceptoErr;?></span>
            </br>
            <input type="submit" value="Registrar movimiento"/>
        </form>
        <!-- Formulario de salida -->
        <?php
        if($fecha != "" && $importe != "" && $tipo!= "" && $concepto!= ""){
            $acumuladorImporte=0;
            echo 'Con fecha '.$fecha. ' se ha registrado un nuevo movimiento de ';
            if($tipo==1){
                echo'gasto';
                $acumuladorImporte-=$importe;
            }else{
                echo 'ingreso';
                $acumuladorImporte+=$importe;
            }
            echo 'por importe de '.$importe.'€ con concepto '.$concepto.' <br>';
            echo 'El balance actual de tu cuenta es de '.$acumuladorImporte.'€';
            if($acumuladorImporte<0){
                echo 'estas en numeros rojos';// jS con su script y su alert();
            }
            if($acumuladorImporte>1000000){
                echo 'eres millonario'; // jS con su script y su alert();
            }
            
        }
            
        ?>
    </body>
</html>
