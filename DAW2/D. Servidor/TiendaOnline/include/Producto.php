<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Producto
 *
 * @author alumno
 */
class Producto {
    private $color;
    private $nombre;
    private $precio;
    private $cantidad;
    
    function __construct($color, $nombre, $precio, $cantidad) {
        $this->color = $color;
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->cantidad = $cantidad;
    }

    public function __set($var, $valor) {
        if (property_exists(__CLASS__, $var)) {
            $this->$var = $valor;
        } else {
            echo "No existe el atributo $var.";
        }
    }

    public function __get($var) {
        if (property_exists(__CLASS__, $var)) {
            return $this->$var;
        }
    }
}
