/**
 * Esta función comprueba que un numero es positivo
 *
 * @param {*} numero - Valor a comprobar
 * @return {*}  - el numero indicado si es mayor a 0 o un mensaje de Error si es menor
 *              No es necesario validar las letras porque el input tipo number no admite letras
 */
function numerosPositivos(numero) {
  let num;
  if(numero>-1){
    num = numero;
    MensajeError.innerHTML='';
  }else{
    num = '';
    MensajeError.innerHTML = '<p style="color: red;">*El número debe ser Positivo</p>';
  }
  return num;
}
/**
 * En caso de que halla algo escrito lo borra
 *
 */
function borrarTodo() {
  gramo.value = '';
  gramo.removeAttribute("disabled");
  libra.removeAttribute("disabled");
  quintal.removeAttribute("disabled");
  onza.removeAttribute("disabled");
  libra.value = '';
  quintal.value = '';
  onza.value = '';
}


const btnBorrar = document.querySelector('.botonB');
let gramo = document.getElementById('gramos');
let libra = document.getElementById('libra');
let quintal = document.getElementById('quintal');
let onza = document.getElementById('onza');
let MensajeError = document.getElementById('error');
let numero;

// Eventos
btnBorrar.addEventListener('click',() => {
  borrarTodo();
});

gramo.oninput = () => {
  //comprobamos que el numero es positivo
  numero = numerosPositivos(gramo.value);
  //desactivamos los otros elementos cuando escribimos
  libra.setAttribute('disabled','');
  quintal.setAttribute('disabled','');
  onza.setAttribute('disabled','');
  //hacemos operaciones
  libra.value = parseFloat(numero*0.0022);
  quintal.value = parseFloat(numero*1e-5);
  onza.value = parseFloat(numero*0.035274);
};

libra.oninput = () => {
  numero = numerosPositivos(libra.value);
  gramo.setAttribute('disabled','');
  quintal.setAttribute('disabled','');
  onza.setAttribute('disabled','');
  gramo.value = parseFloat(numero*453.5926);
  quintal.value = parseFloat(numero*0.00453592);
  onza.value = parseFloat(numero*16);
};

quintal.oninput = () => {
  numero = numerosPositivos(quintal.value);
  gramo.setAttribute('disabled','');
  libra.setAttribute('disabled','');
  onza.setAttribute('disabled','');
  gramo.value = parseFloat(numero*100000);
  libra.value = parseFloat(numero*220.462);
  onza.value = parseFloat(numero*3527.398);
};

onza.oninput = () => {
  numero = numerosPositivos(onza.value);
  gramo.setAttribute('disabled','');
  libra.setAttribute('disabled','');
  quintal.setAttribute('disabled','');
  gramo.value = parseFloat(numero*28.3495);
  libra.value = parseFloat(numero*0.0625);
  quintal.value = parseFloat(numero*0.000283495);
};



