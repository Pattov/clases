let formulario={
    nombre:document.getElementById("nombre"),
    apellido1:document.getElementById("apell1"),
    apellido2:document.getElementById("apell2"),
    domicilio:document.getElementById("dom"),
    localidad:document.getElementById("localidad")
}
document.getElementById("btn1").onclick=function() {
    let identidad={
        nombre:formulario.nombre.value,
        apel1:formulario.apellido1.value,
        apel2:formulario.apellido2.value
    }
    localStorage.setItem("nombre",JSON.stringify(identidad))
    localStorage.setItem("dom",formulario.domicilio.value)
    localStorage.setItem("localidad",formulario.localidad.value)
}

document.getElementById("btn2").onclick=function() {
    let identidad=JSON.parse(localStorage.getItem("nombre"));
    
}
