<?php

/*
 * Generales de conexión a la BD
 */

define("DBHOST", 'localhost');
define("DBUSER", 'root');
define("DBPASS", '');
define("DBPORT", 3306);
define("DB", 'crucero');
define("DBOPTIONS", [
        'PDO::ATTR_ERRMODE' => 'PDO::ERRMODE_EXCEPTION',
        'PDO::ATTR_DEFAULT_FETCH_MODE' => 'PDO::FETCH_BOTH'
    ]);
/*
 * Relativas al chequeo de usuarios logueados
 */
define("USER_FIELD", 'user');
define("PASS_FIELD", 'pass');
define("AUTH_TABLE", 'cliente');




?>