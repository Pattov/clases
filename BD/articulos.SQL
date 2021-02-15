CREATE TABLE articulos (
    cod INTEGER AUTO_INCREMENT PRIMARY KEY,
    TIT VARCHAR(40) NOT NULL,
    TEXTO TEXT NOT NULL,
    prop INTEGER,
    perm BIT(6)
);

CREATE TABLE usuarios (
    cod INTEGER AUTO_INCREMENT PRIMARY KEY,
);

--show create table nombre_tabla

INSERT INTO articulos VALUE 
('hola', 'Ado', 213, b'101101'),
('ano', 'Sito', 223, b'111001'),
('RIP', 'Claro', 43243, b'110101'),
('Mens', 'Otro más', 213, b'110110')
;

ALTER TABLE articulos ADD COLUMN lecturas INT;

SELECT cod from articulos;

SELECT bin (perm) from articulos;
SELECT hex (perm) from articulos;
SELECT oct (perm) from articulos;
SELECT tit,bin (perm) from articulos;
SELECT cod, tit, texto, bin (perm) from articulos;
SELECT perm&b'010000' from articulos;
-- esto es una proyeccion
SELECT cod, tit, texto, prop, bin(perm), lecturas from articulos;