datos.BDPRODUCTOS.forEach((info) => {
    let item = PrecioDelProducto(info.id);
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
    CTITULO.textContent = info.nombre;
    // Precio (INPUT - PARA PODER INTRODUCIR EL TEXTO)
    const CINPUT = document.createElement('input');
    CINPUT.classList.add('precio');
    CINPUT.setAttribute('type', 'number');
    CINPUT.setAttribute('placeholder', 'PRECIO');
    CINPUT.setAttribute('marcadorPrice',info.id);
    CINPUT.setAttribute('value', item);
    CINPUT.addEventListener('input',actualizarPrecio);
    // Boton 
    const CBOTON = document.createElement('button');
    CBOTON.classList.add('btn');
    CBOTON.textContent = '+';
    CBOTON.setAttribute('marcadorCantidad', info.id);
    CBOTON.setAttribute('value', item);
    CBOTON.addEventListener('click', incluirProductoAlCarrito);
    
    // Hacemos la estructura en árbol
    CBODY.appendChild(CIMAGEN);
    CBODY.appendChild(CTITULO);
    CBODY.appendChild(CINPUT);
    CBODY.appendChild(CBOTON);
    CCONTAINER.appendChild(CBODY);
    datos.CUERPOPROD.appendChild(CCONTAINER);
});