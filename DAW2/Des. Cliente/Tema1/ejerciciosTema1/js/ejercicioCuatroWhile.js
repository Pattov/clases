let fila1 = [1, 2, 3];
let fila2 = [4, 5, 6];
let fila3 = [7, 8, 9];
let tabla=[fila1,fila2,fila3]; 
console.time(label);
let i = 0;
let j = 0;
do {
    if(Number(i)%2!=0||Number(j)%2!=0){
        console.log(tabla[i][j]);
    }
} while (i< tabla.length || j< tabla[i].length);
console.timeEnd(label);