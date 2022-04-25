export let carrito = [];
export const CUERPOPROD = document.querySelector('#items');
export const TOTAL = document.querySelector('#total');
export const IMPRIMIRCARRO = document.querySelector('#carrito');
//VARIABLES PRECIOS
let preciopan = 1;
let preciogalleta = 1;
let precioarroz = 1;
let preciopollo = 1;
let precioqueso = 1;
let preciopescado= 1;

//LA CANTIDAD SE INCREMENTARA CON UN BOTÓN Y EL PRECIO SE COGERÁ DE EL INPUT DE LA PAGINA 
export const PRODUCTOS = [
    {
        id: 1,
        nombre: 'Pan',
        precio: preciopan,
        imagen: '././img/pexels-pan.jpg'
    },
    {
        id: 2,
        nombre: 'Galletas',
        precio: preciogalleta,
        imagen: '././img/pexels-galletas.jpg'
    },
    {
        id: 3,
        nombre: 'Arroz',
        precio: precioarroz,
        imagen: '././img/pexels-arroz.jpg'
    },
    {
        id: 4,
        nombre: 'Pollo',
        precio: preciopollo,
        imagen: '././img/pexels-carne.jpg'
    },
    {
        id: 5,
        nombre: 'Queso',
        precio: precioqueso,
        imagen: '././img/pexels-queso.jpg'
    },
    {
        id: 6,
        nombre: 'Pescado',
        precio: preciopescado,
        imagen: '././img/pexels-pescado.jpg'
    }

];
