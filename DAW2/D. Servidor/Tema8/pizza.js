// capturar valores de radiobutton
let tamano = document.pedido.tamano.value;

//capturar valores del checkboxes
let estras = [...document.querySelectorAll("input[type=checkbos]")];
let checkVals =[]

estras.forEach(check=>{
    if(check.checked){
        checkVals.push(check.value);
    }
})

debugger;

//eventos de formularios -> charge (cambiar de estado)