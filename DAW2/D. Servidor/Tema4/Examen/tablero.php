<HTML>
    <HEAD>
        <TITLE>tablero</TITLE>
    </HEAD>
    <BODY>
      <?php 
       $filasColumnas = $_GET["filasColumnas"]; 
       for ($i = 0; $i < $filasColumnas; $i++) {
           echo "<table><tr>"; //tabla
           for ($j = 0; $j < $filasColumnas; $j++) {
               if($i%2==0){
                   echo "<td style=\"color: black; width: 2em; height: 2em;\"></td>";
                   if($j%2==0){
                        echo "<td style=\"color: black; width: 2em; height: 2em;\"></td>";
                    }else{
                        echo "<td style=\"color: tomato; width: 2em; height: 2em;\"></td>";
                    } 
               }else{
                   echo "<td></td>";
                   if($j%2==0){
                        echo "<td style=\"color: black; width: 2em; height: 2em;\"></td>";
                    }else{
                        echo "<td style=\"color: tomato; width: 2em; height: 2em;\"></td>";
                    }
               }
           }
           echo "</table></tr>";
       }
      ?> 
     

    </BODY>
</HTML>
