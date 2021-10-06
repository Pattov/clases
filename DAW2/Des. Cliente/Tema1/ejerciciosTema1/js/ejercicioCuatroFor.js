let fila1 = [1, 2, 3];
let fila2 = [4, 5, 6];
let fila3 = [7, 8, 9];
let tabla=[fila1,fila2,fila3]; 
console.time(label);
for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
        if(Number(i)%2!=0||Number(j)%2!=0){
            console.log(tabla[i][j]);
        }
    }
    

}
console.timeEnd(label);