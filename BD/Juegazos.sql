CREATE DATABASES juegazos CHARACTER SET utf8 COLLATE utf8_general_ci;
USE juegazos;
CREATE TABLE facciones(
    IDFacciones VARCHAR(50) PRIMARY KEY,
    NombreFaccion
);
CREATE TABLE reglas(
    IDRegla VARCHAR(50) PRIMARY KEY,
    NombreRegla VARCHAR(50),
    EfectoRegla VARCHAR(50),
    CosteEnPuntos VARCHAR(50)
);
CREATE TABLE regimientos(
    IDRegimiento VARCHAR(50) PRIMARY KEY,
    Faccion VARCHAR(50),
    NombreRegimiento VARCHAR(50),
    MinMiniaturas VARCHAR(50),
    MaxMiniaturas VARCHAR(50),
    CostePorMiniatura VARCHAR(50),
    Movimiento VARCHAR(50),
    Disparo VARCHAR(50),
    Combate VARCHAR(50),
    Moral VARCHAR(50),
    FOREIGN KEY (IDFaccion) REFERENCES Facciones(IDFaccion)
);
CREATE TABLE ejercito (
    IDEjercicio VARCHAR(50) PRIMARY KEY,
    NombreEjecito VARCHAR(50),
    IDFacción VARCHAR(50),
    TotalMiniaturas VARCHAR(50),
    TotalPuntos VARCHAR(50),
    FOREIGN KEY (IDFaccion) REFERENCES Facciones(IDFaccion)
);
CREATE TABLE Regimiento_Ejercito (
    IDEjercito VARCHAR(50),
    IDPosicion VARCHAR(50),
    NumMiniaturas VARCHAR(50),
    PRIMARY KEY (IDEjercito, IDPosicion),
    FOREIGN KEY (IDRegimiento) REFERENCES Regimiento()
)