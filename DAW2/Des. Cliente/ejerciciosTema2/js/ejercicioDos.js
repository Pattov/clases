let numeros=[5,4,8,2,1,3,9,6,7,0];
let contador=0;
do{
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]==i){
            console.log(i);
            contador++;
        }
        if(contador==numeros.length){
            break;
        }
    }
} while (true);