/**
 * temporizador regresivo
 *
 */
 function temporizador() {
    //Repetimos coda segundo
    indicadorIntervalo = setInterval(() => {
        if(stop==false){
            // ¿stop es false? quito uno al contador
            cont_tiempo = --cont_tiempo;
            //compruebo que es más que 0
            if (cont_tiempo >= 0) {
                //lo pinto en el HTML
                PANTALLATIEMPO.innerText = cont_tiempo;
            } else {
                //detenemos la funcion
                clearInterval(indicadorIntervalo);
                //damos valor 0 a la variable para poder imprimir a continuacion cont_tiempo
                cont_tiempo=0;
                PANTALLATIEMPO.innerText = cont_tiempo;
                PANTALLATIEMPO.style.color="tomato";
                perder();
            }    
        }
    }, 1000); 
}
/**
 * Mensaje que se genera cuando se pierde
 *
 */
 function perder(){
    //Detenemos el Intervalo que este haciendo
    clearInterval(indicadorIntervalo);
    const TITULO ="";
    const TEXTO ="¡Has perdido! Intentalo nuevamente";
    victoria.style.display="inline-block";
    document.getElementById("img_vent").setAttribute("src","medios/img/perder.jpg");
    ganado.innerText=ganado.innerText + " " + dinero_ganado;
    ventanaModal(TEXTO);
}
/**
 * Crearemos la siguiente Ventana Modal
 *  <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="instruccion">Historial</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Hola
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
 */
 function ventanaModal(texto){
     // Creamos el primer DIV
    const CDIVPRIMERO = document.createElement('div');
    CDIVPRIMERO.classList.add('modal-dialog','modal-dialog-centered');
    //Creamos el segundo DIV
    const CDIVCONTENEDOR = document.createElement('div');
    CDIVCONTENEDOR.classList.add('modal-content');
    //Creamos el div Header
    const CDIVHEADER = document.createElement('div');
    CDIVHEADER.classList.add('modal-header');
    //Creamos h5 y boton de cerrar
    const CHEADERTITULO = document.createElement('h5');
    CHEADERTITULO.classList.add('modal-title');

    const CHEADERBOTONCERRAR = document.createElement('button');
    const CDIVBODY = document.createElement('div');
    CDIVBODY.classList.add('modal-content');
    const CDIVFOOTER = document.createElement('div');
    CDIVFOOTER.classList.add('modal-content');

    CDIVHEADER.appendChild(CHEADERTITULO);
    CDIVHEADER.appendChild(CHEADERBOTONCERRAR);
    CDIVCONTENEDOR.appendChild(CDIVHEADER);  
    CDIVCONTENEDOR.appendChild(CDIVBODY);  
    CDIVCONTENEDOR.appendChild(CDIVFOOTER);  
    CDIVPRIMERO.appendChild(CDIVCONTENEDOR);  
    PANTALLARESULTADOPOPUP.appendChild(CDIVPRIMERO);

}