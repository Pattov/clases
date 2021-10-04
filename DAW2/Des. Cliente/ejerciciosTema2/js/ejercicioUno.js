//declaro el array
let numeros=[];
let ampliararr;
do {
//compruebo si es numero
try {
    //tecleo el numero
    ampliararr = prompt("Introduce el número para introducirlo en el Array\npara finalizar teclea 0 para finalizar");
    //lo meto en el array si es numero
    if (Number.MIN_VALUE>=ampliararr||ampliararr<=Number.MAX_VALUE){
        numeros.push(ampliararr);
    }
} catch (error) {
    alert("Eso no es un numero. Hasta luego");
    
}

} while (ampliararr!=0);


