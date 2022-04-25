
        document.addEventListener('DOMContentLoaded', () => {
          // Variables
          let preciopan = 1;
          let preciogalleta = 1;
          let precioarroz = 1;
          let preciopollo = 1;
          let precioqueso = 1;
          let preciopescado= 1;

          const BDPRODUCTOS = [
            {
                id: 1,
                nombre: 'Pan',
                precio: preciopan,
                imagen: '././img/pexels-pan.jpg'
            },
            {
                id: 2,
                nombre: 'Galletas',
                precio: preciogalleta,
                imagen: '././img/pexels-galletas.jpg'
            },
            {
                id: 3,
                nombre: 'Arroz',
                precio: precioarroz,
                imagen: '././img/pexels-arroz.jpg'
            },
            {
                id: 4,
                nombre: 'Pollo',
                precio: preciopollo,
                imagen: '././img/pexels-carne.jpg'
            },
            {
                id: 5,
                nombre: 'Queso',
                precio: precioqueso,
                imagen: '././img/pexels-queso.jpg'
            },
            {
                id: 6,
                nombre: 'Pescado',
                precio: preciopescado,
                imagen: '././img/pexels-pescado.jpg'
            }
        

          ];

          let carrito = [];
          const divisa = '€';
          const CUERPOPROD = document.querySelector('#items');
          const IMPRIMIRCARRO = document.querySelector('#carrito');
          const TXTTOTAL = document.querySelector('#total');
          const BTNVACIAR = document.querySelector('#boton-vaciar');

          // Funciones

          /**
          * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
          */
          function cuerpoProductos() {
              BDPRODUCTOS.forEach((info) => {
                  // Estructura de la Card Container
                  const CCONTAINER = document.createElement('div');
                  CCONTAINER.classList.add('card');
                  // Card Body
                  const CBODY = document.createElement('div');
                  CBODY.classList.add(info.nombre, 'ing-content');
                  // Card de la Imagen
                  const CIMAGEN = document.createElement('img');
                  CIMAGEN.classList.add('foto');
                  CIMAGEN.setAttribute('src', info.imagen);
                  // Titulo
                  const CTITULO = document.createElement('h4');
                  CTITULO.classList.add('card-title');
                  CTITULO.textContent = info.nombre;
                  // Boton 
                  const CBOTON = document.createElement('button');
                  CBOTON.classList.add('btn');
                  CBOTON.textContent = '+';
                  CBOTON.setAttribute('id', `btnAcum${info.nombre}`);
                  CBOTON.setAttribute('marcador', info.id);
                  CBOTON.addEventListener('click', incluirProductoAlCarrito);
                  // Precio (INPUT - PARA PODER INTRODUCIR EL TEXTO)
                  const CINPUT = document.createElement('input');
                  CINPUT.setAttribute('type', 'number');
                  CINPUT.setAttribute('id', 'precio');
                  CINPUT.setAttribute('placeholder', 'PRECIO');
                  // Hacemos la estructura en árbol
                  CBODY.appendChild(CIMAGEN);
                  CBODY.appendChild(CTITULO);
                  CBODY.appendChild(CINPUT);
                  CBODY.appendChild(CBOTON);
                  CCONTAINER.appendChild(CBODY);
                  CUERPOPROD.appendChild(CCONTAINER);
              });
          }

          /**
          * Evento para añadir un producto al carrito de la compra
          */
          function incluirProductoAlCarrito(evento) {
              // Anyadimos el Nodo a nuestro carrito
              carrito.push(evento.target.getAttribute('marcador'))
              // Actualizamos el carrito 
              imprimirCarrito();

          }

          /**
          * Dibuja todos los productos guardados en el carrito
          */
          function imprimirCarrito() {
              // Vaciamos todo el html
              IMPRIMIRCARRO.textContent = '';
              // Quitamos los duplicados
              const CARRITO_SIN_DUPLICADOS = [...new Set(carrito)];
              // Generamos los Nodos a partir de carrito
              CARRITO_SIN_DUPLICADOS.forEach((item) => {
                  // Obtenemos el item que necesitamos de la variable base de datos
                  const MIITEM = BDPRODUCTOS.filter((itemBaseDatos) => {
                      // ¿Coincide las id? Solo puede existir un caso
                      return itemBaseDatos.id === parseInt(item);
                  });
                  // Cuenta el número de veces que se repite el producto
                  const UNID_PRODUCTO = carrito.reduce((total, itemId) => {
                      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                      return itemId === item ? total += 1 : total;
                  }, 0);
                  // Creamos LA ESTRUCTURA del item del carrito
                  const CCONTAINER = document.createElement('li');
                  CCONTAINER.classList.add('list-group-item', 'text-right', 'mx-2');
                  CCONTAINER.textContent = `${UNID_PRODUCTO} x ${MIITEM[0].nombre} - ${MIITEM[0].precio}${divisa}`;
                  // Boton de borrar linea
                  const BTNLINEA = document.createElement('button');
                  BTNLINEA.classList.add('btn', 'btn-danger', 'mx-5');
                  BTNLINEA.textContent = 'X';
                  BTNLINEA.style.marginLeft = '1rem';
                  BTNLINEA.dataset.item = item;
                  BTNLINEA.addEventListener('click', borrarItemCarrito);
                  // Mezclamos nodos
                  CCONTAINER.appendChild(BTNLINEA);
                  IMPRIMIRCARRO.appendChild(CCONTAINER);
              });
             // Renderizamos el precio total en el HTML
             TXTTOTAL.textContent = calcularTotal();
          }

          /**
          * Evento para borrar un elemento del carrito
          */
          function borrarItemCarrito(evento) {
              // Obtenemos el producto ID que hay en el boton pulsado
              const IDBOTON = evento.target.dataset.item;
              // Borramos todos los productos
              carrito = carrito.filter((carritoId) => {
                  return carritoId !== IDBOTON;
              });
              // volvemos a renderizar
              imprimirCarrito();
          }

          /**
           * Calcula el precio total teniendo en cuenta los productos repetidos
           */
          function calcularTotal() {
              // Recorremos el array del carrito 
              return carrito.reduce((total, item) => {
                  // De cada elemento obtenemos su precio
                  const MIITEM = BDPRODUCTOS.filter((itemBaseDatos) => {
                      return itemBaseDatos.id === parseInt(item);
                  });
                  // Los sumamos al total
                  return total + MIITEM[0].precio;
              }, 0).toFixed(2);
          }

          /**
          * Varia el carrito y vuelve a dibujarlo
          */
          function vaciarCarrito() {
              // Limpiamos los productos guardados
              carrito = [];
              // Renderizamos los cambios
              imprimirCarrito();
          }

          // Eventos
          BTNVACIAR.addEventListener('click', vaciarCarrito);

          // Inicio
          cuerpoProductos();
          imprimirCarrito();
        });