<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        //para saber el tipo de la variable usaremos -> 
        var_dump($x);

        //A R R A Y S
        //esta permitido tener arrays con diferentes tipos
        $coches = array("Volvo","Volkswagem",5)

        // T I P O   N U L L
        $y = null;
        var_dump($y);

        // T I P O   O B J E T O
        class Car
        {
            public $color;
            public $model;
            public function __construct($color, $model) {
                $this->color = $color;
                $this->model = $model;
            }
            public function message() {
                return "Mi coche es ".$this->color." del modelo ". $this->model;
            }

        }
        $myCar = New Car("Black","Volvo");
        echo $myCar ->message();
    ?>
</body>