CREATE DATABASE consultas CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE TABLE proveedores (
    id_p VARCHAR(5) NOT NULL PRIMARY KEY,
    pnombre VARCHAR(30),
    categoria INT,
    ciudad VARCHAR(10)
);
CREATE TABLE componentes(
    id_c VARCHAR(5) NOT NULL PRIMARY KEY,
    cnombre VARCHAR(30),
    color VARCHAR(10),
    peso INT,
    ciudad VARCHAR(10)
);
CREATE TABLE articulos(
    id_t VARCHAR(5) NOT NULL PRIMARY KEY,
    tnombre VARCHAR(30),
    ciudad VARCHAR(10)
);
CREATE TABLE envios (
    prod VARCHAR(5),
    comp VARCHAR(5),
    art VARCHAR(5),
    cantidad INT,
    PRIMARY KEY(prod, comp, art),
    FOREIGN KEY(prod) REFERENCES proveedores(id_p),
    FOREIGN KEY (comp) REFERENCES componentes(id_c),
    FOREIGN KEY (art) REFERENCES articulos(id_t)
);

show tables;

INSERT INTO proveedores 
VALUES ('P1','CARLOS', 20, 'SEVILLA'),
('P2', 'JUAN', 10, 'MADRID'),
('P3', 'JOSÃ‰', 30,'SEVILLA'),
('P4','INMA', 20, 'SEVILLA'),
('P5','EVA',30, 'CACERES');

INSERT INTO componentes 
VALUES ('C1','X3A','ROJO', 12,'SEVILLA'),
('C2','B85','VERDE', 17,'MADRID'),
('C3','C4B','AZUL', 17,'MALAGA'),
('C4','C4B','ROJO', 14,'SEVILLA'),
('C5','VT8','AZUL', 12,'MADRID'),
('C6','C30','ROJO', 19,'SEVILLA');

INSERT INTO articulos
VALUES('T1','CLASIFICADORA','MADRID'),
('T2','PERFORADORA','MALAGA'),
('T3','LECTORA','CACERES'),
('T4','CONSOLA','CACERES'),
('T5','MEZCLADORA','SEVILLA'),
('T6','TERMINAL','BARCELONA'),
('T7','CINTA','SEVILLA');

INSERT INTO envios
VALUES('P1','C1','T1',200),
('P1','C1','T4',700),
('P2','C3','T1',400),
('P2','C3','T2',200),
('P2','C3','T3',200),
('P2','C3','T4',500),
('P2','C3','T5',600),
('P2','C3','T6',400),
('P2','C3','T7',800),
('P2','C5','T2',100),
('P3','C3','T1',200),
('P3','C4','T2',500),
('P4','C6','T3',300),
('P4','C6','T7',300),
('P5','C2','T2',200),
('P5','C2','T4',100),
('P5','C5','T4',500),
('P5','C5','T7',100),
('P5','C6','T2',200),
('P5','C1','T4',100),
('P5','C3','T4',200),
('P5','C4','T4',800),
('P5','C5','T5',400),
('P5','C6','T4',500);

Obtener todos los detalles de todos los articulos de CACERES

    SELECT id_t, tnombre, ciudad
        FROM articulos
        WHERE ciudad='CACERES';