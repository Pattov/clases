let numeros=[5,4,8,2,1,3,9,6,7,0];
let contador=0;
do{
    for (let i = 0; i < numeros.length; i++) {      
 
    for (let j = 0; j < numeros.length; j++) {
        if(numeros[j]==i){
            console.log(numeros[j]);
            contador++;
        }
        
    }
    }
} while (contador<numeros.length);