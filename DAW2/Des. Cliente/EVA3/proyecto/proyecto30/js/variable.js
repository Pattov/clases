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
const PANTALLAJUGADAS= document.getElementById("juego");
const PANTALLAMENU= document.getElementById("menu");
const PANTALLATIEMPO= document.getElementById("timer");
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