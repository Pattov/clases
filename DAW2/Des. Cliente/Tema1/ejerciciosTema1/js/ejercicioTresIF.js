let talla = prompt("Introduce la talla Europea \nXS, S, M...(Escribelo en Mayusculas)");
console.time(label);
if (talla=="XXXL" || talla=="XXL" || talla=="XL") {
    console.log(`la talla ${talla} es la talla Extragrande`);
} else if (talla=="L" ) {
    console.log(`la talla ${talla} es la talla Grande`);
} else if (talla=="M" ) {
    console.log(`la talla ${talla} es la talla Mediana`);
} else if (talla=="S" ) {
    console.log(`la talla ${talla} es la talla Pequeña`);
} else if (talla=="XS" ) {
    console.log(`la talla ${talla} es la talla Extrapequeña`);
} else {
    console.log(`Lo siento, no entra dentro de los parametros`);
}
console.timeEnd(label);