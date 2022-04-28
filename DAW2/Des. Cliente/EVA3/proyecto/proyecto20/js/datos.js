export const BTNVACIAR = document.querySelector('#boton-vaciar');
export const CUERPOPROD = document.querySelector('#items');
export const IMPRIMIRCARRO = document.querySelector('#carrito');
export const TXTTOTAL = document.querySelector('#total');
export const LOCALSTORAGE=window.localStorage;


// La estructura para crear el id de los input es btnAcun+Nombre del Array
let precioPan = document.querySelector('precioPan');
let elementoGalleta = document.getElementById('precioGalleta');
let precioGalleta = elementoGalleta.getAttribute('value');
let precioArroz = document.getElementById('precioArroz');
let precioPollo = document.getElementById('precioPollo');
let precioQueso = document.getElementById('precioQueso');
let precioPescado= document.getElementById('precioPescado');
// }
//LA CANTIDAD SE INCREMENTARA CON UN BOTÓN Y EL PRECIO SE COGERÁ DE EL INPUT DE LA PAGINA 
export const BDPRODUCTOS = [
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
