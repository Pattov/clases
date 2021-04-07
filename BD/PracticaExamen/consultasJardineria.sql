-- nombre y apellidos de los empleados que trabajen en españa
SELECT empleado.nombre, empleado.apellido1
FROM empleado, oficina
WHERE empleado.codigo_oficina = oficina.codigo_oficina and oficina.pais='españa';

-- clientes que han pagado con paypal
SELECT cl.nombre_cliente AS 'Nombre', cl.forma_pago AS 'Forma De Pago'
FROM cliente cl, pago p
WHERE p.forma_pago='PayPal' AND cl.codigo_empleado_rep_ventas = p.codigo_empleado;

-- Todos los productos que no tengan stock y sus respectivos proveedores
   SELECT cantidad_en_stock AS'STOCK', proveedor, nombre
    FROM producto
    WHERE cantidad_en_stock=0 
    
-- Cantidad media de pagos hecho con paypal de clientes españoles
    SELECT ROUND(AVG(total),2), pais
    FROM pago INNER JOIN cliente ON pago.codigo_cliente = cliente.codigo_cliente
    WHERE forma_pago='PayPal' AND pais='españa'
-- productos que se venden en el pais donde vive Lasas
    SELECT *
    FROM cliente c , p
    WHERE c.apellido_contacto='Lasas'

-- Muestra los nombre de todos los empleados cuyo jefe se llame Kevin
    SELECT *
    FROM empleado e
    WHERE codigo_jefe in (SELECT e.codigo_empleado FROM empleado e WHERE e.nombre='Kevin');

-- Nombre, direccion y comentario de todas las personas que hayan dejado un comentario en su pedido
    SELECT c.nombre_cliente AS 'Nombre Cliente', c.linea_direccion1 AS 'Dirección', p.comentarios
    FROM pedido p, cliente c
    WHERE p.comentarios IS NOT NULL AND p.codigo_cliente=c.codigo_cliente
    
-- Clientes que se llaman igual que alguno de los empleados
    SELECT *
    FROM empleado e, cliente c
    WHERE e.nombre=c.nombre_cliente AND c.codigo_cliente = e.codigo_empleado_rep_ventas