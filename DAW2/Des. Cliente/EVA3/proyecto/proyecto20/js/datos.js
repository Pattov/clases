export const BTNVACIAR = document.querySelector('#boton-vaciar');
export const CUERPOPROD = document.querySelector('#items');
export const IMPRIMIRCARRO = document.querySelector('#carrito');
export const TXTTOTAL = document.querySelector('#total');
export const LOCALSTORAGE=window.localStorage;


//LA CANTIDAD SE INCREMENTARA CON UN BOTÓN Y EL PRECIO SE COGERÁ DE EL INPUT DE LA PAGINA 
export const BDPRODUCTOS = [
    {
        id: 1,
        nombre: 'Pan',
        imagen: '././img/pexels-pan.jpg'
    },
    {
        id: 2,
        nombre: 'Galletas',
        imagen: '././img/pexels-galletas.jpg'
    },
    {
        id: 3,
        nombre: 'Arroz',
        imagen: '././img/pexels-arroz.jpg'
    },
    {
        id: 4,
        nombre: 'Pollo',
        imagen: '././img/pexels-carne.jpg'
    },
    {
        id: 5,
        nombre: 'Queso',
        imagen: '././img/pexels-queso.jpg'
    },
    {
        id: 6,
        nombre: 'Pescado',
        imagen: '././img/pexels-pescado.jpg'
    }

];