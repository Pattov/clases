/**
 * Cerramos el juego y Borramos el nivel
 *
 */
function cerrarVentana() {
    //Borrar Cookie
    deleteCookie('nivel');
    location.reload();
}
/**
 * Mensaje que se genera cuando se Gana
 * @param {*} razon - Indicamos la razón por la que perdemos
 * @param {*} dinero_ganado - Acumulador de los premios conseguidos
 */

 function ganar(razon,dinero_ganado){
    //Detenemos el Intervalo que este haciendo
    clearInterval(indicadorIntervalo);
    const TITULO = 'GANASTES';
    const DINERO = 'Has obtenido '+dinero_ganado+' €';
    ventanaModal(TITULO, razon, DINERO);
}
/**
 * Reordena de forma aleatoria los elementos del array
 *
 * @param {*} array que quiero barajar
 * @return {*} array aleatorio
 */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
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
                PANTALLATIEMPO.style.color="red";
                razonPerder = 'Se ha acabado tu tiempo, El Cronometro llego a 0';
                perder(razonPerder,0);
            }    
        }
    }, 1000); 
}
/**
 * Mensaje que se genera cuando se pierde
 *
 * @param {*} razon - Indicamos la razón por la que perdemos
 * @param {*} dinero_ganado - Acumulador de los premios conseguidos
 */

 function perder(razon,dinero_ganado){
    //Detenemos el Intervalo que este haciendo
    clearInterval(indicadorIntervalo);
    const TITULO = 'PERDISTE';
    const DINERO = 'Te llevas '+dinero_ganado+' €';
    ventanaModal(TITULO, razon, DINERO);
}

/**
 * Selecciona el Premio en el Html
 *
 * @param {*} numero que queremos seleccionar
 * @return {*} el valor que tiene en el html
 */
 function seleccionarPremio(numero) {
    let valor;
    //pinta en pantalla el p seleccionado
    PANTALLAPUNTOS.children[numero].setAttribute('class','conseguido')
    //cojemos el valor que tiene el valor pintado
    valor = PANTALLAPUNTOS.children[numero].textContent;
    //devuelvo el valor quitando el signo €
    return valor.substring(0, valor.indexOf('€'));
}
/**
 * Generamos la ventana modal con la solucion del juego
 *  Ganaste - Has acumulado x€/  Perdiste - X razón
 * con la siguiente estructura
 *  <div class="contenedor-modal" visibility: visible;>
 *      <div class="ventana-modal">
 *          <h1>Perdiste</h1>
 *          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et itaque delectus quo, atque repellat? Doloremque eum repudiandae ea iure. Nesciunt vitae ipsam illum molestias, placeat consequatur corrupti. Ducimus, inventore!</p>
 *          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="Cerrar()">Terminar Juego</button>
 *      </div>
 *  </div>
 * @param {*} solucion Pasamos como parametro si se Gana/Pierde
 * @param {*} texto Razón
 * @param {*} dineroAcumulado dinero Ganado con el que acabamos la partida
 */
 function ventanaModal(solucion, texto, dineroAcumulado){
     // Creamos el primer DIV con el contenedor modal
    const CCONTENEDORMODAL = document.createElement('div');
    CCONTENEDORMODAL.classList.add('contenedor-modal');
    //Creamos el segundo DIV
    const CMODAL = document.createElement('div');
    CMODAL.classList.add('ventana-modal');
    const CTITULO = document.createElement('h1');
    CTITULO.textContent = solucion;
    const CTEXTO = document.createElement('p');
    CTEXTO.textContent = texto;
    const CDINERO = document.createElement('p');
    CDINERO.textContent = dineroAcumulado;
    const CBOTON = document.createElement('button');
    CBOTON.setAttribute('type', 'button');
    CBOTON.classList.add('btn','btn-secondary');
    CBOTON.textContent = 'Terminar Juego';
    CBOTON.addEventListener('click', cerrarVentana);
    //Generamos la estructura HTML
    CMODAL.appendChild(CTITULO);  
    CMODAL.appendChild(CTEXTO);  
    CMODAL.appendChild(CDINERO);  
    CMODAL.appendChild(CBOTON);  
    CCONTENEDORMODAL.appendChild(CMODAL);  
    PANTALLARESULTADOPOPUP.appendChild(CCONTENEDORMODAL);
}


// Eventos Botones
BTNSCOMODINES.forEach(boton => {
    boton.addEventListener('click',(e) => {
        e.target.setAttribute('disabled','');
        //si comodin no se ha usado y donde se ha hecho el evento contiene la clase mitad
        if(comodinMitad==false & e.target.classList.contains("mitad")){
            //comodin usado
            comodinMitad=true;
            //borramos 2 respuestas que sean incorrectas
            let paseporA = false;
            let paseporB = false;
            while (incorrecto!=0) {
                if(pantallaRespuestaA.getAttribute('respuesta')==='Incorrecto'&&paseporA==false){
                    //si la es Incorrecta Borro
                    paseporA = true;
                    --incorrecto;
                    pantallaRespuestaA.style.visibility = "hidden";
                }else if(pantallaRespuestaB.getAttribute('respuesta')==='Incorrecto'&&paseporB==false){
                    paseporB = true;
                    console.log("le respuesta B es Incorrectta");
                    --incorrecto;
                    pantallaRespuestaB.style.visibility = "hidden";
                }else if(pantallaRespuestaD.getAttribute('respuesta')==='Incorrecto'){
                    console.log("le respuesta D es Incorrectta");
                    --incorrecto;
                    pantallaRespuestaD.style.visibility = "hidden";
                }
                //no es necesario poner la C por que nunca va a llegar a más opciones
            }
            
        } 
        
        //si comodin no se ha usado y donde se ha hecho el evento contiene la clase siguiente
        if(comodinSiguiente==false & e.target.classList.contains("siguiente")){
            //comodin usado
            comodinSiguiente=true;
            //pintamos el premio
            seleccionarPremio(num_pregunta);
            //Reinicio temporizador
            clearInterval(indicadorIntervalo);
            cont_tiempo=31;
            stop=false;
            //imprimes la siguiente pregunta
            num_pregunta++;
            PANTALLACOMENTARIOS.textContent = 'Pregunta Nº '+(num_pregunta+1)
            siguientePregunta(num_pregunta);
        } 
    })
});
//botones para continuar con el contador o parar
BTNSCONTROLCONT.forEach(boton => {
    boton.addEventListener('click',() => {
        stop=false;
    })
});
BTNSCONTROLPARAR.forEach(boton => {
    boton.addEventListener('click',() => {
        stop=true;
    })
});

//Botones para rendirse o terminar el juego
RENDIRSE.onclick=()=>{
    razonPerder='Te Rendiste';
    perder(razonPerder,0);
}
//Boton evento teclado
window.addEventListener("keydown", (event)=>{
    if(event.key==32&&stop==false){
        stop=true
    }
    if(event.key==32&&stop==true){
        stop=false
    }
},false);