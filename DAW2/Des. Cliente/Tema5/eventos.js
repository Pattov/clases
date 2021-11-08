import * as clases from './factura';

//Declaro array para agregar los productos
let productos = [];

export function agregaProducto() {
    let cantidad = document.getElementById("cantidad").value;
    let precio = document.getElementById("precio").value;
    let nombre = document.getElementById("producto").value;
    let producto = new clases.Producto(nombre, precio, cantidad)
    productos.push(producto);
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("producto").value = "";
    
  }
  
export function obtieneFactura() {
    let empresa = {} //no uso clases por que no se va a instanciar
    let cliente = {} //no uso clases por que no se va a instanciar
    let factura = null;
  
    //Captura de valores de fecha, empresa y cliente
    let fecha = document.getElementById("fecha").value;
    empresa.nombre = document.getElementById("empresa").value;
    empresa.cif = document.getElementById("cife").value;
    cliente.nombre = document.getElementById("cliente").value;
    cliente.cif = document.getElementById("cifc").value
  
  
    //instancio Factura con los productos, empresa,  cliente y fecha
    factura = new clases.Factura(empresa, cliente, productos, fecha)
    factura.listadoFactura();
    factura.almacenarFactura();
    productos.length = 0; //borro el array para agregar los productos de la siguiente factura
  
  }
// export{
//     agregaProducto, obtieneFactura
// }