<html>
    <head>
        <title>PHP Scraping</title>
    </head>
    <body>
        <?php
            // Variables
            $url = "https://www.dia.es/compra-online/";
            $content = file_get_contents($url);
            
            // Para ver quÃ© ha capturado
            print("<textarea>".$content."</textarea>");
            
            while (strpos($content, "<section class=\"categories-slider-component\">"))
            {
                $posible_url = substr($content, strpos($content, "<section class=\"categories-slider-component\">"));
                //echo $posible_url;
                $pos_final = strpos($posible_url, '</section>');
                //$pos2_final = strpos($posible_url, "</li>");
                
                /*if($pos2_final > 0 && $pos2_final < $pos_final)
                {
                     $pos_final = $pos2_final;
                }*/
                
                $posible_url = substr($posible_url, 0, $pos_final);
                //print_r("<br>".$pos_final. "    ".$pos2_final);
                print("<br/>Url found: ".$posible_url);
                $content = $posible_url;
                if(strpos($content, "<a")){
                    //sacar nombre
                    
                    // sacar URL
                    $posible_url = substr($content, strpos($content, "href=\""));
                    //echo $posible_url;
                    $pos_final = strpos($posible_url, '"');
                    $posible_url = substr($posible_url, 0, $pos_final);
                    echo "https://www.dia.es".$posible_url;
                }
            }
        ?>
    </body>
</html>
