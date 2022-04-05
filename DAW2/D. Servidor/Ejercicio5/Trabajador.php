<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Trabajador
 *
 * @author alumno
 */
abstract class Trabajador {
    public $nombre;
    public $sueldo;
    public $empleado = 0;
    

    abstract function calcularSueldo();
    function setNombre($nombre){
        $this->nombre = $nombre;
        $this->empleado ++;
    }


    function getSueldo() {
        return $this->sueldo;
    }
    function getEmpleado(){
        return $this->empleado;
    }


}
