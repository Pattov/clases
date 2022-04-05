//FUNCIONES
/**
 * Nos permite agregar un número al String de operación
 * Excepciones:
 *  No se pueden poner dos puntos seguidos
 * 
 * @param {*} numero - Numero tecleado
 */
function agregarNumero(numero){
        // incluimos el numero
        operacionPantalla.textContent = operacionPantalla.textContent + numero;

}

/**
 * Esta funcion nos permite introducir valores en la expresion a calcular
 * Excepciones:
 *      No nos permité introducir dos signos iguales seguidos
 *      No nos permité introducir otro operador detras de 
 *
 * @param {*} valor - Operador tecleado
 */
function SelectOperador(valor) {
    // validamos el valor
    if(valor!=operacionPantalla.textContent.slice(-1)){
        // incluimos el signo
        operacionPantalla.textContent = operacionPantalla.textContent+valor;
    }
}    
/**
 * Esta Funcion borra todos los valores que tengamos
 *
 */
function BorrarTodo() {
    operacionPantalla.textContent = '';
    resultadoPantalla.textContent = ''; 
}
/**
 * con la funcion que tenemos opera según la prioridad de la operacion
 * @param {} operacion - operacion almacenada en la parte de la Pantalla
 */
function Calcular(operacion) {
    //funcion eval pasa la variable string que contiene la operacion en numeros y respeta los signos de operaciones
    return eval(operacion);
}

//DECLARAR VARIABLES
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonBorrar = document.querySelector('#btn_borrar');
const botonIgual = document.querySelector('#btn_igual');
let operacionPantalla = document.getElementById('operacion');
let resultadoPantalla = document.getElementById('resultado');

// EJECUCION CODIGO

// Eventos Botones
botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => {
       agregarNumero(boton.innerText);
    })
});
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        //Selecciona Operador
        SelectOperador(boton.innerText);
    })
});

botonBorrar.addEventListener('click',() => {
    BorrarTodo();
 });

botonIgual.addEventListener('click',() => {
    resultadoPantalla.textContent = Calcular(operacionPantalla.textContent);
 });
