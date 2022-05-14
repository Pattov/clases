

/**
 * Comprobamos si la respuesta es correcta o no
 *
 * @param {*} solucion pasamos si es Correcto o incorrecto
 * @param {*} numeroRespuestas - numero de la respuesta que vamos a comprobar
 */
function comprobarRespuesta(solucion) {
    if(solucion=='Incorrecto'){
        //Has perdido
        perder('Has fallado la pregunta',0);
    }else{
        //imprimimos que esta correcto
        PANTALLACOMENTARIOS.textContent = '¡Correcto!';
        //pintamos el premio y almacenamos el valor de la pregunta
        dinero_ganado = seleccionarPremio(num_pregunta);
        //si la respuesta es la 15 (recuerda que hemos inicializado en 0 para que vaya con el index)
        if(num_pregunta== 14){
            //Has Ganado y acabamos el programa
            ganar('Acertaste todas las preguntas', dinero_ganado);
        }
        //vamos a por la siguiente pregunta
            //ponermos a 30 el temporizador
            clearInterval(indicadorIntervalo);
            cont_tiempo=31;
            stop=false;
            //imprimimos la siguiente pregunta
            num_pregunta++;
            siguientePregunta(num_pregunta);
    }
}
/**
 * Generamos jugada una vez que doy a empezarJugada
 * 
 * @param {*} nivel pasamos el nivel seleccionado
 */
 function generarJugada(nivel) {
    PANTALLACOMENTARIOS.textContent = '¡Buena Suerte!';

    //actualizamos valor en la variable nivelElegido
    nivelElegido = nivel;
    //Generamos las 15 preguntas de la jugada
    generarPreguntas();
    //Iniciamos la Primera pregunta con el index a 0
    siguientePregunta(num_pregunta);
}
function generarPreguntas() {
    //seleccionamos todas las preguntas del nivel elegido
    preguntasPorNivel = BDPREGUNTAS.filter((pregunta)=>{
        return pregunta.nivel===nivelElegido;
    });
    //Barajo las 15 primeras
    preguntasPorNivel = shuffle(preguntasPorNivel);
}
/**
 *  Funcion que se genera con el evento cuando hacemos click en una respuesta
 *
 * @param {*} e el evento
 */
function respuestaClick(e) {
    //guardamos en la variable el valor de la respuesta donde hacemos click 
    correcionMarcada = e.target.getAttribute('respuesta');
    //comprobamos la respuesta
    comprobarRespuesta(correcionMarcada);
}

/**
 * Generamos la siguiente pregunta
 *
 * @param {*} numeroPregunta el index con la pregunta que quiero imprimir
 */
function siguientePregunta(numeroPregunta) {
    //Hacemos visibles todas las respuestas (Solo son necesarios tres porque son a los que afecta el comodin)
    pantallaRespuestaA.style.visibility = "visible";
    pantallaRespuestaB.style.visibility = "visible";
    pantallaRespuestaD.style.visibility = "visible";
    //imprimimos en pantalla la pregunta
    setTimeout(() =>{
    PANTALLACOMENTARIOS.textContent = 'Pregunta Nº '+(numeroPregunta+1)
    }, 1500);
    //reinicias Temporizador
    
    temporizador();
    //metemos en un nuevo array las preguntas encontradas con el nivel elegido
    
    //imprimimos la pregunta del array
    pantallaPregunta.innerHTML = preguntasPorNivel[numeroPregunta].pregunta;
    //barajamos el index de las respuestas para que no aparezcan en el mismo orden
    respuestas = shuffle(respuestas);
    //les asignamos un atributo con el nombre respuesta y el Valor Correcto/Incorrecto
    pantallaRespuestaA.setAttribute('respuesta',preguntasPorNivel[numeroPregunta].contestacion[respuestas[0]]);
    //imprimimos en pantalla la respuesta
    pantallaRespuestaA.innerHTML = preguntasPorNivel[numeroPregunta].respuestas[respuestas[0]];
    pantallaRespuestaB.setAttribute('respuesta',preguntasPorNivel[numeroPregunta].contestacion[respuestas[1]]);
    pantallaRespuestaB.innerHTML = preguntasPorNivel[numeroPregunta].respuestas[respuestas[1]];
    pantallaRespuestaC.setAttribute('respuesta',preguntasPorNivel[numeroPregunta].contestacion[respuestas[2]]);
    pantallaRespuestaC.innerHTML = preguntasPorNivel[numeroPregunta].respuestas[respuestas[2]];
    pantallaRespuestaD.setAttribute('respuesta',preguntasPorNivel[numeroPregunta].contestacion[respuestas[3]]);
    pantallaRespuestaD.innerHTML = preguntasPorNivel[numeroPregunta].respuestas[respuestas[3]];
    
}
//cojo el Evento donde hago click
NUMMARCADO.forEach((botonRespuesta)=>{
    botonRespuesta.addEventListener('click',respuestaClick);
})

let preguntasPorNivel;