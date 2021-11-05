//Declaración de clase Factura
export class Factura {
  constructor(empresa, cliente, productos, fecha) {
    this.empresa = empresa; //objeto 
    this.cliente = cliente; //objeto 
    this.productos = productos; //array
    this.IVA = 0.2;
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
export class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

