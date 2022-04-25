import * as datos from "./datos.js";

/**
 * Evento para añadir un producto al carrito de la compra cuando se pulsa el boton
 */
function aniadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    datos.carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    imprimirCarrito();

}
/**
 * Evento para borrar un elemento del carrito
 */
 function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const IDS = evento.target.dataset.item;
    // Borramos todos los productos
    datos.carrito = datos.carrito.filter((carritoId) => {
        return carritoId !== IDS;
    });
    // volvemos a renderizar
    imprimirCarrito();
}
/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
function calcularTotal() {
    // Recorremos el array del carrito 
    return datos.carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const PRODUCTO = datos.PRODUCTOS.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        // return total + PRODUCTO[0].precio;
    }, 0).toFixed(2);
}

/**
 * 
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
    datos.PRODUCTOS.forEach((info) => {
        // Estructura
        const CCONTAINER = document.createElement('div');
        CCONTAINER.classList.add('card');
        // Body
        const CCARD = document.createElement('div');
        CCARD.classList.add(info.nombre, 'ing-content');
        // Imagen
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
        CBOTON.addEventListener('click', aniadirProductoAlCarrito);
        // Precio
        const CINPUT = document.createElement('input');
        CINPUT.setAttribute('type', 'number');
        CINPUT.setAttribute('id', 'precio');
        CINPUT.setAttribute('placeholder', 'PRECIO');
        // Hacemos la estructura en árbol
        CCARD.appendChild(CIMAGEN);
        CCARD.appendChild(CTITULO);
        CCARD.appendChild(CBOTON);
        CCARD.appendChild(CINPUT);
        CCONTAINER.appendChild(CCARD);
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
    const CARRITOSINDUPL = [...new Set(datos.carrito)];
    // Generamos los Nodos a partir de carrito
    CARRITOSINDUPL.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const PRODUCTO = datos.PRODUCTOS.filter((itemBaseDatos) => {
            // ¿Coincide las id? Solo puede existir un caso
            itemBaseDatos.id === parseInt(item);
        });
        // Cuenta el número de veces que se repite el producto
        const UNIDPRODUCTOS = datos.carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos la estructura del item del carrito
        const LINEA = document.createElement('li');
        LINEA.textContent = `${UNIDPRODUCTOS} x ${PRODUCTO[0].nombre} - ${PRODUCTO[0].precio}€`;

        // Boton de borrar
        const QUITARPORLINEA = document.createElement('button');
        QUITARPORLINEA.classList.add('btn', 'btn-danger', 'mx-5');
        QUITARPORLINEA.textContent = 'X';
        QUITARPORLINEA.style.marginLeft = '1rem';
        QUITARPORLINEA.dataset.item = item;
        QUITARPORLINEA.addEventListener('click', borrarItemCarrito);
        // creamos herencias
        LINEA.appendChild(QUITARPORLINEA);
        datos.IMPRIMIRCARRO.appendChild(LINEA);
    });
    // Renderizamos el precio total en el HTML
    datos.TOTAL.textContent = calcularTotal();
}
 /**
 * Varia el carrito y vuelve a dibujarlo
 */
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    datos.carrito = [];
    // Renderizamos los cambios
    imprimirCarro();
}