<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
         
         <!-- Formulario en si mismo -->
         <h1>Introduce un número</h1>
         <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="post">
             <label for="numero">Introduce un numero</label>
             <input type="number" id="numero" name="numero" value="<?php $n;?>">
             </br>
             <input type="submit" value="Submit">
         </form>
         <?php
            if(!empty($_POST["numero"])){
                $n = $_POST["numero"];
                if ($n<1 || $n>10) {
                    echo "no has escrito un nůmero entre el 1 y el 10.";
                }
                else {
                    echo "<h4>Tabla del $n:</h4>";
                    $i=1;
                    while ($i<=10) {
                          echo "$n x $i = ".$n*$i."<br/>";
                          $i++;
                    } 
                }
            }
         ?>
    </body>
</html>