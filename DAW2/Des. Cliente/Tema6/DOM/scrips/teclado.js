// capturar la imagen y sus eventos
let pelota=document.querySelector("img")
document.addEventListener("keypress", muevoBola)// keypres -> pulso la tecla y suelto

function muevoBola(evento) {
    // capturar el objeto evento

    //---------------------------------------------------------
    //---------------------------------------------------------
    //-----------S A B E R    L O S    C O D I G O S-----------
    //---------------------------------------------------------
    //---------------------------------------------------------
    // let codigoTecla=evento.keyCode;
    // let tecl=evento.key;
    // debugger;

    // Capturar posicion de la pelota

    let x = pelota.offsetLeft;
    let y = pelota.offsetTop;

    switch (evento.keyCode) {
        case 37:
            x-=5
            pelota.style.left=`${x}px`;
            break;
        case 38:
            y-=5
            pelota.style.left=`${y}px`;
            break;
        case 39:
            x+=5
            pelota.style.left=`${x}px`;
            break;
        case 40:
            y+=5
            pelota.style.left=`${y}px`;
            break;
    }
}