<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Bienvenido a esta web <?php echo $_POST("name"); ?>
    Tu direccion de correo electronico es <?php echo $_POST("email"); ?>
</body>
</html>