const LOCALSTORAGE=window.localStorage;
let language;

//una vez que la pagina es cargada
document.addEventListener('DOMContentLoaded', () => {
    // Comprobamos si el navegador soporta WebStorage 
    if(typeof(Storage)!=="undefined"){
        //El navegador soporta WebStorage
        cargarLocalStorage();
    }else{
        alert("El Programa va a presentar problemas. Usa otro Navegador");
    }
});

/**
 * Comprueba el Carrito y lo carga en la información
 */
export function cargarLocalStorage (key) {
    // ¿Existe un carrito previo guardado en LocalStorage?
    /*if (LOCALSTORAGE.getItem(key) !== null) {
        // Carga la información
        
    }*/
    return LOCALSTORAGE.getItem(key);
}
/**
 * Guarda carrito en el localStorage usando Stringify para cambiar el objeto en una cadena JSON
 */
export function guardarLocalStorage (variable, valor) {
    LOCALSTORAGE.setItem(variable, valor);
}  

 /**
 * Varia el carrito y vuelve a dibujarlo
 */
function vaciarCarrito() {
    //Borrar LocalStorage
    LOCALSTORAGE.removeItem('language');
}

