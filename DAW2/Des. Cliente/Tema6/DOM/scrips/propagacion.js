div1.addEvebtListener("click", accion) 
div2.addEvebtListener("click", accion)
tabla.addEvebtListener("click", accion)
fila.addEvebtListener("click", accion)
celda1.addEvebtListener("click", accion)
celda2.addEvebtListener("click", accion)
celda3.addEvebtListener("click", accion)

function accion(evento){
    visor.innerHTML+=`${evento.currentTarget.tagName}<br>`
    //los tagName los guarda en mayusculas
    if(evento.currentTarget.tagName==="TABLE"){
        evento.stopPropagation()
    }
}
// Target -> de donde parte la propagacion