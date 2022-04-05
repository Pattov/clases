<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Empleado
 *
 * @author alumno
 */
require_once './Trabajador.php';
class Empleado extends Trabajador{
    //put your code here
    public $horasTrabajadas;
    public $valorHora = 3.5;
    
    function __construct($horasTrabajadas) {
        $this->horasTrabajadas = $horasTrabajadas;
    }

    public function calcularSueldo() {
         return $this->sueldo = $this->horasTrabajadas*$this->valorHora;
    }
}
