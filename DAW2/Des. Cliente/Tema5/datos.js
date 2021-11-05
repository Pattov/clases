let formulario={
    fechaFactura:document.getElementById("fecha"),
    cifEmpresa:document.getElementById("cife"),
    nombreEmpresa:document.getElementById("empresa"),
    cifCliente:document.getElementById("cifc"),
    nombreCliente:document.getElementById("cliente"),
    nombreProducto:document.getElementById("producto"),
    cantidadProducto:document.getElementById("cantidad"),
    precioProducto:document.getElementById("precio")
}
document.getElementById("obtienefactura").onclick=function() {
    let factura={
        fechaFactura:formulario.fechaFactura.value,
        cifEmpresa:formulario.cifEmpresa.value,
        nombreEmpresa:formulario.nombreEmpresa.value,
        cifCliente:formulario.cifCliente.value,
        nombreCliente:formulario.nombreCliente.value,
        nombreProducto:formulario.nombreProducto.value,
        cantidadProducto:formulario.cantidadProducto.value,
        precioProducto:formulario.precioProducto.value
    }
    localStorage.setItem("factura",JSON.stringify(factura))
}