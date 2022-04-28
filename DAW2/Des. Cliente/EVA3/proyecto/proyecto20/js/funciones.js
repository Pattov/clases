import * as datos from "./datos.js";

function actualizarPrecio(e) {
    //Obtenemos el Producto ID donde se escribe 
    const IDPRODUCTOINPUT = e.target.getAttribute('marcadorPrice');
    console.log("idProducto "+IDPRODUCTOINPUT);
    //Obtenemos el valor que se escribe en tipo numero
    const VALORPRODUCTOINPUT = e.target.value;
    console.log("Valor Producto "+VALORPRODUCTOINPUT);
    //Cambiamos el valor del precio
    datos.BDPRODUCTOS.forEach(item => {
        if(item.id == IDPRODUCTOINPUT){
            e.target.setAttribute('value',VALORPRODUCTOINPUT);
            // item.precio = VALORPRODUCTOINPUT;
        }
    });
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
        return carritoId[0] !== IDBOTON && carritoId[1] !== VALORBOTON;
    });
        
    imprimirCarrito;
    guardarLocalStorage;
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
 function calcularTotal() {
     //2022
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const MIITEM = carrito.filter((itemPrecio) => {
            return itemPrecio[1] === parseInt(item);
        });
        // Los sumamos al total
        return total + MIITEM[0].precio;
    }, 0).toFixed(2);
}

/**
 * Comprueba el Carrito y lo carga en la información
 */
export function cargarLocalStorage () {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (datos.LOCALSTORAGE.getItem('carrito') !== null) {
        // Carga la información
        carrito = JSON.parse(datos.LOCALSTORAGE.getItem('carrito'));
    }
    
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
    //2022 ???foreach
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
        // 2022
        // CBOTON.setAttribute('value', carrito[1]);
        CBOTON.addEventListener('click', incluirProductoAlCarrito);
        // Precio (INPUT - PARA PODER INTRODUCIR EL TEXTO)
        const CINPUT = document.createElement('input');
        CINPUT.classList.add('precio');
        CINPUT.setAttribute('type', 'number');
        CINPUT.setAttribute('id', `precio${info.nombre}`);
        CINPUT.setAttribute('placeholder', 'PRECIO');
        // 2022
        // CINPUT.setAttribute('value', carrito[1]);
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
    carrito.push([evento.target.getAttribute('marcadorCantidad'),evento.target.getAttribute('value')]);
    // Actualizamos el carrito 
    imprimirCarrito();
    guardarLocalStorage();
}


/**
 *Guarda carrito en el localStorage usando Stringify para cambiar el objeto en una cadena JSON
 */
function guardarLocalStorage () {
    datos.LOCALSTORAGE.setItem('carrito', JSON.stringify(carrito));
}
 /**
 * Varia el carrito y vuelve a dibujarlo
 */
export function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    imprimirCarrito();
    //Borrar LocalStorage
    datos.LOCALSTORAGE.removeItem('carrito');
}
/*instancio la variable en este módulo porque si lo pongo en otro modulo solo se ejecuta una vez, 
* mientras que si esta en el mismo módulo se ejecuta tantas veces como lo instanciemos(actua igual q un scrip)
* El carrito esta formado por [cantidad, precio]
*/
let carrito = [];