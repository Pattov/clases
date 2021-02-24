-- En un sistema de gestión de préstamos bibliotecarios se extraen las siguientes relaciones:
--      LIBROS(cod(PK), titulo, autor, fecha_pub)
--    	USUARIOS(NIF(PK), nombre, telefono)
-- 	    PRESTAMOS(libro(PK), usuario(PK), fecha(PK), fecha_dev, anotaciones)

CREATE TABLE libros(
    cod CHAR(10) PRIMARY KEY NOT NULL,
    titulo VARCHAR(100),
    autor VARCHAR(50),
    fecha_pub DATE,
);
CREATE TABLE usuarios(
    NIF CHAR(9) PRIMARY KEY NOT NULL,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
);
CREATE TABLE prestamos(
    libro CHAR(10),
    usuario CHAR(9),
    fecha DATE NOT NULL,
    fecha_dev DATE,
    anotaciones TEXT,
    PRIMARY KEY(libro, usuario, fecha),
    FOREIGN KEY(libro) REFERENCES libros(cod),
    FOREIGN KEY(usuario) REFERENCES usuario(NIF),
);

-- Título y autor de los libros que se han sacado en 2021.
    SELECT titulo, libro
        FROM libros, prestamos
        WHERE libros.cod=prestamos.libro AND YEAR(prestamos.fecha)='2021';

-- Nombre y telefono de los usuarios que no han devuelto sus prestamos aún
    SELECT usuarios.nombre, usuarios.telefono
        FROM usuarios JOIN nodev
        WHERE nodev in
            SELECT *
            FROM PRESTAMOS
            WHERE fecha_dev is NULL

--Teniendo en cuenta que los préstamos no pueden pasar de 5 días, modifica la consulta anterior para saber qué usuarios deben ser penalizados. Puedes hacer uso de la función CURR_DATE() para saber la fecha actual y puedes restar dos fechas para saber el número de días que difieren entre ellas.



