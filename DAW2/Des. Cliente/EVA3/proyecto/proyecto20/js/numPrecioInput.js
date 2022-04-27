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

