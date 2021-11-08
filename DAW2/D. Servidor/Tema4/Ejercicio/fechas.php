<html>
    <head>
        <title>Formulario Días</title>
        <style>
            .error {color: #FF0000;}
        </style>
    </head>
    <body>
        <?php
        function hoyEsTuCumple($dateInterval): bool {
            if ($dateInterval->m == 0 && $dateInterval->d == 0) {
                return true;
            } else {
                return false;
            }
        }
        

        // Función de verificación
        function verificar($data) {
            $data = trim($data);
            $data = stripslashes($data);
            $data = htmlspecialchars($data);
            return $data;
        }
        
            $fechaValida = true;
            $day = $month = $year = "";
            $dayErr = $monthErr = $yearErr = "";
            $dayTemp = $monthTemp = $yearTemp = "";
            
            
            // Vamos a formatear los datos que recojamos del formulario
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
                $fecha_nacimiento = date("Y-m-d", mktime(0,0,0,$_POST["day"],$_POST["month"],$_POST["year"]));
                // calcular edad
                    function calculaedad($fechanacimiento){
                        $hoy = new DateTime("Y-m-d");
                        $edad = $hoy->diff($fecha_nacimiento);
                        return $edad->format("%y");
                      }
            
            
            if (empty($_POST["day"])) {
                    $day = 1;
                } else {
                    $day = verificar($_POST["day"]);
                    // chequeo que el nombre sólo contiene letras y espacios en blanco
                    if (!preg_match("/^[0-9]*/",$day)) {
                        $dayErr = "Sólo se permiten números";
                    }
                }
                if (empty($_POST["month"])) {
                    $month = 1;
                } else {
                    $month = verificar($_POST["month"]);
                    // chequeo que el nombre sólo contiene letras y espacios en blanco
                    if (!preg_match("/^[0-9]*/",$month)) {
                        $monthErr = "Sólo se permiten números";
                    }
                }
                if (empty($_POST["year"])) {
                    $yearErr = "El año es obligatorio";
                } else {
                    $year = verificar($_POST["year"]);
                    // chequeo que el nombre sólo contiene letras y espacios en blanco
                    if (!preg_match("/^[0-9]*/",$year)) {
                        $yearErr = "Sólo se permiten números";
                    }
                }
                if (!checkdate($month, $day, $year)) {
                    $fechaValida = false;
                }               
            }

        ?>
        <!-- Formulario -->
        <h1>Formulario Cumpleaños</h1>
        <p><span class="error">* campo obligatorio</span></p>
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
            Día: <input type="number" name="day" value="<?php echo $dayTemp;?>">
            <br/>            
            Mes: <input type="number" name="month" value="<?php echo $monthTemp;?>">
            <br/>           
            Año: <input type="number" name="year" value="<?php echo $yearTemp;?>">
            <span class="error">* <?php echo $monthErr;?></span>
            <br/>
            <input type="submit">
        </form>
        <!-- Salida  -->
        <?php
        if ($fechaValida)   {
                echo "La fecha introducida es ";
                echo $day."/";
                echo $month."/";
                echo $year."<br>";
                echo "Tu edad es ".calculaedad($fechanacimiento);
                $diferenciaFechas = restaFechas($day, $month, $year);
                if (hoyEsTuCumple($diferenciaFechas)){
                    // Si hoy es tu cumple
                    echo "Hoy es tu cumple!!";
                } else {
                    // Si no es tu cumple, cuántos días quedan?
                    $diasHastaCumple = (int)$diferenciaFechas->format('%R%a');
                    if ($diasHastaCumple > 365)  {
                        echo "Te quedan ". $diasHastaCumple%365.25 ." para tu cumple.";
                    }
                }
            } else {
                echo "La fecha introducida no es válida. Try again.";
            }  
        ?>
    </body>
</html>