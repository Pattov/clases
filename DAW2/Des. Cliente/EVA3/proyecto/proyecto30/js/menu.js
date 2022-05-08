/**
 * Generamos el select
 * Se puntara tal que así
 * <select name="nivel" class="nivel" id="nivel" onchange="MostrarSelect()">
 *      <option value="" selected disabled>¿Que dificultad eliges?</option>
 *      <option value="Facil">Facil</option>
 *      <option value="Medio">Medio</option>
 *    <option value="Dificil">Dificil</option>
 * </select> 
 *
 */
function generarSeleccionarNivel() {
    // Creamos el Select
    const CSELECT = document.createElement('select');
    CSELECT.classList.add('nivel');
    CSELECT.setAttribute('id', 'nivel');
    CSELECT.addEventListener('change',selectElegido);
    // De cada Objeto que tenemos en nivel creamos un option distinto
    NIVELES.forEach(cadanivel => {
        const COPTION = document.createElement('option');
        COPTION.setAttribute('value',cadanivel.nivel);
        //El primer objeto es el option que contiene ¿Qué dificultad eliges?
        if(cadanivel.nivel===''){
            //Lo deshabilito para que no se pueda seleccionar
            COPTION.setAttribute('disabled',"");
        }
        // ¿coindice lo almacenado en nivel y nivel del niveles?añadimos en el elemento el atributo seleccionado
        getCookie('nivel')==cadanivel.nivel?COPTION.setAttribute('selected',''):null;
        COPTION.textContent = cadanivel.descripcion;
        CSELECT.appendChild(COPTION);
    });   
    SELECT.appendChild(CSELECT);
}
/**
 * Saber el valor elegido en el Select 
 * 
 * @param {*} e
 */
function selectElegido(e) {
    nivelElegido = e.target.value;
}


nivelElegido = getCookie('nivel');
generarSeleccionarNivel();

JUGAR.addEventListener("click", () => {
    //comprubamos si el nivel esta elegido
    if(nivelElegido!=''){
        //Guardamos el nivel en una Cookie durante 7 dias
        setCookies('nivel',nivelElegido,7);
        //desaparece el div del Menú
        PANTALLAMENU.style.display="none";
        //aparece la pantalla juego
        PANTALLAJUGADAS.style.display="grid";
        // document.body.setAttribute("style").background = ref;
        //temporizador
        stop=false;
        temporizador();
    }else{
        alert("Elige un nivel");
    }
});