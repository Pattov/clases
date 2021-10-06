// Introducir los datos de altura y peso mediante la función prompt. 
let altura = prompt("¿Cual es tu altura? en M");
let peso = prompt("¿Cual es tu peso? en Kg");
//Validar que los datos sean numéricos.  
altura = Number(altura);
peso = Number(peso);
//Obtener el IMC  mediante una función a la que se le pasen el peso y la altura. 
//IMC = Peso (kg) / altura (m) 2 
let imc = peso/Math.pow((altura/1000),2);
//Mostrará en la consola del navegador el IMC y un texto indicando el grado de obesidad :   console.log(IMC).
switch (true) {
    case imc<18,5:
        console.log(` Su IMC es de ${imc}, clasificandolo como Peso insuficiente`);
        break;
    case imc >= 18,5 && imc < 25:
        console.log(` Su IMC es de ${imc}, clasificandolo como Normal`);
        break;
    case imc >= 25 && imc < 27:
        console.log(` Su IMC es de ${imc}, clasificandolo como SobrePeso grado I`);
        break;
    case imc >= 27 && imc < 30:
        console.log(` Su IMC es de ${imc}, clasificandolo como SobrePeso grado II`);
        break;
    case imc >= 30 && imc < 35:
        console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad I`);
        break;
    case imc >= 35 && imc < 40:
        console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad II`);
        break;
    case imc >= 40 && imc < 50:
        console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad III (mórbida)`);
        break;
    default:
        console.log(` Su IMC es de ${imc}, clasificandolo como Obesidad III (extrema)`);
        break;
}