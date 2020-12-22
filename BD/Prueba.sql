CREATE DATABASE mensajes CHARACTER SET utf8 COLLATE utf8_general_ci;
USE mensajes;
CREATE TABLE usuarios (
    email VARCHAR(50) PRIMARY KEY,
    nick VARCHAR(50),
    nombre VARCHAR(50)
);
CREATE TABLE mensajes (
    codigo VARCHAR(50) PRIMARY KEY,
    titulo VARCHAR(50),
    texto VARCHAR(50),
    emisor VARCHAR(50),
    envia VARCHAR(50)
);
CREATE TABLE receptores (
    email VARCHAR(50),
    codigo VARCHAR(50),
    fecha VARCHAR(50),
    PRIMARY KEY(email, codigo),
    FOREIGN KEY(email) REFERENCES usuarios(email),
    FOREIGN KEY (codigo) REFERENCES mensajes(codigo)
);
DROP TABLE receptores;