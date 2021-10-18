<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays
    </title>
</head>
<body>
    <?php
        //Arrays
        $asignatura1 = "LMAR";
        $asignatura2 = "BDAT";
        $asignatura3 = "DWES";            
        $asignatura = array("LMAR", "BDAT", "DWES");
        var_dump($asignatura);
        echo "<br>El  valor del segundo elemento del array: ".$asignatura[1]."<br>";
        //Operadores Array
        //Unión
        $asignatura[] = "DWEC";
        array_push($asignatura,"c++"); //mete los valores en el ultimo lugar
        var_dump($asignatura);
        
        //claveValor
        //asignar una clave a lo denominamos el indice
        $asignaturaValor = array(
            "nombre" => "Juan", 
            "apellido1" => "Garcia", 
            "apellido2" => "Perez"
        );
        echo "<br>".$asignaturaValor["nombre"];
        
        $asignaturaValor = array(
            1 => "Juan", 
            2 => "Garcia", 
            3 => "Perez"
        );
        echo "<br>".$asignaturaValor[3];
        
        //Array Multidimensional
        echo "<br>";
        $array2D = array(
            array("azul","verde","rojo"),
            array("enero","febrero","octubre")
            //echo $array2D[1][1] => "febrero"
            );
        /**
         * array3D = array(array(
         *  array("azul","verde","rojo"),
         *  array("amarillo","rosa","violeta"),
         *  array("morado","dorado","pistacho")
         * ));
         */
        // funciones con arrays
        //ordenar
        //asort,arsort(en el sentido inverso),
        //https://www.php.net/manual/es/ref.array.php
       $arrayAOrdenar = array(3,2,4,1,5,8);
       sort($arrayAOrdenar);
       var_dump($arrayAOrdenar);
    ?>
</body>
</html>