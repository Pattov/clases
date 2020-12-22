CREATE DATABASE mensajes CHARACTER SET utf8 COLLATE utf8_general_ci;
USE mensajes;
CREATE TABLE usuarios (
    email VARCHAR(50) PRIMARY KEY,
    nick VARCHAR(50),
    nombre VARCHAR(50)
);
CREATE TABLE mensajes (
    codigo VARCHAR(50),
    titulo VARCHAR(50),
    texto VARCHAR(50),
    emisor VARCHAR(50),
    envia VARCHAR(50),
    PRIMARY KEY(email),
    FOREIGN KEY(email) REFERENCES usuarios(email)
);
CREATE TABLE receptores (
    email VARCHAR(50),
    codigo VARCHAR(50),
    fecha VARCHAR(50),
    PRIMARY KEY(email, codigo),
    FOREIGN KEY(email) REFERENCES usuarios(email),
    FOREIGN KEY (codigo) REFERENCES mensajes(codigo)
);
INSERT INTO usuarios
VALUES ('jm@gmail.com', 'JoseM', 'Jose Manuel'),
    ('Mrs@gmail.com', 'Marisu', 'Maria Suarez'),
    ('Javichu@gmail.com', 'Javi', 'Javier Ibañez'),
    ('Juani@gmail.com', 'JuaniG', 'Juana Garcia'),
    ('Albert@gmail.com', 'Alber', 'Alberto Diaz');
INSERT INTO mensajes
VALUES ('01','Hola','Hola Chicos, reunión a primera hora en la sala2','jm@gmail.com','03/12/2020'),
    ('02','Recuerda','Nos vemos a las cinco en el bar EL CID','Juani@gmail.com','02/12/2020'),
    ('03','Incidencia','Llama a la clienta 12023','Albert@gmail.com','04/12/2020');
INSERT INTO receptores
VALUES ('Mrs@gmail.com', '02', '02/12/2020'),
    ('Mrs@gmail.com', '03', '04/12/2020'),
    ('Mrs@gmail.com', '01', '03/12/2020'),
    ('Javichu@gmail.com', '01', '03/12/2020'),
    ('jm@gmail.com', '01', '03/12/2020');
