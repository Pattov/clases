<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of camaroteModel
 *
 * @author alumno
 */
require_once './db/DB.php';
class camaroteModel {
    // Propiedades
    private $num;
    private $tipo;
    private $ubicacion;
    private $planta;
    
    function __construct($num, $tipo, $ubicacion, $planta) {
        $this->num = $num;
        $this->tipo = $tipo;
        $this->ubicacion = $ubicacion;
        $this->planta = $planta;
    }
    function setNum($num): void {
        $this->num = $num;
    }

    function setTipo($tipo): void {
        $this->tipo = $tipo;
    }

    function setUbicacion($ubicacion): void {
        $this->ubicacion = $ubicacion;
    }

    function setPlanta($planta): void {
        $this->planta = $planta;
    }

    function getNum() {
        return $this->num;
    }

    function getTipo() {
        return $this->tipo;
    }

    function getUbicacion() {
        return $this->ubicacion;
    }

    function getPlanta() {
        return $this->planta;
    }



}
