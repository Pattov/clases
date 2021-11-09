//Crear una agenda en ALN
//recoger los datos del formulario
let formulario={
    nombre:document.getElementById("nombre"),
    direccion:document.getElementById("calle"),
    poblacion:document.getElementById("pob"),
    provincia:document.getElementById("prov"),
    movil:document.getElementById("mvl"),
    telefono:document.getElementById("tel"),
    trabajo:document.getElementById("trab")
}
//declaro la funcion
document.getElementById("btnAgregar").onclick=function() {
    let elresto={
        //direccion
        direccion: {
            calle:formulario.direccion.value,
            poblacion:formulario.poblacion.value,
            provincia:formulario.provincia.value
        },
        telefono:[
            //array de telefono
            formulario.movil.value,
            formulario.telefono.value,
            formulario.trabajo.value
        ]
    }
    localStorage.setItem(formulario.nombre.value,JSON.stringify(elresto))
}

document.getElementById("btnBuscar").onclick=function () {
    array.forEach(nombre => {
        nombre = formulario.nombre.value;
        if(formulario.nombre.value == )
    });
    let elresto
    JSON.parse(localStorage.getItem(Element.nombre.value)));
}   
