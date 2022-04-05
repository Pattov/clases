<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Gerente
 *
 * @author alumno
 */
require_once './Trabajador.php';
class Gerente extends Trabajador{
    //put your code here
    public function calcularSueldo() {
        return $this->sueldo = $this->sueldo*($this->empleado*0.01);
    }
}
