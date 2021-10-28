function agregaProducto() {
  let cantidad = document.getElementById("cantidad").value;
  let precio = document.getElementById("precio").value;
  let nombre = document.getElementById("producto").value;
  let producto = new Producto(nombre, precio, cantidad);
  productos.push(producto);
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("producto").value = "";
}

function obtieneFactura() {
  let empresa = null; //no uso clases por que no se va a instanciar
  let cliente = null; //no uso clases por que no se va a instanciar
  let factura = null;

  //Captura de valores de fecha, empresa y cliente
  let fecha = document.getElementById("fecha").value;
  let nombreE = document.getElementById("empresa").value;
  let cifEm = document.getElementById("cife").value;
  let nombreC = document.getElementById("cliente").value;
  let cifC = document.getElementById("cifc").value


  //instancio Factura con los productos, empresa,  cliente y fecha
  factura = new Factura(empresa, cliente, productos, fecha);
  factura.listadoFactura();
  productos.length = 0; //borro el array para agregar los productos de la siguiente factura
  // instancio la empresa
  if(validar(cifEm)){
    empresa = new Empresa(nombreE, cifEm);
  }else{
    alert("NIF no valido");
  }
  if(validar(cifC)){
    cliente = new Cliente(nombreE, cifEm);
  }else{
    alert("NIF no valido");
  }
}

function validar(cadena) {
  let nif = /\b([A-Ba-b]||[0-9])\d{7}\w\b/;
  return nif.test(cadena);
}
//Declaración de clase Factura
class Factura {
  constructor(empresa, cliente, productos, fecha) {
    this.empresa = empresa; //objeto 
    this.cliente = cliente; //objeto 
    this.productos = productos; //array
    this.IVA = 0.21;
    this.fecha = fecha;//string
  }
  importeTotal() {
    let acum = 0;
    this.productos.forEach(producto => { 
      acum += producto.cantidad * producto.precio;
      // debugger;
    });
    return acum;
  }
  listadoFactura() {
    let listado = `<p>Empresa: ${this.empresa.nombre}   CIF:${this.empresa.cif}</p>`;
    listado += `<p>Cliente: ${this.cliente.nombre}   CIF:${this.cliente.cif}</p>`;

    this.productos.forEach((producto) => {
      listado += `<li>Descripcion: ${producto.nombre} ${producto.cantidad
        }  X  ${producto.precio} = ${producto.cantidad * producto.precio}</li>`;
    });
    listado += `
    <p>Importe sin IVA: ${this.importeTotal()}  
    importe con IVA: ${this.importeTotal() * this.IVA + this.importeTotal()
      } </p>`;

    document.getElementById("visor").innerHTML = listado;
    
  }
}

//Declaración de clase Producto
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
//Empresa
class Empresa {
  constructor(nombre, nif) {
      this.nombree = nombre;
      this.nif = nif;
  }
}
//cliente
class Cliente {
    constructor(nombre, cif) {
      this.nombree = nombre;
      this.cif =cif;
    }
}

//Declaro array para agregar los productos
let productos = [];

//Declaración de eventos
document.getElementById("agregaproducto").onclick = agregaProducto;
document.getElementById("obtienefactura").onclick = obtieneFactura;
