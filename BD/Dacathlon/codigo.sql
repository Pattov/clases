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
  `descripcion` varchar(45) NOT NULL,
  `idEmpleado` int(11) NOT NULL,
  PRIMARY KEY (`idSeccion`),
  FOREIGN KEY (`idEmpleado`) 
    REFERENCES `empleados` (`idEmpleado`)
);

CREATE TABLE `dacathlon`.`productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `codProducto` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  `precio_unitario` DECIMAL(7,2) NOT NULL,
  `fabricante` VARCHAR(45) NULL,
  `marca` VARCHAR(45) NULL,
  `modelo` VARCHAR(45) NULL,
  `idSeccion` INT NOT NULL,
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
  `idCategoria` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `descripcion` VARCHAR(45) NULL
);

CREATE TABLE `dacathlon`.`cat_pro`(
  `id_categoria` INT NOT NULL,
  `id_producto` INT NOT NULL,
  PRIMARY KEY(`id_categoria`, `id_producto`),
  FOREIGN KEY (`id_categoria`) 
      REFERENCES `dacathlon`.`categorias` (`idCategoria`),
  FOREIGN KEY (`id_producto`)
      REFERENCES `dacathlon`.`productos` (`idProducto`)
);

CREATE TABLE `dacathlon`.`caracteristicas`(
  `idCaracteristica` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `id_categoria` INT NOT NULL,
  `nombre` VARCHAR(100),
  FOREIGN KEY (`id_categoria`)
      REFERENCES `dacathlon`.`categorias` (`idCategoria`)
);

CREATE TABLE `dacathlon`.`car_pro`(
  `id_producto` INT NOT NULL,
  `id_caracteristica` INT NOT NULL,
  `valor` VARCHAR(50) NULL,
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
  `importeDeIva` DECIMAL(7,2) null,
  `importeConIva` DECIMAL(7,2) null,
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
('17342043J', 'Pilar'),
('16504348K', 'Felix'),
('14232849F', 'Catalina'),
('16984348K', 'Sara'),
('16984348K', 'Jaime'),
('16984348K', 'Ramon');

INSERT INTO clientes (id_persona) VALUES
(3),(5);

INSERT INTO empleados VALUES 
(1,6,15000,null),
(2,3,5000,1),
(3,7,3500,1),
(4,1,1500,3),
(5,8,900,4),
(6,9,450,4);

INSERT INTO secciones VALUES 
(1,'Montania',6),
(2,'Deporte',5),
(3,'Pesca',2),
(4,'Caza',4);

INSERT INTO `productos` (codProducto, nombre, precio_unitario, idSeccion) VALUES
('X938290B', 'Nice Air Mux', 155, 1),
('X938291B', 'Nice Air Mux', 155, 1),
('X938292B', 'Nice Air Mux', 155, 1),
('H327848J','Cania de Pesca Nuzman', 45.99, 3);

INSERT INTO ventas (idVenta, id_Cliente, fecha, hora) VALUES 
(202100001, 1, '2021-05-21', '17:35:05'),
(202100011, 2, '2021-05-22', '11:12:45');

INSERT INTO categorias (descripcion) VALUES
('Calzado de montania'),
('Cañas Golden');

INSERT INTO cat_pro VALUES
(1, 1),
(2, 2);

INSERT INTO `caracteristicas` (id_categoria, nombre) VALUES
(1, 'Talla'),
(1, 'Color'),
(1, 'Material'),
(2, 'Color'),
(2, 'Material');

INSERT INTO car_pro VALUES
(1, 1, '39'),
(1, 2, 'Verde'),
(1, 3, 'Sintetica'),
(2, 1, '40'),
(2, 2, 'Negro'),
(2, 3, 'Sintetica'),
(3, 1, '41'),
(3, 2, 'Blanca'),
(3, 3, 'Sintetica'),
(4, 4, 'Oro'),
(4, 5, 'Acero');

INSERT INTO posicionVenta (id_venta, id_producto, cantidad, importeTotal) VALUES 
(202100001, 1, 1, 155.00),
(202100011, 1, 2, 310.00),
(202100011, 4, 1, 45.99),
(202100011, 2, 1, 155.00),
(202100011, 3, 1, 155.00);
