function AplicarFiltros() {
    let filtrosAplicar='';
    if(valorEscogidoPersonalidad!=''){
        filtrosAplicar += '&personality='+valorEscogidoPersonalidad;
    }
    if(valorEscogidoEspecies!=''){
        filtrosAplicar += '&species='+valorEscogidoEspecies;
    }
    //creo el objeto XMLHTTPREQUEST
    let xhr = new XMLHttpRequest();
    //Le doy el formato
    xhr.responseType = 'json';
    //comprobamos que la peticion a finalizado y esta completa
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //recibimos la respuesta como un objeto
            let data = xhr.response;
            //si no hay resultados
            if(data.length==0){
                $('#listaAldeanos').append(
                    $("<h4>", {
                        'class': 'sinResultado',
                        text: 'requested information not found'
                    })
                )
            }else{
                //lo manejamos
                data.forEach(vill => {
                    GenerarCard(vill.name, vill.image_url);
                });
            }
        }
    };
    //hacemos la peticion a la URL añadiendo el parametro al final seleccionado
    xhr.open('GET', 'https://api.nookipedia.com/villagers?game=nh'+filtrosAplicar,true);
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
        //creo un objeto que permite parsear elementos del DOM
        const PARSER = new DOMParser();
        const XML = PARSER.parseFromString(filtros, "application/xml");
        let especies = XML.getElementsByTagName("especie");
        for (let i = 0; i < especies.length; i++) {
            const FILTROESPECIE = especies[i];
            // console.log(filtroPersonalidad.getElementsByTagName("nombre")[0].textContent);
            data.push(FILTROESPECIE.getElementsByTagName("nombre")[0].textContent);
        }
        GenerarSelect(filtro, data);      
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
                const FILTROPERSONALIDAD = personalidades[i];
                data.push(FILTROPERSONALIDAD.getElementsByTagName("nombre")[0].textContent);
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
    const URL = 'https://api.nookipedia.com/villagers?game=nh';
    let request = new Request(URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': 'f66873e9-3cf3-4b56-a17b-1987afe8c3de'
        }
    });


    fetch(URL,request)
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

let filtroPersonalidad = false;
let filtroEspecies = false;
let valorEscogidoPersonalidad = '';
let valorEscogidoEspecies = '';

MostrarTodos();
MostrarSelectEspecies();
MostrarSelectPersonalidad();


$('#select').on('change','#personality', function() {
    // comprobamos que el filtro de Personalidad no ha sido usado antes
    if(filtroPersonalidad == false){
        //pinto la X para poder borrar los filtros
        filtroPersonalidad = true;
        $(".close_personality").show();
    }
    //añadimos a la variable del filtro el valor escogido
    valorEscogidoPersonalidad = $(this).find(":selected").val()
});
$('#select').on('change','#species', function() {
    // comprobamos que el filtro de especies no ha sido usado antes
    if(filtroEspecies == false){
        //pinto la X para poder borrar los filtros
        filtroEspecies = true;
        //mostramos el boton que hemos creado pero que esta oculto
        $(".close_species").show();
    }
    //añadimos a la variable del filtro el valor escogido
    valorEscogidoEspecies= $(this).find(":selected").val()
});

//Creamos el evento de Borrar Filtros Personalidad
$('#select').on('click', '.close_personality' ,function() {
    //los dejamos como estaban
    //ocultamos el boton de cerrar filtro
    $(".close_personality").hide();
    //le damos el valor por defecto al primer option
    $("#personality").prop("selectedIndex", 0).val();
    //indicamos que el estado del filtro de Personalidad esta desactivado
    filtroPersonalidad = false;
    valorEscogidoPersonalidad = '';
});

//Creamos el evento de Borrar Filtros Personalidad
$('#select').on('click', '.close_species' ,function() {
    //los dejamos como estaban
    $(".close_species").hide();
    $("#species").prop("selectedIndex", 0).val();
    filtroEspecies = false;
    valorEscogidoEspecies = '';
});

//Cuando pulsamos Aplicar Filtros
$('.btn').on('click',()=>{
    $("#listaAldeanos").empty();
    AplicarFiltros();
})
