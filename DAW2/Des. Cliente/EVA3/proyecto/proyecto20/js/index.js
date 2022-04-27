import * as funciones from "./funciones.js";
import * as datos from "./datos.js";

//una vez que la pagina es cargada
document.addEventListener('DOMContentLoaded', () => {
    // Comprobamos si el navegador soporta WebStorage 
    if(typeof(Storage)!=="undefined"){
        //El navegador soporta WebStorage

        //Declaración de eventos
        datos.BTNVACIAR.addEventListener('click', funciones.vaciarCarrito);
        
        // EJECUCION DE FUNCIONES
        funciones.cargarLocalStorage();
        funciones.cuerpoProductos();
        funciones.imprimirCarrito();

    }else{
        alert("El Programa va a presentar problemas. Usa otro Navegador");
    }
});