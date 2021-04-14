<?php
    $codo = true;

    $con = creaConxMySQL();
    $consulta = "Select nombre from usuaios where email='felipito@cabra.com';";
    $resultado = $con->query($consulta);
        if($resultado){
            $resultado->data_seek(0);
            $fila = $resultado->fetch_assoc();
            $usuario = $fila['nombre'];
        }
?>