/* <select name="nivel" class="nivel" id="nivel" onchange="MostrarSelect()">
                <option value="" selected disabled>¿Que dificultad eliges?</option>
                <option value="Facil">Facil</option>
                <option value="Medio">Medio</option>
                <option value="Dificil">Dificil</option>
            </select> */

        
function GenerarSeleccionarNivel() {
    // Creamos el Select
    const CSELECT = document.createElement('select');
    CSELECT.classList.add('nivel');
    CSELECT.setAttribute('id', 'nivel');
    CSELECT.addEventListener('change',SelectElegido);
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
function SelectElegido(e) {
    nivelElegido = e.target.value;
}
//


nivelElegido = getCookie('nivel');
GenerarSeleccionarNivel();

JUGAR.addEventListener("click", () => {
    //comprubamos si el nivel esta elegido
    if(nivelElegido!=''){
        //Guardamos el nivel en una Cookie durante 7 dias
        setCookies('nivel',nivelElegido,7);
        //desaparece el div del Menú
        PANTALLAMENU.style.display="none";
        PANTALLAJUGADAS.style.display="flex";
    }else{
        alert("Elige un nivel");
    }
    // setInterval(() => {
    //     
    //     bloque_juego.classList.add("comenzar");

    //     //temporizador
    //     stop=false;

        
    // }, 2000);
        // temporizador();

})
