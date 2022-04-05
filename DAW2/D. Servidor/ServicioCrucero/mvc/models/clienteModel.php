<?php

require_once './db/DB.php';

class Cliente {
    
    // Propiedades
    private $nombreapellidos;
    private $password;
    private $fechanac;
    private $cDNI;
    private $tipoCliente;
    
    // PENDIENTE RESERVAS
    // private $reservas = [];
   
    
    // Métodos
    function __construct($nombreapellidos, $password, $fechanac, $cDNI, $tipoCliente) {
        $this->nombreapellidos = $nombreapellidos;
        $this->password = $password;
        $this->fechanac = $fechanac;
        $this->cDNI = $cDNI;
        $this->tipoCliente = $tipoCliente;
    }
    function getNombreapellidos() {
        return $this->nombreapellidos;
    }

    function getPassword() {
        return $this->password;
    }

    function getFechanac() {
        return $this->fechanac;
    }

    function getCDNI() {
        return $this->cDNI;
    }

    function getTipoCliente() {
        return $this->tipoCliente;
    }

    function setNombreapellidos($nombreapellidos): void {
        $this->nombreapellidos = $nombreapellidos;
    }

    function setPassword($password): void {
        $this->password = $password;
    }

    function setFechanac($fechanac): void {
        $this->fechanac = $fechanac;
    }

    function setCDNI($cDNI): void {
        $this->cDNI = $cDNI;
    }

    function setTipoCliente($tipoCliente): void {
        $this->tipoCliente = $tipoCliente;
    }

    
    public function logoutUser($cDNI) {
        if (isset($_SESSION['cDNI'])) {
          
            unset($_SESSION['cDNI']);
        }
    }

    function checkUsuario() : bool {
        // Conectar a la base de datos
        DB::conectarDB();
        
        // Chequear usuario y password en la tabla de autenticación
        $sql = 'SELECT '.USER_FIELD.', '.PASS_FIELD.' FROM '.AUTH_TABLE.' WHERE '.USER_FIELD.' = ? AND '.PASS_FIELD.' = ?';
        DB::prepararQuery($sql, [$this->cDNI, $this->password]);
        $queryOK = DB::ejecutarQueryPreparada();
        
        // Devolver a una variable el resultado de la operación
        if ($queryOK)
            $result = DB::registrosAfectados();
        else
            $result = false;
        
        // Cerrar conexión con la base de datos
        DB::desconectarDB();
        
        // Devolvemos registros afectados
        return $result;
    }
 


    function registraUsuario() : bool {
        // Conectar a la base de datos
        DB::conectarDB();
        
        // Crear la consulta de inserción
        $sql = 'INSERT INTO '.AUTH_TABLE.' ('.USER_FIELD.', '.PASS_FIELD.') VALUES(?,?)';
        
        // Preparar query
        DB::prepararQuery($sql, [$this->cDNI, $this->password]);
        $queryOK = DB::ejecutarQueryPreparada();
        
        // Devolver a una variable el resultado de la operación
        if ($queryOK)
            $result = DB::registrosAfectados();
        else
            $result = false;
        
        // Cerrar conexión con la base de datos
        DB::desconectarDB();
        
        // Devolver resultado de la operación
        return $result;        
    }
    
}

    
    
    
    
    

?>