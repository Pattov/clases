<?php

class Prod {

//Atributos
private $nombre;
private $color;
private $precio;
private $cantidad;


//metodos
public function muestra() {
    echo 'El objeto '.$this->nombre.' tiene el color '.$this->color.". ";
}

public function aumentoPrecio($euros) {
    $this->precio += $euros;
}

//getters And Setters

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

}
?>
