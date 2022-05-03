CREATE DATABASE `super` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `super`;

CREATE TABLE `super`.`cliente` ( 
    `clie_id` INT NOT NULL , 
    `clie_nif` VARCHAR(10) NOT NULL , 
    `clie_nombre` VARCHAR(50) NOT NULL , 
    `clie_apellidos` VARCHAR(50) NOT NULL , 
    `clie_direccion1` VARCHAR(50) NOT NULL , 
    `clie_direccion2` VARCHAR(50), 
    `clie_email` VARCHAR(50), 
    `clie_telefono` INT(9) NOT NULL 
    ) ENGINE = InnoDB;

CREATE TABLE `super`.`permiso` ( 
    `per_id` INT NOT NULL AUTO_INCREMENT , 
    `per_nombre` VARCHAR(50) NOT NULL , 
    PRIMARY KEY (`per_id`)
    ) ENGINE = InnoDB;

CREATE TABLE `super`.`empleado` ( 
    `emp_id` INT NOT NULL AUTO_INCREMENT , 
    `emp_nombre` VARCHAR(50) NOT NULL , 
    `emp_contrasenia` VARCHAR(10) NOT NULL , 
    `emp_per` INT(11) NOT NULL, 
    PRIMARY KEY (`emp_id`),
    FOREIGN KEY(`emp_per`) REFERENCES permiso(per_id)
    ) ENGINE = InnoDB;

CREATE TABLE `super`.`mensajero` ( 
    `men_id` INT NOT NULL AUTO_INCREMENT , 
    `men_nombre` VARCHAR(50) NOT NULL , 
    `men_nif` VARCHAR(10) NOT NULL ,
    PRIMARY KEY (`men_id`)
    ) ENGINE = InnoDB;

CREATE TABLE `super`.`venta` ( 
    `ven_id` INT NOT NULL AUTO_INCREMENT , 
    `ven_dia` date NOT NULL , 
    `ven_hora` date NOT NULL , 
    `ven_clie` INT NOT NULL, 
    `ven_emp` INT NOT NULL, 
    `ven_men` INT NOT NULL, 
    PRIMARY KEY (`ven_id`)
    ) ENGINE = InnoDB;
-- 2022
--   ,
--     FOREIGN KEY(`ven_emp`) REFERENCES `super`.`empleado`(`emp_id`),
--     FOREIGN KEY(`ven_clie`) REFERENCES `super`.`cliente`(`clie_id`),
--     FOREIGN KEY(`ven_men`) REFERENCES `super`.`mensajero`(`men_id`)

CREATE TABLE `super`.`formaPago` ( 
    `for_id` INT NOT NULL AUTO_INCREMENT , 
    `for_nombre` VARCHAR(50) NOT NULL , 
    `for_fechaOp` date NOT NULL , 
    `for_fechaVal` date NOT NULL,
    PRIMARY KEY (`for_id`)
    ) ENGINE = InnoDB;

CREATE TABLE `super`.`pagoVenta` ( 
    `pag_id` INT NOT NULL AUTO_INCREMENT , 
    `pag_for` INT(11) NOT NULL, 
    `pag_vent` INT NOT NULL,
    PRIMARY KEY (`pag_id`)
    ) ENGINE = InnoDB;

    -- 2022
    -- ,
    -- FOREIGN KEY(`pag_for`) REFERENCES formaPago(for_id),
    -- FOREIGN KEY(`pag_vent`) REFERENCES venta(ven_id)

CREATE TABLE `super`.`productos` ( 
    `prod_id` INT NOT NULL AUTO_INCREMENT , 
    `prod_nombre` VARCHAR(50) NOT NULL,
    `prod_cantidad` INT(11) NOT NULL, 
    `prod_precio` DECIMAL(10,2) NOT NULL, 
    `prod_marca` VARCHAR(50) NOT NULL,
    `prod_categoria` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`prod_id`)
    ) ENGINE = InnoDB;

CREATE TABLE `super`.`posicion` ( 
    `pos_id` INT NOT NULL AUTO_INCREMENT , 
    `pos_cantidad` INT(6) NOT NULL , 
    `pos_ven` INT NOT NULL, 
    `pos_prod` INT NOT NULL,
    PRIMARY KEY (`pos_id`)
    ) ENGINE = InnoDB;

    -- 2022
    -- ,
    -- FOREIGN KEY(`pos_prod`) REFERENCES productos(prod_id),
    -- FOREIGN KEY(`pos_ven`) REFERENCES venta(ven_id)