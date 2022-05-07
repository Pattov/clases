const JUGAR= document.getElementById("jugar");
const PANTALLAMENU= document.getElementById("menu");
const PANTALLAJUGADAS= document.getElementById("juego");
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
let nivelElegido;