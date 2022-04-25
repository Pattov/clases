import * as funciones from "./funciones.js";

//INTANCIA DE BOTONES QUE NO SE USAN EN LOS OTROS MODULOS
const BTNVACIAR = document.querySelector('#boton-vaciar');

//una vez que la pagina es cargada
document.addEventListener('DOMContentLoaded', () => {
    // Comprobamos si el navegador soporta WebStorage 
    if(typeof(Storage)!=="undefined"){
        //El navegador soporta WebStorage

        //Declaración de eventos
        BTNVACIAR.addEventListener('click', funciones.vaciarCarrito);
        // EJECUCION DE FUNCIONES
        funciones.cuerpoProductos();
        funciones.imprimirCarrito();

    }else{
        alert("El Programa va a presentar problemas. Usa otro Navegador");
    }
});