let talla = prompt("Introduce la talla Europea \nXS, S, M...(Escribelo en Mayusculas)");
console.time(label);
switch (talla) {
    case "XXXL","XXL","XL":
        console.log(`la talla ${talla} es la talla Extragrande`);
        break;
    case "L":
        console.log(`la talla ${talla} es la talla Grande`);
        break;
    case "M":
        console.log(`la talla ${talla} es la talla Mediana`);
        break;
    case "S":
        console.log(`la talla ${talla} es la talla Pequeña`);
        break;
    case "XS":
        console.log(`la talla ${talla} es la talla Extrapequeña`);
        break;
    default:
        console.log(`Lo siento, no entra dentro de los parametros`);
        break;  
}
console.timeEnd(label);