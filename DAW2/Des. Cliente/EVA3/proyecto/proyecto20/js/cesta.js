

//Declaración de clase Cesta
export class Cesta {
    
    constructor(descripcion, precio, cantidad) {
      this.producto = producto; //objeto 
      this.Cestas = Cestas; //array
    }
    importeTotal() {
      let acum = 0;
      this.Cestas.forEach(Cesta => {
        acum += Cesta.cantidad * Cesta.precio;
        // debugger;
      });
      return acum;
    }
    listadoCesta() {
      let listado = `<p>Empresa: ${this.empresa.nombre}   CIF:${this.empresa.cif}</p>`;
      listado += `<p>Cliente: ${this.cliente.nombre}   CIF:${this.cliente.cif}</p>`;
  
      this.Cestas.forEach((Cesta) => {
        listado += `<li>Descripcion: ${Cesta.nombre} ${Cesta.cantidad
          }  X  ${Cesta.precio} = ${Cesta.cantidad * Cesta.precio}</li>`;
      });
      listado += `
      <p>Importe sin IVA: ${this.importeTotal()}  
      importe con IVA: ${this.importeTotal() * this.IVA + this.importeTotal()
        } </p>`;
  
      document.getElementById("visor").innerHTML = listado;
    }
    almacenarCesta(){
      localStorage.setItem("Cesta",JSON.stringify(Cesta));
    }
  }

//Declaración de clase Producto
export class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }