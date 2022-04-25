import * as funciones from "./funciones.js";


//una vez que la pagina es cargada
document.addEventListener('DOMContentLoaded', () => {
    // Comprobamos si el navegador soporta WebStorage 
    if(typeof(Storage)!=="undefined"){
        //El navegador soporta WebStorage

        //Declaración de eventos
        document.getElementsByClassName("btn").onclick = funciones.cuerpoProductos;
       

    // Eventos
        funciones.cuerpoProductos();
        funciones.imprimirCarrito();
    }else{
        alert("El Programa va a presentar problemas. Usa otro Navegador");
    }
});