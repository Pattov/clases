

// <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//     </div>
// </div>
function GenerarCard(nombre, imagen) {
    //CREAR ESTRUCTURA
    $("#listaAldeanos").append(
        $("<div>", {
            'class':'card',
            'style':'width:12rem;'
        }).append(
            $("<img>", {
                'src': imagen,
                'class':'card-img-top imgs',
                'alt': nombre
            })
        ).append(
            $("<div>", {
                'class':'card-body'
            }).append(
                $("<h5>", {
                    'class':'card-title',
                    text: nombre
                })
            )
        )
    ); 
}

/* <select id="personalidad">
    <option selected disabled>Personalidad</option>
    <option class="personalidad" value="personalidad1">Personalidad1</option>
    <option class="personalidad" value="personalidad2">Personalidad2</option>
</select> 
<button type="button" class="btn-close" aria-label="Close"></button>
*/

function GenerarSelect(tipo, options) {

    $("#select").append(
        $("<select>", {
            'id':tipo,
        }).append(
            $("<option>", {
                'selected': '',
                'disabled':'',
                text: 'Choose the '+tipo
            })
        )
    ); 
    options.forEach(option => {
        $("#"+tipo).append(
            $("<option>", {
                'class': tipo,
                'value':option,
                text: option
            })
        )
    });

}

function MostrarPersonalidad(personalidad) {
    //creo el objeto XMLHTTPREQUEST
    let xhr = new XMLHttpRequest();
    //Le doy el formato
    xhr.responseType = 'json';
    //comprobamos que la peticion a finalizado y esta completa
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //recibimos la respuesta como un objeto
            let data = xhr.response;
            //lo manejamos
            data.forEach(vill => {
                GenerarCard(vill.name, vill.image_url);
            });
        }
    };
    //hacemos la peticion a la URL añadiendo el parametro al final seleccionado
    xhr.open('GET', 'https://api.nookipedia.com/villagers?game=nh&personality='+personalidad,true);
    //introducimos en el Header la contraseña para acceder a la API
    xhr.setRequestHeader("X-API-KEY", "f66873e9-3cf3-4b56-a17b-1987afe8c3de");
    xhr.send();
}

function MostrarSelectEspecies() {
    let filtro = 'species';
    let data = [];

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch('././datos/filtros.xml', requestOptions)
    .then((resp) => resp.text())
    .then((filtros)=> {
        // https://stackoverflow.com/questions/37693982/how-to-fetch-xml-with-fetch-api
        // https://turus.ro/posts/how-to-fetch-xml-with-fetch-api
        console.log(parseXML(filtros));
        // return data.map((especie)=> {
        //     GenerarSelect(filtro, data);
        // })
    })
    .catch(error => console.log('error', error));
}

function MostrarSelectPersonalidad() {
        let filtro = 'personality';
        let data = [];

        //saco los datos del XML colgado en XMP mediante GET
        let xhr = new XMLHttpRequest();
        //comprobamos que la peticion a finalizado y esta completa
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                //recibimos la respuesta como un objeto
                let xml = xhr.responseXML;
                //extraemos todas las personalidades en un array
                let personalidades = xml.getElementsByTagName("personalidad");
                for (let i = 0; i < personalidades.length; i++) {
                    const filtroPersonalidad = personalidades[i];
                    // console.log(filtroPersonalidad.getElementsByTagName("nombre")[0].textContent);
                    data.push(filtroPersonalidad.getElementsByTagName("nombre")[0].textContent);
                }
                GenerarSelect(filtro, data);
            }
        };
        //hacemos la peticion a la URL añadiendo el parametro al final seleccionado
        xhr.open('GET', '././datos/filtros.xml',true);
        //introducimos en el Header la contraseña para acceder a la API
        xhr.send();
        
}

function MostrarTodos() {
    const url = 'https://api.nookipedia.com/villagers?game=nh';
    let request = new Request(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'f66873e9-3cf3-4b56-a17b-1987afe8c3de'
        }
    });


    fetch(url,request)
    .then((resp) => resp.json())
    .then((data)=> {
        return data.map((vill)=> {
            GenerarCard(vill.name, vill.image_url);
        })
    })
    .catch((error) => {
    console.log(error);
    });
}

let xFiltroPersonal = false;

MostrarTodos();
MostrarSelectPersonalidad();
MostrarSelectEspecies();

$('#select').on('change','#personality', function() {
    //Borramos los aldeanos pintados
    $("#listaAldeanos").empty();
    //muestro el select hecho
    MostrarPersonalidad( $(this).find(":selected").val());
    // comprobamos que el filtro de Personalidad no ha sido usado antes
    if(xFiltroPersonal == false){
        //pinto la X para poder borrar los filtros
        xFiltroPersonal = true;
        $("#select").append(
            $("<button>", {
                'type': 'button',
                'class':'btn-close cPersonality',
                'aria-label': 'Close'
            })
        );
    }
    
});

//Creamos el evento de Borrar Filtros Personalidad
$('#select').on('click', '.cPersonality' ,function() {
    //vaciamos y mostramos todos
    $("#listaAldeanos").empty();
    MostrarTodos();

    $("#personality").prop("selectedIndex", 0).val();
});
