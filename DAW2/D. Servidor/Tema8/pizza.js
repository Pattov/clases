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

direccion.addEventListener("blur", function () {
    if(!this.checkValidity()){
        console.log("telefono mal validado")
    }
})
nombre.addEventListener("blur", function () {
    if(!this.checkValidity()){
        console.log("nombre mal validado")
    }
})
telefono.addEventListener("blur", function () {
    if(!this.checkValidity()){
        console.log("telefono mal validado")
        if(this.validity.ValueMissing){
            console.log("Se requiere rellenar con algo");
        }else{
            if(this.validity.patternMismatch){
                console.log("patron invalido")
            }
        }
    }
})