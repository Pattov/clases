function generarJugada(nivel) {
    //creo el array con las preguntas del nivel elegido
    const PREGUNTASPORNIVEL = BDPREGUNTAS.filter((pregunta)=>{
        return pregunta.nivel===nivel;
    });
    //2022 cojo 15 y las revuelvo
    PREGUNTASPORNIVEL.forEach(pregunta => {
        //IMPRIMO PREGUNTA A PREGUNTA EN LA PANTALLA
        
        //COJO EL ELEMENTO CLIC
        //COMPRUEBO SI ES CORRECTO O NO
        //IMPRIMO
        //SIGUIENTE PREGUNTA
    });
    
}



let pantallaPregunta = document.getElementById("pregunta");
let pantallaRespuestaA = document.getElementById("respuestauno");
let pantallaRespuestaB = document.getElementById("respuestados");
let pantallaRespuestaC = document.getElementById("respuestatres");
let pantallaRespuestaD = document.getElementById("respuestacuatro");