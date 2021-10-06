let resto = 0;
let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

do{
    let numero = prompt("Introduce el NIF correspondiente sin la letra");
    //Tener en cuenta que prompt devuelve un string
    numero=Number(numero);
    //Comprobar que el número está entre 0 y 99999999
    if (numero>=0&&numero<=99999999) {
        //Calcula el resto de la división entera del número de DNI y el número 23
        try {
            resto = numero %23;
            let letra = letras[resto];
            alert(`El DNI completo es ${numero}-${letra}`);
        } catch (error) {
            alert("Número erroneo");
        }
    } 
}while (numero != undefined);