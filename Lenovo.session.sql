CREATE DATABASE mensajes CHARACTER SET utf8 COLLATE utf8_general_ci;
USE mensajes;
CREATE TABLE usuarios (email VARCHAR(50) PRIMARY KEY, nick VARCHAR(50), nombre VARCHAR(50));
CREATE TABLE mensajes (codigo VARCHAR(50), titulo VARCHAR(50), texto VARCHAR(50), emisor VARCHAR(50), envia VARCHAR(50), PRIMARY KEY(email), FOREIGN KEY(email) REFERENCES usuarios(email));
CREATE TABLE receptores (email VARCHAR(50), codigo VARCHAR(50), fecha VARCHAR(50), PRIMARY KEY(email, codigo), FOREIGN KEY(email) REFERENCES usuarios(email), FOREIGN KEY (codigo)REFERENCES mensajes(codigo));
INSERT INTO usuarios VALUES ('jm@gmail.com','JoseM','Jose Manuel'),('Mrs@gmail.com','Marisu','Maria Suarez'),('Javichu@gmail.com','Javi','Javier Ibañez'),('Juani@gmail.com','JuaniG','Juana Garcia'),('Albert@gmail.com','Alber','Alberto Diaz'),
INSERT INTO mensajes VALUES ('01','Hola','Hola Chicos, reunión a primera hora en la sala2', 'jm@gmail.com','03/12/2020'),('02','Recuerda','Nos vemos a las cinco en el bar EL CID','Juani@gmail.com','02/12/2020'),('03','Incidencia','Llama a la clienta 12023','Albert@gmail.com','04/12/2020');
INSERT INTO receptores VALUES ('Mrs@gmail.com','02','02/12/2020'),('Mrs@gmail.com','03','04/12/2020'),('Mrs@gmail.com','01','03/12/2020'),('Javichu@gmail.com','01','03/12/2020'),('jm@gmail.com','01','03/12/2020');

CREATE DATABASES juegazos CHARACTER SET utf8 COLLATE utf8_general_ci;
USE juegazos;
CREATE TABLE facciones(IDFacciones VARCHAR(50)PRIMARY KEY,NombreFaccion);
CREATE TABLE reglas(IDRegla VARCHAR(50)PRIMARY KEY,NombreRegla VARCHAR(50),EfectoRegla VARCHAR(50),CosteEnPuntos VARCHAR(50));
CREATE TABLE regimientos(IDRegimiento VARCHAR(50) PRIMARY KEY,Faccion VARCHAR(50), NombreRegimiento VARCHAR(50),MinMiniaturas VARCHAR(50),MaxMiniaturas VARCHAR(50), CostePorMiniatura VARCHAR(50),Movimiento VARCHAR(50),Disparo VARCHAR(50), Combate VARCHAR(50), Moral VARCHAR(50), FOREIGN KEY (IDFaccion) REFERENCES Facciones(IDFaccion));
CREATE TABLE ejercito (IDEjercicio VARCHAR(50)PRIMARY KEY,NombreEjecito VARCHAR(50),IDFacción VARCHAR(50), TotalMiniaturas VARCHAR(50), TotalPuntos VARCHAR(50), FOREIGN KEY (IDFaccion) REFERENCES Facciones(IDFaccion));
CREATE TABLE Regimiento_Ejercito (IDEjercito VARCHAR(50),IDPosicion VARCHAR(50),NumMiniaturas VARCHAR(50),PRIMARY KEY (IDEjercito,IDPosicion), FOREIGN KEY (IDRegimiento) REFERENCES Regimiento())