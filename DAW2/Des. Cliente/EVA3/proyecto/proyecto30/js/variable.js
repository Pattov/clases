const JUGAR= document.getElementById("jugar");
const PANTALLAMENU= document.getElementById("menu");
const PANTALLAJUGADAS= document.getElementById("juego");
const PANTALLATIEMPO= document.getElementById("timer");
const PANTALLARESULTADOPOPUP= document.getElementById("resultado");
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
const SELECT= document.getElementById("select");
let cont_tiempo=30;
let indicadorIntervalo;
let nivelElegido;
let stop=true;
