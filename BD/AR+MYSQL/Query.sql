show databases;

use reservas;
-- insertar tipla sin todos los campos
    insert into polideportivos
	          (nombre, direccion, ciudad)
        values('Machina', 'c/ Filipinos', 'Valdepeñas');

insert into pistas_cerradas 
values  (20,'2020-12-02','Derrumbe'),
	    (55,'2020-06-15','Reformas'),
	    (90,'2014-06-15','Faltas de presupuesto'),
	    (88,'2013-05-26','Incedio');

/*
    select <proyecion>        -- PI [proyeccion] (R1 * R2 * R3)
    FROM <producto cartesianos> -- R1 * R2 * R3
    Where <condicion seleccion> -- Sigma [condicion seleccion] (R1 * R2 * R3)*/

/* Quiero saber el codigo de pista, la fecha de clausura y el motivo de todas las pistas cerradas para todas las pistas cerradas en 2013
        Algebra relacional
             PI[codigo, fecha_clausura, motivo](Sigma[Pistas.id=Pistas_cerradas.id_Pistas AND YEAR(fecha_clausura)='2013')](PISTAS X PISTAS_CERRADAS))*/

select codigo as 'Código', fecha_clausula as 'Fecha de Clausura', motivo as 'Motivo'
from pistas p, pistas_cerradas pc
where p.id = pc.id_pista and year(fecha_clausura)='2013';

-- ver solo 19 tuplas
select * from pistas limit 19;

-- ver desde las 190 a la 200 tuplas
select * from pistas limit 190,200;

<a href="https://adsasdasdasda/listado.php?p=3&ipp=10">3</a>
SELECT * From pista limit p*ipp, p*ipp

//crea una tabla igual que la tabla pistas
CREATE table pistas_archivo like pistas;
-- ejemplo
    -- PRIMERO
    select * from pistas where codigo Like '%RM%';
    -- select * from TABLA where CAMPO Like CONDICION;
    select * from pistas where codigo Like '%I_R%';
    -- UN SOLO CARACTER _
    

insert into pistas_archivo SELECT * From pistas;

--        O        R        D        E        N        A        R


    --Ordena de forma desdendente ASC DESC
    SELECT p1.*, p2.* 
        FROM  pistas p1, pistas p2
        WHERE p1.tipo = p2.tipo AND p1.id <> p2.id
        ORDER BY p1.codigo, .id_polideportivo desc;

    SELECT p1.*, p2.* 
        FROM  pistas p1, pistas p2
        WHERE p1.tipo = p2.tipo AND p1.id <> p2.id
        ORDER BY p1.codigo asc, p1.id_polideportivo desc;
        

--FUNCIONES AGREGADAS
    SELECT COUNT(*)
        FROM  pistas p1, pistas p2
        WHERE p1.tipo = p2.tipo AND p1.id <> p2.id
        ORDER BY p1.codigo, .id_polideportivo desc;

--SELECT MAX(PRECIO) FROM reservas;
    SELECT * FROM reservas
    ORDER BY PRECIO DESC;
-- select AVG(precio) from pistas; --Media

-- agrupar por una columna
    select min(precio), tipo from pistas group by tipo;
    -- si ponemos el group by nombre tabla es lo mismo(y tendra la misma cardinalidad) que si pongo Select distinct tipo from pistas
-- ejemplos: 
    -- CUANTOS TIPOS DE PRECIOS DISTINTOS ABRIA EN PISTAS;
        SELECT min(distinct PRECIO) FROM PISTAS;

    -- cuantas ciudades tienen polideportivos
        select count(distinct ciudad) from polideportivos;
    -- cuales son las ciudades que tienen polidevortivos
        select distinct ciudad from polideportivos;
    --precio mini por cada tipo de pista;
        select min(precio), tipo from pistas; 
        --solo mostrará el precio minimo entre todos los tipos
        --ojo no es lo mismo que 
        SELECT id, codigo, tipo, ROUND(AVG(precio))
        FROM pistas
        GROUP BY tipo

-- Media de las pistas que esten entre 10 y 11 y su precio este entre 5 y 9

        SELECT id, codigo, tipo, ROUND(AVG(precio))
        FROM pistas
        GROUP BY tipo
        having AVG(precio) between 10 and 11;
-- Media de las pistas cuya media esten entre 10 y 11
        SELECT id, codigo, tipo, ROUND(AVG(precio))
        FROM pistas
        Where precio between 5 and 15
        GROUP BY tipo
        having AVG(precio) between 10 and 11;


-- cuanto dinero se gasta de media la gente en cada ciudad
    select ciudad, avg(r.precio) 
    from reservas r, polideportivos pd, pistas p
    where r.id_pista = pd.id and p.id_polideportivo=pd.id 
    group by pd.ciudad;
    select COUNT(id_pista) from reservas r,  polideportivos pd,  pistas p where r.id_pista = pd.id and p.id_polideportivo=pd.id 
    group by pd.ciudad;


-- Insertar una tabla en otra, la proyeccion tiene que coincidir con el esquema de la tabla a la que se quiere copiar
    Insert into pistas_temp select*from pistas where tipo='tenis';

-- Incrementar el valor a algo
-- OJO HACER ANTES SELECT Y LUEGO UPDATE;
    Update tabla set campo=campo*1.1;
    Update tabla set campo=campo*1.15 where tipo='futbol';

LIMIT

-- if(abierto) o if(!abierto) si son booleans

    SELECT P.codigo, P.tipo
    FROM pistas P INNER JOIN polideportivos PP  ON P.id_polideportivo = PP.id 
    WHERE PP.ciudad = 'Zaragoza'



-- Numero de polideportivos en cada ciudad
    select ciudad, count(id) as cantidad
    from polideportivos
    group by ciudad

-- Numero de polideportivos de tenis
    select ciudad, count(id) as cantidad
    from polideportivos pol INNER JOIN pistas pis on pol.id=pis.id_polideportivo
    where pis.tipo = 'tenis'
    group by ciudad

--Todos los polideportivos de huesca
    SELECT *
    FROM polideportivos
    WHERE ciudad ='Huesca'
    AND id_polideportivo IN(SELECT id from polideportivo where ciudad='Huesca')

--Todos los polideportivos que no son de huesca
    SELECT *
    FROM polideportivos
    WHERE ciudad ='Huesca'
    AND id_polideportivo IN(SELECT id from polideportivo where ciudad='Huesca')


-- Precio medio, por tipo de pista y cuyo precio minimo de pista sea menor que 5, de las pistas que no están operativas
    SELECT P.tipo, AVG(P.precio) AS precio_medio
    FROM pistas P, pistas_abiertas PA
    WHERE P.id = PA.id_pista AND PA.operativa = FALSE -- tupla a tupla
    GROUP BY P.tipo
    HAVING MIN(P.precio>11); -- si aplica a todo

-- Cantida de pistas en cada polideportivo
    SELECT id_polideportivo as Polideportivo, COUNT(id) as "Nº Pistas" 
    FROM pistas
    GROUP BY id_polideportivo;
