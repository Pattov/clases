function cerrarVentana() {
    //Borrar Cookie
    deleteCookie('nivel');
    location.reload();
}
/**
 * Mensaje que se genera cuando se Gana
 *
 */

 function ganar(razon,dinero_ganado){
    //Detenemos el Intervalo que este haciendo
    clearInterval(indicadorIntervalo);
    const TITULO = 'PERDISTE';
    const DINERO = 'Has acumulado '+dinero_ganado+' €';
    ventanaModal(TITULO, razon, DINERO);
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
                PANTALLATIEMPO.style.color="tomato";
                razonPerder = 'Se ha acabado tu tiempo, El Cronometro llego a 0';
                perder(razonPerder,dinero_ganado);
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

 function ganar(razon,dinero_ganado){
    //Detenemos el Intervalo que este haciendo
    clearInterval(indicadorIntervalo);
    const TITULO = 'GANASTES';
    const DINERO = 'Has acumulado '+dinero_ganado+' €';
    ventanaModal(TITULO, razon, DINERO);
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
        //         if(amigo==false & e.target.classList.contains("icon-phone")){
            //     amigo=true;
            //     identificacion="llamar";
            //     aparecer_ventana();
            //     document.getElementById("correcto").innerText= preguntas[nivel].resp;
            // } else if(publico==false & e.target.classList.contains("icon-users")){
            //     publico=true;
            //     identificacion="audiencia";
            //     aparecer_ventana();
            //     for (var i=0;i<4;i++) {
        
            //         if(respuestas[i].innerText==preguntas[nivel].resp) barra[i].value="70";
                    
            //     } 
        
            // }else if(mitad==false & e.target.classList.contains("mitad")){
            //     mitad=true;
            //     let aux1=0;
            //     for (var i=0;i<4 & aux1<2;i++) {
                    
            //         if(respuestas[i].innerText!=preguntas[nivel].resp){
            //             aux1++;
            //             respuestas[i].innerText="";
            //         } 
                    
            //     } 
        
                
            // }  
    })
});
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
    perder(razonPerder,dinero_ganado);
}