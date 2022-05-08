function cambiar_pregunta(p,r){ //funcion para cambiar la pregunta p=pregunta r=array con las respuestas
    pregunta.innerText=p;
    
    for (var i=0;i<4;i++) {
        respuestas[i].innerText=r[i];
    }          
    //iniciamos contador
    cont_tiempo=31; 
    clearInterval(indicadorIntervalo);
}

// btn_comodin.onclick= ()=>{
    
//     // ventana.style.transform="scale(0)";
//     // document.getElementById(identificacion).style.display="none";
      
//     // if(identificacion=="resp_correcta"){
        
//     //     cambiar_pregunta(preguntas[nivel].p,preguntas[nivel].op());
        
//     // }
//     temporizador();  
        
// }



var pregunta = document.getElementById("pregunta");
var respuestas = document.getElementsByClassName("respuesta");
const btn_comodin= document.getElementById("seguir");