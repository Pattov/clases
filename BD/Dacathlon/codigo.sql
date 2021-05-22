DROP DATABASE IF EXISTS dacathlon;

CREATE DATABASE `dacathlon` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `dacathlon`;

CREATE TABLE `dacathlon`.`personas` (
  `idPersona` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nif` VARCHAR(9) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellidos` VARCHAR(45) NULL,
  `direccion_1` VARCHAR(45) NULL,
  `direccion_2` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `telefono` INT NULL
);

CREATE TABLE `dacathlon`.`clientes` (
  `idCliente` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_persona` INT NOT NULL,
    FOREIGN KEY (`id_persona`)
    REFERENCES `dacathlon`.`personas` (`idPersona`)
);

CREATE TABLE `dacathlon`.`empleados` (
  `idEmpleado` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `idPersona` INT NOT NULL,
  `sueldo` INT NULL,
  `idJefe` INT NULL,
  FOREIGN KEY (`idPersona`)
    REFERENCES `dacathlon`.`personas` (`idPersona`),
  FOREIGN KEY (`idJefe`) 
    REFERENCES empleados(`idEmpleado`)
);

CREATE TABLE `secciones` (
  `idSeccion` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `idEmpleado` int(11) DEFAULT NULL,
  PRIMARY KEY (`idSeccion`),
  FOREIGN KEY (`idEmpleado`) 
    REFERENCES `empleados` (`idEmpleado`)
);

CREATE TABLE `dacathlon`.`productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `codProducto` VARCHAR(45) NULL,
  `nombre` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `precio_unitario` DECIMAL(7,2) NULL,
  `fabricante` VARCHAR(45) NULL,
  `marca` VARCHAR(45) NULL,
  `modelo` VARCHAR(45) NULL,
  `idSeccion` INT NULL,
  PRIMARY KEY (`idProducto`),
    FOREIGN KEY (`idSeccion`)
    REFERENCES `dacathlon`.`secciones` (`idSeccion`)
);

CREATE TABLE `dacathlon`.`ventas`(
  `idVenta` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_Cliente` int NULL, 
  `fecha` DATE NULL,
  `hora` TIME NULL, 
  `total` INT null, 
  FOREIGN KEY (`id_Cliente`)
    REFERENCES `dacathlon`.`clientes` (`idCliente`)
);

CREATE TABLE `dacathlon`.`categorias`(
  `idCategoria` INT NOT NULL PRIMARY KEY,
  `descripcion` VARCHAR(45) NULL
);

CREATE TABLE `dacathlon`.`cat_pro`(
  `id_categoria` VARCHAR(4) NOT NULL,
  `id_producto` INT NOT NULL,
  PRIMARY KEY(`id_categoria`, `id_producto`),
  FOREIGN KEY (`id_categoria`) 
      REFERENCES `dacathlon`.`categorias` (`idCategoria`),
  FOREIGN KEY (`id_producto`)
      REFERENCES `dacathlon`.`productos` (`idProducto`)
);

CREATE TABLE `dacathlon`.`caracteristicas`(
  `idCaracteristica` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_categoria` VARCHAR(4) NOT NULL,
  `nombre` VARCHAR(100),
  FOREIGN KEY (`id_categoria`)
      REFERENCES `dacathlon`.`categorias` (`idCategoria`)
);

CREATE TABLE `dacathlon`.`car_pro`(
  `id_producto` INT NOT NULL,
  `id_caracteristica` INT NOT NULL,
  `valor` INT NULL,
  PRIMARY KEY(`id_producto`, `id_caracteristica`),
  FOREIGN KEY (`id_producto`)
      REFERENCES `dacathlon`.`productos` (`idProducto`),
  FOREIGN KEY (`id_caracteristica`) 
      REFERENCES `dacathlon`.`caracteristicas` (`idCaracteristica`)
);

CREATE TABLE `dacathlon`.`posicionVenta`(
  `posicion` INT NOT NULL AUTO_INCREMENT,
  `id_venta` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `cantidad` INT NULL,
  `importeTotal` DECIMAL(7,2) NULL,
  `importeDeIva` DECIMAL(7,2) NULL,
  `importeConIva` DECIMAL(7,2) NULL,
  PRIMARY KEY(`posicion`, `id_venta`, `id_producto`),
  FOREIGN KEY (`id_venta`)
    REFERENCES `dacathlon`.`ventas` (`idVenta`),
  FOREIGN KEY (`id_producto`)
    REFERENCES `dacathlon`.`productos` (`idProducto`)
);

INSERT INTO personas (nif, nombre) VALUES
('58423232B', 'Juancho'),
('83492323A', 'Marta'),
('44532435G', 'Alexys'),
('17342043J', 'Pilar')
('16504348K', 'Felix')
('14232849F', 'Catalina');

INSERT INTO clientes VALUES
(3),(5);

INSERT INTO categorias VALUES
('C001', 'Calzado deportivo'),
('C002', 'Calzado de montaña');

