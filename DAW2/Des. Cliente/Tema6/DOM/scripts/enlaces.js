// let enlaces = document.links;

//coleccion de parrafos
let parrafos=[...document.getElementsByTagName("p")];

let primerLi = document.querySelector("li");
let clase1 = document.getElementsByClassName("clase1");

parrafos.forEach(element => {
    element.style.color="tomato";
    element.style.backgroundColor="black";
});

primerLi.style.border="solid orange 3px";

debugger;