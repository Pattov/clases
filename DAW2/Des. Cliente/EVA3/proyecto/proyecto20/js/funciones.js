import * as datos from "./datos.js";

/**
 * Evento para borrar un elemento del carrito
 */
 function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const IDBOTON = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== IDBOTON;
    });

    // volvemos a imprimir el carrito
    imprimirCarrito();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
 function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const MIITEM = datos.BDPRODUCTOS.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + MIITEM[0].precio;
    }, 0).toFixed(2);
}

/**
 * Genera la estructura del HTML con los datos de los productos
 * E S T R U C T U R A 
 *<div class="card">
        <div class="galleta ing-content">
            <img src="img/pexels-galletas.jpg" class="foto">
            <h4 class="nombre">Galletas</h4>
            <button class="btn" id="btnAcumGall">+</button>
            <input type="number" id="precio" placeholder="PRECIO"/>
        </div>
    </div> 
 */

export function cuerpoProductos() {
    datos.BDPRODUCTOS.forEach((info) => {
        // Estructura de la Card Container
        const CCONTAINER = document.createElement('div');
        CCONTAINER.classList.add('card');
        // Card Body
        const CBODY = document.createElement('div');
        CBODY.classList.add(info.nombre, 'ing-content');
        // Card de la Imagen
        const CIMAGEN = document.createElement('img');
        CIMAGEN.classList.add('foto');
        CIMAGEN.setAttribute('src', info.imagen);
        // Titulo
        const CTITULO = document.createElement('h4');
        CTITULO.classList.add('card-title');
        CTITULO.textContent = info.nombre;
        // Boton 
        const CBOTON = document.createElement('button');
        CBOTON.classList.add('btn');
        CBOTON.textContent = '+';
        CBOTON.setAttribute('id', `btnAcum${info.nombre}`);
        CBOTON.setAttribute('marcador', info.id);
        CBOTON.addEventListener('click', incluirProductoAlCarrito);
        // Precio (INPUT - PARA PODER INTRODUCIR EL TEXTO)
        const CINPUT = document.createElement('input');
        CINPUT.setAttribute('type', 'number');
        CINPUT.setAttribute('id', 'precio');
        CINPUT.setAttribute('placeholder', 'PRECIO');
        // Hacemos la estructura en árbol
        CBODY.appendChild(CIMAGEN);
        CBODY.appendChild(CTITULO);
        CBODY.appendChild(CINPUT);
        CBODY.appendChild(CBOTON);
        CCONTAINER.appendChild(CBODY);
        datos.CUERPOPROD.appendChild(CCONTAINER);
    });
}

/**
* Dibuja todos los productos guardados en el carrito
*/
export function imprimirCarrito() {
    // Vaciamos todo el html
    datos.IMPRIMIRCARRO.textContent = '';
    // Quitamos los duplicados
    const CARRITO_SIN_DUPLICADOS = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    CARRITO_SIN_DUPLICADOS.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const MIITEM = datos.BDPRODUCTOS.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
         const UNID_PRODUCTO = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? total += 1 : total;
        }, 0);
    // Creamos LA ESTRUCTURA del item del carrito
    const CCONTAINER = document.createElement('li');
    CCONTAINER.classList.add('list-group-item', 'prop');
    CCONTAINER.textContent = `${UNID_PRODUCTO} x ${MIITEM[0].nombre} - ${MIITEM[0].precio}€`;
    // Boton de borrar linea
    const BTNLINEA = document.createElement('button');
    BTNLINEA.classList.add('btn', 'btn-danger', 'btnlinea');
    BTNLINEA.textContent = 'X';
    BTNLINEA.addEventListener('click', borrarItemCarrito);
    BTNLINEA.dataset.item = item;
    // creamos estructura HTML
    CCONTAINER.appendChild(BTNLINEA);
    datos.IMPRIMIRCARRO.appendChild(CCONTAINER);
    });
    // modificamos el precio total en el HTML
    datos.TXTTOTAL.textContent = calcularTotal();
}

/**
 * Evento para añadir un producto al carrito de la compra cuando se pulsa el boton
 */
 function incluirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'));
    // Actualizamos el carrito 
    imprimirCarrito();
}


 /**
 * Varia el carrito y vuelve a dibujarlo
 */
export function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    imprimirCarrito();
}
/*instancio la variable en este módulo porque solo se ejecuta una vez, 
* mientras que con script se ejecuta tantas veces como lo indiquemos
*/
let carrito = [];
