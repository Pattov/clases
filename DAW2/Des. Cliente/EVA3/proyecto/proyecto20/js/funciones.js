import * as datos from "./datos.js";
/**
 * Actualizamos el precio cuando alguien escribe en el input
 * teniendo en cuenta el Id_Producto y el precio 
 */
function actualizarPrecio(e) {
    let existe = false;  
    let validar=false;
    //Obtenemos el Producto ID donde se escribe 
    const IDPRODUCTOINPUT = e.target.getAttribute('marcadorPrice');
    //Obtenemos el valor que se escribe en tipo numero
    const VALORPRODUCTOINPUT = e.target.value;
    //comprobamos que cumple la expresión regular
    validar = Precio2DecimalesValido(VALORPRODUCTOINPUT);
    if(validar){
        //Añadimos el Valor al Array de Precios Formado por IDProducto + PrecioProcucto
        //El array ya tiene valores
        precio.forEach(element => {
            if (element[0]===IDPRODUCTOINPUT) {
                element[1]=VALORPRODUCTOINPUT;
                existe=true;
            }
        });
        //Si no hay nada, lo añadimos
        existe==false?precio.push([IDPRODUCTOINPUT,VALORPRODUCTOINPUT]):0;
    }else{
        alert("Ha habido algún Error. Recuerda el número debe ser Positivo");
        e.target.value = "";
    }
}

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
    precio = precio.filter((precioId) => {
        return precioId[0] !== IDBOTON;
    })    
    imprimirCarrito();
    guardarLocalStorage();
    location.reload();
}

/**
 * Calcula el precio total teniendo en cuenta los productos repetidos
 */
 function calcularTotal() {
    let total=0;
    // Recorremos el array del carrito
    for (let index = 1; index < 7; index++) {
        let unidProducto = carrito.reduce((total, itemId) => {
            // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
            return itemId == index ? total += 1 : total;
        }, 0);
        let valorPrecio = PrecioDelProducto(index);
        if(valorPrecio!=""){

            total += (unidProducto*valorPrecio);
        }
    } 
    return total.toFixed(2);
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
    if (datos.LOCALSTORAGE.getItem('precio') !== null) {
        precio = JSON.parse(datos.LOCALSTORAGE.getItem('precio'));
    }
    
}

/**
 * Genera la estructura del HTML con los datos de los productos
 * E S T R U C T U R A 
        <div class="card">
            <div class="nombreproducto ing-content">
                <img class="foto" src="././img/pexels-nombreproducto.jpg">
                <h4>nombreproducto</h4>
                <input class="precio" type="number" placeholder="PRECIO" marcadorprice="idProducto" value="">
                <button class="btn" marcadorcantidad="idProducto" value="">+</button>
            </div>
        </div>
 */

export function cuerpoProductos() {
    datos.BDPRODUCTOS.forEach((info) => {
        let item = PrecioDelProducto(info.id);
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
        // Precio (INPUT - PARA PODER INTRODUCIR EL TEXTO)
        const CINPUT = document.createElement('input');
        CINPUT.classList.add('precio');
        CINPUT.setAttribute('type', 'number');
        CINPUT.setAttribute('placeholder', 'PRECIO');
        CINPUT.setAttribute('marcadorPrice',info.id);
        CINPUT.setAttribute('value', item);
        CINPUT.addEventListener('input',actualizarPrecio);
        // Boton 
        const CBOTON = document.createElement('button');
        CBOTON.classList.add('btn');
        CBOTON.textContent = '+';
        CBOTON.setAttribute('marcadorCantidad', info.id);
        CBOTON.setAttribute('value', item);
        CBOTON.addEventListener('click', incluirProductoAlCarrito);
        
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
*   <li class="list-group-item prop">cantidadproducto x nombreproducto
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
        const PRICE_PRODUCTO = PrecioDelProducto(MIITEM[0].id);
        // Creamos LA ESTRUCTURA del item del carrito
        const CCONTAINER = document.createElement('li');
        CCONTAINER.classList.add('list-group-item', 'prop');
        CCONTAINER.textContent = `${UNID_PRODUCTO} x ${MIITEM[0].nombre} - ${PRICE_PRODUCTO}€`;
        const BTNLINEA = document.createElement('button');
        BTNLINEA.classList.add('btn', 'btn-danger', 'btnlinea');
        BTNLINEA.textContent = 'X';
        BTNLINEA.dataset.item = item;
        BTNLINEA.addEventListener('click', borrarItemCarrito);
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
    //comprobamos si tiene un precio el producto que queremos introducir
    //si es null es que no hay precio para ese producto
    const PRECIO_VALOR = PrecioDelProducto(evento.target.getAttribute('marcadorCantidad'));
    if(PRECIO_VALOR!=""){
        // Añadimos el Producto a nuestro a nuestro carrito
        carrito.push(evento.target.getAttribute('marcadorCantidad'));
    }else{
        alert("Introduce el Precio");
    }
    // Actualizamos el carrito 
    imprimirCarrito();
    guardarLocalStorage();

}


/**
 * Guarda carrito en el localStorage usando Stringify para cambiar el objeto en una cadena JSON
 */
function guardarLocalStorage () {
    datos.LOCALSTORAGE.setItem('carrito', JSON.stringify(carrito));
    datos.LOCALSTORAGE.setItem('precio', JSON.stringify(precio));
}  

/**
 * Comprueba si el número pasado cumple los parametros
 * de ser Positivo, tener maximo dos decimales
 * 
 * @param {*} numero que hay que comprobar
 * @return {*} True = si cumple todo
 *             False = no cumple los requisitos
 */
function Precio2DecimalesValido(numero) {
    let val = /^([\.0-9]{0,})$/;
    return val.test(numero);
}
/**
 * Devuelve el precio de un producto
 * 
 * @param {*} numero id del Producto
 * @return {*} el precio de ese producto
 * si no hay nada sale ""
 */
 function PrecioDelProducto(iDproducto) {
    let price = "";
    precio.forEach(itemPrecio => {
    if(itemPrecio[0] == iDproducto){
        price = itemPrecio[1];
    }
    //Si contiene un punto redondear a dos decimales
    if(price!="" && price.indexOf('.')!= -1){
       price = parseFloat(price).toFixed(2); 
    }
    });
    return price;
        
}
 /**
 * Varia el carrito y vuelve a dibujarlo
 */
export function vaciarCarrito() {
    //Borrar LocalStorage
    datos.LOCALSTORAGE.removeItem('carrito');
    datos.LOCALSTORAGE.removeItem('precio');
    location.reload();
}


/*instancio la variable en este módulo porque si lo pongo en otro modulo solo se ejecuta una vez, 
* mientras que si esta en el mismo módulo se ejecuta tantas veces como lo instanciemos(actua igual q un scrip)
*/
let carrito = [];
//Declaro un Array Multidimensional
// https://www.programiz.com/javascript/multidimensional-array
// El carrito esta formado por [cantidad, precio][cantidad,precio].....
let precio = [];
