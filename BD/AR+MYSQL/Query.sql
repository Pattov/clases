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

