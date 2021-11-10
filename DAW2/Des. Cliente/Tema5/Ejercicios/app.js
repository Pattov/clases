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
};
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
    };

    localStorage.setItem(formulario.nombre.value,JSON.stringify(elresto));    
    
}

document.getElementById("btnBuscar").onclick = function () {
    let buscado = JSON.parse(localStorage.getItem(formulario.nombre.value));
    let listado = `<h1>El resultado obtenido es: </h1>`;
    //imprimo si no existe y si existe
    if(buscado === null){
        listado += `<p>En la agenda no esta `+formulario.nombre.value+` </p>` ;
    }else{
        listado += `<p>`+formulario.nombre.value+`</p>`;
        //imprime localidad
        listado += `<p> Vive en la Calle ${buscado.direccion.calle} en la Población ${buscado.direccion.poblacion} en la Provincia ${buscado.direccion.provincia}</p>`;
        //imprime array
        (buscado.telefono).forEach((tel) => {
            if(!(tel === "")){
                listado += `<p> Puedes llamar al ${tel} </p>`;
            }
        });
    }
    document.getElementById("visor").innerHTML = listado;
};
