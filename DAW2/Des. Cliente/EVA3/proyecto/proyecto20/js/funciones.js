import * as datos from "./datos.js";

function actualizarPrecio(e) {
    const IDPRODUCTOINPUT = e.target.getAttribute('marcadorPrice');
    console.log("idProducto "+IDPRODUCTOINPUT);

}
/**
 * Evento para borrar un elemento del carrito
 */
 function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const IDBOTON = evento.target.dataset.item;
    const VALORBOTON = evento.target.getAttribute('value');
    
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== IDBOTON;
    });
    /**
     * condicion
     * precioValor[1] !== VALORBOTON && precioValor[0] !== IDBOTON */
    precioCarrito = precioCarrito.filter(precioValor => {
        return precioValor[1] !== VALORBOTON && precioValor[0] !== IDBOTON
    });
        
    imprimirCarrito();
    guardarLocalStorageCarrito();
    guardarLocalStoragePrecio();
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
 * Comprueba el Carrito y lo carga en la información
 */
export function cargarLocalStorageCarrito () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (datos.LOCALSTORAGE.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(datos.LOCALSTORAGE.getItem('carrito'));
    }
    
}
/**
 * Comprueba el Precio y lo carga en la información
 */
 export function cargarLocalStoragePrecio () {
    precioCarrito = JSON.parse(datos.LOCALSTORAGE.getItem('precio'));
}

/**
 * Genera la estructura del HTML con los datos de los productos
 * E S T R U C T U R A 
        <div class="card">
            <div class="nombreproducto ing-content">
                <img class="foto" src="././img/pexels-nombreproducto.jpg">
                <h4 class="card-title">nombreproducto</h4>
                <input type="number" id="precio" placeholder="PRECIO">
                <button class="btn" id="btnAcumPan" marcadorCantidad="1">+</button>
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
        CTITULO.textContent = info.nombre;
        // Boton 
        const CBOTON = document.createElement('button');
        CBOTON.classList.add('btn');
        CBOTON.textContent = '+';
        CBOTON.setAttribute('marcadorCantidad', info.id);
        CBOTON.setAttribute('value', info.precio);
        CBOTON.addEventListener('click', incluirProductoAlCarrito);
        // Precio (INPUT - PARA PODER INTRODUCIR EL TEXTO)
        const CINPUT = document.createElement('input');
        CINPUT.classList.add(`precio${info.nombre}`);
        CINPUT.setAttribute('type', 'number');
        CINPUT.setAttribute('id', 'precio');
        CINPUT.setAttribute('placeholder', 'PRECIO');
        CINPUT.setAttribute('value', info.precio);
        CINPUT.setAttribute('marcadorPrice', info.id);
        CINPUT.addEventListener('input',actualizarPrecio);
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
*   <li class="list-group-item prop">cantidadproducto x nombreproducto - precioproducto€
        <button class="btn btn-danger btnlinea btnp" data-item="idproducto">X</button>
    </li>
*/
export function imprimirCarrito() {
    // Vaciamos todo el html
    datos.IMPRIMIRCARRO.textContent = '';
    // creamos un array con el Set
    const CARRITO_SIN_DUPLICADOS = [...new Set(carrito)];
    // Quitamos los duplicados
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
        const BTNLINEA = document.createElement('button');
        BTNLINEA.classList.add('btn', 'btn-danger', 'btnlinea');
        BTNLINEA.textContent = 'X';
        BTNLINEA.addEventListener('click', borrarItemCarrito);
        BTNLINEA.dataset.item = item;
        CCONTAINER.appendChild(BTNLINEA);
        datos.IMPRIMIRCARRO.appendChild(CCONTAINER);
    });
    // modificamos el precio total en el HTML
    datos.TXTTOTAL.textContent = calcularTotal();
}

/**
 * Evento para añadir un producto al carrito de la compra cuando se pulsa el boton
 * y el precio
 */
 function incluirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcadorCantidad'));
    precioCarrito.push([evento.target.getAttribute('marcadorCantidad'),evento.target.getAttribute('value')]);
    // Actualizamos el carrito 
    imprimirCarrito();
    guardarLocalStorageCarrito();
    guardarLocalStoragePrecio();
}


/**
 *Guarda carrito en el localStorage usando Stringify para cambiar el objeto en una cadena JSON
 */
function guardarLocalStorageCarrito () {
    datos.LOCALSTORAGE.setItem('carrito', JSON.stringify(carrito));
}
/**
 *Guarda carrito en el localStorage usando Stringify para cambiar el objeto en una cadena JSON
 */
 function guardarLocalStoragePrecio () {
    datos.LOCALSTORAGE.setItem('precio', JSON.stringify(precioCarrito));
}
 /**
 * Varia el carrito y vuelve a dibujarlo
 */
export function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    precioCarrito = [];
    imprimirCarrito();
    //Borrar LocalStorage
    datos.LOCALSTORAGE.removeItem('carrito');
    datos.LOCALSTORAGE.removeItem('precio');
}
/*instancio la variable en este módulo porque si lo pongo en otro modulo solo se ejecuta una vez, 
* mientras que si esta en el mismo módulo se ejecuta tantas veces como lo instanciemos(actua igual q un scrip)
*/
let carrito = [];
let precioCarrito = [];