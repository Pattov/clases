const BTNSINPUT = document.querySelectorAll('.btnp');
let precioPan = document.getElementById('btnAcumPan');
let precioGalleta = document.getElementById('btnAcumGalletas');
let precioArroz = document.getElementById('btnAcumArroz');
let precioPollo = document.getElementById('btnAcumPollo');
let precioQueso = document.getElementById('btnAcumQueso');
let precioPescado= document.getElementById('btnAcumPescado');

const BDPRODUCTOS = [
    {
        id: 1,
        nombre: 'Pan',
        precio: precioPan,
        imagen: '././img/pexels-pan.jpg'
    },
    {
        id: 2,
        nombre: 'Galletas',
        precio: precioGalleta,
        imagen: '././img/pexels-galletas.jpg'
    },
    {
        id: 3,
        nombre: 'Arroz',
        precio: precioArroz,
        imagen: '././img/pexels-arroz.jpg'
    },
    {
        id: 4,
        nombre: 'Pollo',
        precio: precioPollo,
        imagen: '././img/pexels-carne.jpg'
    },
    {
        id: 5,
        nombre: 'Queso',
        precio: precioQueso,
        imagen: '././img/pexels-queso.jpg'
    },
    {
        id: 6,
        nombre: 'Pescado',
        precio: precioPescado,
        imagen: '././img/pexels-pescado.jpg'
    }

];

BTNSINPUT.forEach(boton => {
    boton.addEventListener('input',() => {
        agregarNumero(boton.innerText);
    })
});

function agregarNumero(numero){
    if(numero!=operacionPantalla.textContent.slice(-1)){
        // incluimos el signo
    
        operacionPantalla.textContent = operacionPantalla.textContent + numero;

    }
        // incluimos el numero
        operacionPantalla.textContent = operacionPantalla.textContent + numero;

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

        const MIITEM = carrito.forEach(itemPrecio => {
            if(itemPrecio[0] == info.id){
                return itemPrecio[1]
            }
        });
        // Boton 
        const CBOTON = document.createElement('button');
        CBOTON.setAttribute('value', MIITEM);
    });
}

/**
* Dibuja todos los productos guardados en el carrito
*   <li class="list-group-item prop">cantidadproducto x nombreproducto - precioproducto€
        <button class="btn btn-danger btnlinea btnp" data-item="idproducto">X</button>
    </li>
*/
export function imprimirCarrito() {
    // Quitamos los duplicados
    CARRITO_SIN_DUPLICADOS.forEach((item) => {
        

        // Cogemos el precio
        const PRECIO_PRODUCTO = carrito.forEach(itemPrecio => {
            if(itemPrecio[0]===item[0]){
                return itemPrecio[1]
            }
        });
        // Creamos LA ESTRUCTURA del item del carrito
        CCONTAINER.textContent = `${UNID_PRODUCTO} x ${MIITEM[0].nombre} - ${PRECIO_PRODUCTO}€`;


    });
}

/**
 * Evento para añadir un producto al carrito de la compra cuando se pulsa el boton
 * y el precio
 */
 function incluirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push([evento.target.getAttribute('marcadorCantidad'),evento.target.getAttribute('value')]);
    // Actualizamos el carrito 

    
}


