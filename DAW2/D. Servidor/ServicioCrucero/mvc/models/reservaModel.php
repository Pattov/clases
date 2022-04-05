<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of reservaModel
 *
 * @author alumno
 */
require_once './db/DB.php';

class reservaModel {
    private $cReserva;
    private $numPersona;
    private $fechaEmb;
    private $fechaDesp;
    private $numCamarote;
    
    function __construct($cReserva, $numPersona, $fechaEmb, $fechaDesp, $numCamarote) {
        $this->cReserva = $cReserva;
        $this->numPersona = $numPersona;
        $this->fechaEmb = $fechaEmb;
        $this->fechaDesp = $fechaDesp;
        $this->numCamarote = $numCamarote;
    }

    function getCReserva() {
        return $this->cReserva;
    }

    function getNumPersona() {
        return $this->numPersona;
    }

    function getFechaEmb() {
        return $this->fechaEmb;
    }

    function getFechaDesp() {
        return $this->fechaDesp;
    }

    function getNumCamarote() {
        return $this->numCamarote;
    }

    function setCReserva($cReserva) {
        $this->cReserva = $cReserva;
    }

    function setNumPersona($numPersona) {
        $this->numPersona = $numPersona;
    }

    function setFechaEmb($fechaEmb){
        $this->fechaEmb = $fechaEmb;
    }

    function setFechaDesp($fechaDesp){
        $this->fechaDesp = $fechaDesp;
    }

    function setNumCamarote($numCamarote){
        $this->numCamarote = $numCamarote;
    }


}
