<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
 <title>LIBRERIA UAZON</title>
</head>
<body>
  <h1>Libros dados de alta en nuestra libreria</h1>
  <table border="1">
    <tr>
      <th>TITULO</th>
      <th>PRECIO</th>
    </tr>
    <?php
    $user='comprador';
    $password = 'proweb2013';
    $db = new PDO('mysql:host=localhost;dbname=uazon', $user, $password);
    $result = $db->query('SELECT titulo, precio FROM libros');
    while ($libro = $result->fetch())
    {
     ?>
     <tr>
      <td><?php echo $libro['titulo']?></td>
      <td><?php echo number_format($libro['precio'],2)?></td>
     </tr>
    <?php
    }
    ?>
    </table>
   </body>
</html>
