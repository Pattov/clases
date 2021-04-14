mysql - u alumno13 - h 192.168.1.53 - p contraseña salida 
use examen13;
CREATE TABLE roles (
    idRol VARCHAR (50) PRIMARY KEY,
    descripcion VARCHAR(50)
);
CREATE TABLE usuarios (
    email VARCHAR (50) PRIMARY KEY,
    nombre VARCHAR(50),
    password VARCHAR(50),
    idRol VARCHAR(50),
    FOREIGN KEY(idRol) REFERENCES roles(idRol)
);
CREATE TABLE permisos(
    idPermisos VARCHAR(50) PRIMARY KEY,
    elementos varchar(50),
    actividad VARCHAR(50)
);
CREATE TABLE rol_permisos(
    idRol VARCHAR(50),
    idPermisos VARCHAR(50),
    PRIMARY KEY (idRol, idPermisos),
    FOREIGN KEY(idRol) REFERENCES roles(idRol),
    FOREIGN KEY(idPermisos) REFERENCES permisos(idPermisos)
);
CREATE TABLE articulos(
    idArticulo VARCHAR(50) PRIMARY KEY,
    titulo VARCHAR(1000),
    cuerpo VARCHAR(1000),
    email VARCHAR(50),
    fecha VARCHAR(50),
    likes VARCHAR(50),
    dislikes VARCHAR(50),
FOREIGN KEY(email) REFERENCES usuarios(email)
);
CREATE TABLE comentarios(
    idComentario VARCHAR(50) PRIMARY KEY,
    idPadre VARCHAR(50),
    nivel VARCHAR(50),
    email VARCHAR(50),
    fecha VARCHAR (50),
    texto VARCHAR (255),
    idArticulo VARCHAR(50),
    FOREIGN KEY(email) REFERENCES usuarios(email),
    FOREIGN KEY(idArticulo) REFERENCES articulos(idArticulo)
);
INSERT INTO roles
VALUES ('01', 'Editor'),
    ('02', 'Lector'),
    ('03', 'Anonimo');
INSERT INTO usuarios (
        VALUES ('Patxi@gmail.com', 'Patxi', 'salida', '01'),
            ('Julia@gmail.com', 'Julia', 'windows', '01'),
            ('Ruben@gmail.com', 'Ruben', '45sjhsak', '02'),
            ('Marga@gmail.com', 'Marga', 'palencia', '02'),
            ('Jose@gmail.com', 'Jose', 'valladolid', '02'),
            ('Carlos@gmail.com', 'Carlos', 'basedatos', '02'),
            ('Patricia@gmail.com','Patricia','pattov','01')
    );
INSERT INTO permisos(
        VALUES ('01', 'comentarios', 'Leer'),
                ('02', 'comentarios', 'Escribir'),
                ('03', 'articulos', 'Leer'),
                ('04', 'articulos', 'Escribir')
    );

INSERT INTO rol_permisos(
        VALUES ('01', '04'),
            ('01', '01'),
            ('01', '02'),
            ('02', '01'),
            ('02', '02'),
            ('02', '03')
    );
    INSERT INTO articulos(
        VALUES (
                '01',
                'Navidad:toque de queda a la 1:30 los días 24 y el 31, diez comensales y movilidad limitada en la región',
                '<p> Entre el 23 de diciembre y el 6 de enero no se podrá <strong>ni salir ni entrar</strong> de una comunidad salvo para reagrupación familiar...</p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corrupti officiis optio eum dolorum soluta! Amet nulla laborum, eligendi dolorum tempore corporis? Deserunt tenetur soluta dolore pariatur eligendi optio ipsa! </p>',
                'Patxi@gmail.com',
                '20201203',
                '3',
                '5'
            ),
            (
                '02',
                'Las terrazas improvisadas llenan Valladolid',
                'Muchos vallisoletanos se resisten a abandonar la costumbre de ac...',
                'Julia@gmail.com','20201203','178',NULL
            ),
            (
                '03',
                'Navidad: toque de queda a la 1:30 los dias 24 y el 31, diez ...',
                'Entre el 23 de diciembre y el 6 de enero no se podr...',
                'Patxi@gmail.com',
                '20201203',
                '3',
                '5'
            )
    );
INSERT INTO comentarios(
        VALUES (
                '1',
                NULL,
                '0',
                'Ruben@gmail.com',
                '20201203102015',
                'Pues no me parece nada bien.',
                '01'
            ),
            (
                '2',
                '1',
                '1',
                'Marga@gmail.com',
                '20201203103052',
                'No entiendo el porque.',
                '01'
            ),
            (
                '3',
                '2',
                '2',
                'Jose@gmail.com',
                '20201203112015',
                'Totalmente de acuerdo.',
                '01'
            ),
            (
                '4',
                NULL,
                '0',
                'Carlos@gmail.com',
                '20201204125052',
                'Ya era hora!',
                '02'
            ),
            (
                '5',
                '4',
                '1',
                'Marga@gmail.com',
                '20201204135052',
                'hora de que?',
                '02'
            )
    );
