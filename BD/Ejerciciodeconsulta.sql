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
VALUES ('C1','X3A', 20, 'SEVILLA'),
('C2','JUAN', 10, 'MADRID'),
('C3','JOSÃ‰', 30,'SEVILLA'),
('C4','INMA', 20, 'SEVILLA'),
('C5','EVA',30, 'CACERES');

