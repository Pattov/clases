<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date</title>
</head>
<body>
    <?php
    //https://www.php.net/manual/es/function.date
    //date($format, $timestamp)//si no ponemos nada es la fecha local =time()
    echo "Hoy es ".date("d/m/Y")."</br>"; //Hoy es 20/10/2021
    
    //Formatear la hora
    date_default_timezone_set("America/Mexico_City"); //true ver todas - https://www.php.net/manual/es/timezones.php
    
    echo "La hora actual es ".date("G:i:s")."</br>"; //La hora actual es 15:58:31
    
    // H O R A    E S P E C I F I C A 
    $date_time = mktime(12, 10, 0 , 4, 3, 2022);
    var_dump($date_time);//int(1648980600)
    echo "</br>La hora creada es ". date("d/M/Y H:i:s",$date_time)."</br>"; //La hora creada es 03/Apr/2022 12:10:00
    
    // Pasar de un String a Hora
    https://www.php.net/manual/es/function.strtotime.php
    $d = strtotime("June 6 2015 22:45");
    echo "La fecha guardade es ".date("d/M/Y H:i:s",$d)."</br>";//La fecha guardade es 06/Jun/2015 22:45:00
    $dia = strtotime("6 Junio 2015 22:45"); // Si va en español
    echo "La fecha guardade es ".date("d/M/Y H:i:s",$dia)."</br>";//La fecha guardade es 31/Dec/1969 18:00:00
    $ayer = strtotime("yesterday"); 
    echo "La fecha guardade es ".date("d/M/Y",$ayer)."</br>"; //La fecha guardade es 19/Oct/2021 00:00:00
    $x = strtotime("+3 days"); 
    echo "La fecha guardade es ".date("d/M/Y",$x)."</br>";//La fecha guardade es 23/Oct/2021

    ?>
</body>
</html>