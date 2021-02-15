CREATE TABLE articulos (
    cod INTEGER AUTO_INCREMENT PRIMARY KEY,
    TIT VARCHAR(40) NOT NULL,
    TEXTO TEXT NOT NULL,
    prop INTEGER,
    perm BIT(6)
);

CREATE TABLE usuarios (
    cod INTEGER AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(4010) NOT NULL,
    apellidos VARCHAR(4010) NOT NULL,
    fecha_crea DATE,

);

--show create table nombre_tabla

INSERT INTO articulos VALUE 
('hola', 'Ado', 213, b'101101'),
('ano', 'Sito', 223, b'111001'),
('RIP', 'Claro', 43243, b'110101'),
('Mens', 'Otro más', 213, b'110110')
;

ALTER TABLE articulos ADD COLUMN lecturas INT;
ALTER TABLE articulos 
    ADD constraint FOREIGN KEY (prop) REFERENCES usuarios(id);

INSERT INTO usuarios (nombre, apellidos, fecha_crea)
VALUES ('Manolo', 'Sánchez', CURRENT_DATE()),
       ('Javier', 'López', CURRENT_DATE());

SELECT cod from articulos;

SELECT bin (perm) from articulos;
SELECT hex (perm) from articulos;
SELECT oct (perm) from articulos;
SELECT tit,bin (perm) from articulos;
SELECT cod, tit, texto, bin (perm) from articulos;
SELECT perm&b'010000' from articulos;
-- esto es una proyeccion
SELECT cod, tit, texto, prop, bin(perm), lecturas from articulos;

SHOW WARNINGS;

-- solos el Año
SELECT date_format(fecha_crea, '%Y')from usuarios;
SELECT date_format(fecha_crea, '%d/%m/%Y')from usuarios;
SELECT date_format(fecha_crea, 'Año: %Y, Mes:%m, Día: %d')from usuarios;
-- Para quitarla el encabezado se hace con AS
SELECT date_format(fecha_crea, 'Año: %Y, Mes:%m, Día: %d') AS fecha from usuarios;
SELECT cod AS 'Identificador del usuario' from usuarios;




Partiendo de la situacion actual, se pretende añadir una restriccion de FK entre la tabla de articulos y la tabla de usuarios, de forma que el campo propietario se mapee con los usuarios existentes del siguiente modo:
    Los articulos con prop entre 0 y 1000 -> deben pertenecer al usuario 1.
    Los articulos con 1000 < prop < 3000 -> Deben pertenecer al usuario 2.
    Los articulos con prop>3000 -> deben pertenecer al usuario 3.