// Introducir los datos de altura y peso mediante la función prompt. 
let altura = prompt("¿Cual es tu altura? en cm");
let peso = prompt("¿Cual es tu peso? en Kg");
//Validar que los datos sean numéricos.  
altura = Number(altura);
peso = Number(peso);
//Obtener el IMC  mediante una función a la que se le pasen el peso y la altura. 
//IMC = Peso (kg) / altura (m) 2 
let imc = peso/Math.pow((altura/1000),2);
//Mostrará en la consola del navegador el IMC y un texto indicando el grado de obesidad :   console.log(IMC).
if(imc<18,5){
    console.log(` Su IMC es de ${imc}, clasificandolo como Peso insuficiente`);
} else if (indice >= 18,5 && indice < 25) {
    console.log(` Su IMC es de ${imc}, clasificandolo como Normal`);
} else if (indice >= 25 && indice < 27) {
    console.log(` Su IMC es de ${imc}, clasificandolo como SobrePeso grado I`);
} else if (indice >= 27 && indice < 30) {
    console.log(` Su IMC es de ${imc}, clasificandolo como SobrePeso grado II`);
} else if (indice >= 30 && indice < 35) {
    console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad I`);
} else if (indice >= 35 && indice < 40) {
    console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad II`);
} else if (indice >= 40 && indice < 50) {
    console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad III (mórbida)`);
} else{
    console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad III (extrema)`);
}