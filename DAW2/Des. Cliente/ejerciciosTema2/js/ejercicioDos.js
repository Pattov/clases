let numeros=[5,4,8,2,1,3,9,6,7,0];

for (let index = 0; index < numeros.length; index++) {
    let num = numeros[index];
    if(numeros[index]===index){
        console.log(num);
    }
}