
jugar.addEventListener("click", () => {
    jugar.classList.add("desaparecer");
    logo.classList.add("animacionLogo");
    jugar.style.display="none";

    setInterval(() => {
        logo.style.display="none";
        // bloque_juego.classList.add("comenzar");

        //temporizador
        stop=false;

        
    }, 2000);
        temporizador();

})
const jugar= document.getElementById("jugar");
const logo= document.getElementById("logo");