function generarJugada(nivel) {
    
    //creo el array con las preguntas del nivel elegido
    const PREGUNTASPORNIVEL = BDPREGUNTAS.filter((pregunta)=>{
        return pregunta.nivel===nivel;
    });
    console.log(PREGUNTASPORNIVEL);
    PREGUNTASPORNIVEL.forEach(pregunta => {
        pantallaPregunta.innerHTML = pregunta.pregunta;
        pantallaRespuestaA.setAttribute('respuesta',pregunta.contestacion[0]);
        pantallaRespuestaA.innerHTML = pregunta.respuestas[0];
        pantallaRespuestaB.setAttribute('respuesta',pregunta.contestacion[1]);
        pantallaRespuestaB.innerHTML = pregunta.respuestas[1];
        pantallaRespuestaC.setAttribute('respuesta',pregunta.contestacion[2]);
        pantallaRespuestaC.innerHTML = pregunta.respuestas[2];
        pantallaRespuestaD.setAttribute('respuesta',pregunta.contestacion[3]);
        pantallaRespuestaD.innerHTML = pregunta.respuestas[3];
    });
}

function comprobarRespuesta(solucion, numeroRespuestas) {
    if(solucion=='Incorrecto'){
        dinero_ganado = 0;
        razonPerder = 'Has fallado la pregunta';
        perder(razonPerder,dinero_ganado);
    }else{
        PANTALLACOMENTARIOS.textContent = '¡Correcto!';
        dinero_ganado = seleccionarPremio(numeroRespuestas);
        if(numeroRespuestas== 14){
            ganar('Acertaste todas las preguntas',dinero_ganado);
        }
        //Siguiente nivel sustituir por
        // PANTALLACOMENTARIOS.textContent = 'Pregunta Nº';
        // PANTALLACOMENTARIOS.textContent = 'Pregunta Nº';
    }
}
function respuestaClick(e) {
        correcionMarcada = e.target.getAttribute('respuesta');
        numrespuestas++;
        comprobarRespuesta(correcionMarcada, numrespuestas);
        
    // if(numrespuestas<1){
    //     correcionMarcada = e.target.getAttribute('respuesta');
    //     numrespuestas++;
    //     let solucion = comprobarRespuesta(correcionMarcada);
    //     if(solucion === true && numrespuestas== 15){
    //         dinero_ganado = pintarPremio(numrespuestas);
    //         ganar('Acertaste todas las preguntas',dinero_ganado);
    //     }
    // }else{
    //     alert("Ya Elegiste una respuesta")
    // }
}
//cojo el Evento donde hago click
NUMMARCADO.forEach((botonRespuesta)=>{
    botonRespuesta.addEventListener('click',respuestaClick);
})

let pantallaPregunta = document.getElementById("pregunta");
let pantallaRespuestaA = document.getElementById("respuestauno");
let pantallaRespuestaB = document.getElementById("respuestados");
let pantallaRespuestaC = document.getElementById("respuestatres");
let pantallaRespuestaD = document.getElementById("respuestacuatro");
let numrespuestas = -1;
let nivelPregunta = 0;
let correcionMarcada;