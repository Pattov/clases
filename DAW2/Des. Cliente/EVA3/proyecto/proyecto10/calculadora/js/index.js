//FUNCIONES
/**
 * Nos permite agregar un número al String de operación
 * Excepciones:
 *  No se pueden poner dos puntos seguidos
 * 
 * @param {*} numero - Numero tecleado
 */
function agregarNumero(numero){
    if(numero!=operacionPantalla.textContent.slice(-1)){
        // incluimos el signo
    
        operacionPantalla.textContent = operacionPantalla.textContent + numero;

    }
        // incluimos el numero
        operacionPantalla.textContent = operacionPantalla.textContent + numero;

}

/**
 * Esta funcion nos permite introducir valores en la expresion a calcular
 * Excepciones:
 *      No nos permité introducir dos signos iguales seguidos
 *      No nos permité introducir otro operador detras de / o *
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
    acumuladorPosiciones = 0;
}

/**
 * con la funcion que tenemos opera según la prioridad de la operacion
 * @param {} operacion - operacion almacenada en la parte de la Pantalla
 */
function Calcular(operacion) {
    //funcion eval pasa la variable string que contiene la operacion en numeros y respeta los signos de operaciones
    return eval(operacion);
}

function Excepciones(caso) {
    switch (caso) {
        case 1:
            //si lo ultimo de la variable es un signo de operacion lo quita
            if(operacionPantalla.textContent.slice(-1)=='+'||operacionPantalla.textContent.slice(-1)=='-'||operacionPantalla.textContent.slice(-1)=='*'||operacionPantalla.textContent.slice(-1)=='/'){
                return operacionPantalla.textContent=operacionPantalla.textContent.slice(0,(operacionPantalla.textContent.length-1));
            }
            break;
        case 2:
            //Si lo primero que se pulsa es un signo añadiremos 0 delante del signo
            if (acumuladorPosiciones==0) {
                operacionPantalla.textContent = "0";
            }
            break;
        default:
            break;
    }
}
//DECLARAR VARIABLES
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const botonBorrar = document.querySelector('#btn_borrar');
const botonIgual = document.querySelector('#btn_igual');
let operacionPantalla = document.getElementById('operacion');
let resultadoPantalla = document.getElementById('resultado');
let acumuladorPosiciones = 0;

// EJECUCION CODIGO

// Eventos Botones
botonesNumeros.forEach(boton => {
    boton.addEventListener('click',() => {
        acumuladorPosiciones++;
        agregarNumero(boton.innerText);
    })
});
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => {
        //Selecciona Operador
        Excepciones(2);
        acumuladorPosiciones++;
        SelectOperador(boton.innerText);
    })
});

botonBorrar.addEventListener('click',() => {
    BorrarTodo();
 });

botonIgual.addEventListener('click',() => {
    Excepciones(1);
    resultadoPantalla.textContent = Calcular(operacionPantalla.textContent);

 });
