<html>
    <head>
        <title>PHP Scraping</title>
    </head>
    <body>
        <?php
            // Variables
            $url = "https://www.dia.es/compra-online/";
            $content = file_get_contents($url);
            
            // Para ver qué ha capturado
            print("<textarea>".$content."</textarea>");
            
            while (strpos($content, "<span class="category-name">"))
            {
                $posible_url = substr($content, strpos($content, "<span class="category-name">"));
                echo $posible_url;
                // $pos_final = strpos($posible_url, '"');
                // $pos2_final = strpos($posible_url, "'");
                
                // if($pos2_final > 0 && $pos2_final < $pos_final)
                // {
                //     $pos_final = $pos2_final;
                // }
                
                // $posible_url = substr($posible_url, 0, $pos_final);
                
                // print("<br/>Url found: ".$posible_url);
                
                // $content = substr($content, strpos($content, "http")+1);
            }
        ?>
    </body>
</html>