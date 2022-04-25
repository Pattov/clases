
export const CUERPOPROD = document.querySelector('#items');
export const IMPRIMIRCARRO = document.querySelector('#carrito');
export const TXTTOTAL = document.querySelector('#total');

//VARIABLES PRECIOS
let numero;
let preciopan = document.getElementById('btnAcumPan');
let preciogalleta = document.getElementById('btnAcumGalletas');
let precioarroz = document.getElementById('btnAcumArroz');
let preciopollo = document.getElementById('btnAcumPollo');
let precioqueso = document.getElementById('btnAcumQueso');
let preciopescado= document.getElementById('btnAcumPescado');
// gramo.oninput = () => {
//     //comprobamos que el numero es positivo
//     numero = numerosPositivos(gramo.value);
//     //desactivamos los otros elementos cuando escribimos
//     libra.setAttribute('disabled','');
//     quintal.setAttribute('disabled','');
//     onza.setAttribute('disabled','');
//     //hacemos operaciones
//     libra.value = parseFloat(numero*0.0022);
//     quintal.value = parseFloat(numero*1e-5);
//     onza.value = parseFloat(numero*0.035274);
//   };
// preciopan.oninput = () => {
//     if(preciopan==null){
//         preciopan=0;
//     }else{
//         preciopan=preciopan.value;
//     }

// }
//LA CANTIDAD SE INCREMENTARA CON UN BOTÓN Y EL PRECIO SE COGERÁ DE EL INPUT DE LA PAGINA 
export const BDPRODUCTOS = [
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

