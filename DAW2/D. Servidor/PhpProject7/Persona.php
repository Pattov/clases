<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Persona
 *
 * @author dwes
 */
class Persona {

// Propiedades
    protected $nombre;
    protected $apellidos;

// Métodos
    public function __construct($nombre, $apellidos) {
        // Poblar las propiedades de la clase
        $this->nombre = $nombre;
        $this->apellidos = $apellidos;
    }

    public function muestra() {
        // Mostrar el contenido de las propiedades
        print "<p>" . $this->nombre . " " . $this->apellidos . "</p>";
    }

}
