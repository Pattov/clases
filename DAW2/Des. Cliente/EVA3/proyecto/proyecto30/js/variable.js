const BDPREGUNTAS = [
    {
        nivel:'facil',
        pregunta: '&iquest; En qu&eacute; pa&iacute;s de Europa se encuentra el misterioso Lago de Ness&#63;',
        respuestas: ['Finlandia ','Escocia ','Austria','Dinamarca'],
        contestacion:['Incorrecto','Correcto','Incorrecto','Incorrecto'],
    },{
        nivel:'medio',
        pregunta: '&iquest; En qu&eacute; pa&iacute;s se encuentra el r&iacute;o Arkansas?',
        respuestas: ['Francia ','Paraguay ','Finlandia ','Estados Unidos '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    },{
        nivel:'facil',
        pregunta: '&iquest; Cual es la profesi&oacute;n de Mario Bross?',
        respuestas: ['Ladr&oacute;n de bancos ','Bombero ','Fontanero ','Ladr&oacute;n de champi&ntilde;ones '],
        contestacion:['Incorrecto','Incorrecto','Correcto','Incorrecto']
    },{
        nivel:'facil',
        pregunta: 'En la serie de los Simpsons &iquest;cuantos hijos tienen Homer y Marge?',
        respuestas: ['Ninguno ','5 ','1 ','3 '],
        contestacion:['Incorrecto','Incorrecto','Incorrecto','Correcto']
    }
    // ,{
    //     nivel:'facil', 
    //     nivel:'medio', 
    //     nivel:'dificil',
    //     pregunta: '&iquest;?',
    //     respuestas: ['Respuesta1 ','Respuesta2 ','Respuesta3 ','Respuesta4 '],
    //     contestacion:['Incorrecto','Incorrecto','Incorrecto','Incorrecto'],
    //     correcta: 
    // }
]
const BTNSCOMODINES= document.querySelectorAll(".comodin");
const BTNSCONTROLPARAR = document.querySelectorAll('.parar');
const BTNSCONTROLCONT = document.querySelectorAll('.continuar');
const JUGAR= document.getElementById("jugar");
const NIVELES = [
    {
        nivel:'',
        descripcion: '¿Qué dificultad eliges?'
    },
    {
        nivel:'facil',
        descripcion: 'Fácil'
    },
    {
        nivel:'medio',
        descripcion: 'Medio'
    },
    {
        nivel:'dificil',
        descripcion: 'Difícil'
    }
];
const PANTALLACOMENTARIOS= document.getElementById("pantallaMensaje");
const PANTALLAJUGADAS= document.getElementById("juego");
const PANTALLAMENU= document.getElementById("menu");
const PANTALLATIEMPO= document.getElementById("timer");
const PANTALLAPUNTOS= document.getElementById("puntos");
const PANTALLARESULTADOPOPUP= document.getElementById("resultado");
const RENDIRSE= document.getElementById("rendirse");
const SELECT= document.getElementById("select");
let comodinMitad= false;
let comodinvida= false;
let cont_tiempo=30;
let dinero_ganado=0;
let indicadorIntervalo;
let nivelElegido;
let razonPerder;
let stop=true;
const NUMMARCADO = document.querySelectorAll('.respuesta');
let respuestaCorrecta = false;