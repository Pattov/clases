function generarJugada(nivel) {
    
    //creo el array con las preguntas del nivel elegido
    const PREGUNTASPORNIVEL = BDPREGUNTAS.filter((pregunta)=>{
        return pregunta.nivel===nivel;
    });
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
    PREGUNTASPORNIVEL.pop();
}

function comprobarRespuesta(solucion) {
    if(solucion=='Incorrecto'){
        razonPerder = 'Has fallado la pregunta';
        perder(razonPerder,dinero_ganado);
    }else{
        PANTALLACOMENTARIOS.textContent = '¡Correcto!';
        //Siguiente nivel sustituir por
        // PANTALLACOMENTARIOS.textContent = 'Pregunta Nº';
        // PANTALLACOMENTARIOS.textContent = 'Pregunta Nº';
        respuestaCorrecta = true;
    }
    return respuestaCorrecta;
}
function respuestaClick(e) {
    
    if(numrespuestas<1){
        correcionMarcada = e.target.getAttribute('respuesta');
        dinero_ganado = pintarPremio(numrespuestas);
        numrespuestas++;
        let solucion = comprobarRespuesta(correcionMarcada);
        if(solucion === true && numrespuestas== 15){
            ganar('Acertaste todas las preguntas',dinero_ganado);
        }
    }else{
        alert("Ya Elegiste una respuesta")
    }
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
let numrespuestas = 0;
let nivelPregunta = 0;
let correcionMarcada;