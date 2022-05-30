function CrearBotonesCriaturas(tipo) {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
      
    fetch('././datos/capturopedia.json', requestOptions)
    .then((resp) => resp.json())
    .then((filtros)=> {
        GenerarGrupoDeBotones(tipo, filtros)      
    })
    .catch(error => console.log('error', error));
}

function CrearBotonesHemisferio(tipo) {
    var requestOptions = {
        method: 'POST',
        redirect: 'follow'
    };
      
    fetch('././datos/filtros.xml', requestOptions)
    .then((resp) => resp.text())
    .then((filtros)=> {
        const PARSER = new DOMParser();
        const XML = PARSER.parseFromString(filtros, "application/xml");
        let hemisferios = XML.getElementsByTagName("hemisferio");
        GenerarGrupoDeBotones(tipo, hemisferios);      
    })
    .catch(error => console.log('error', error));
}

function CrearBotonesMeses(tipo) {
    datos = ['ALL','MONTH'];
    GenerarGrupoDeBotones(tipo,datos);    
}

function CrearSelectMes(tipo) {
    let data = []
    let xhr = new XMLHttpRequest();
    //comprobamos que la peticion a finalizado y esta completa
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //recibimos la respuesta como un objeto
            let xml = xhr.responseXML;
            let meses = xml.getElementsByTagName("mes");
            for (let i = 0; i < meses.length; i++) {
                const MESES = meses[i];
                data.push(MESES.textContent);
            }
            GenerarSelect(tipo, data);
        }
    };
    //hacemos la peticion a la URL añadiendo el parametro al final seleccionado
    xhr.open('POST', '././datos/filtros.xml',true);
    xhr.send();
}

function MostrarCapturopedia() {
    let datos = [];
    let parte = '';
    let url = 'https://api.nookipedia.com/nh/'+criaturaElegida;

    if(elegido == 'MONTH'){
        url += '?month='+mesElegido;
    }
    
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
        if(elegido == 'ALL'){
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            //Creo una parte del objeto animal
            let animalparte = {
                imagen: '<img src=\"'+element.image_url+'\">',
                nombre: element.name,
                frase: element.catchphrases,
                Selling: element.sell_nook,
            }
            //compruebo si lo seleccionado es el hemisferio norte
            if(hemisferioElegido =='North'){
                parte = {
                    timeYear: element.north.availability_array[0].months,
                    timeMonth: element.north.availability_array[0].time,

                }
            }else if(hemisferioElegido == 'South'){
                //si es del sur extraigo
                parte = {
                    timeYear: element.south.availability_array[0].months,
                    timeMonth: element.south.availability_array[0].time,

                }
            }
            let animal = Object.assign(parte,animalparte);
            datos.push(animal);
        };
        }
        if(elegido == 'MONTH'){
            console.log(data)
            if(hemisferioElegido =='North'){
                for (let index = 0; index < data.north.length; index++) {
                    const elemento = data.north[index];
                    let animal = {
                        imagen: '<img src=\"'+elemento.image_url+'\">',
                        nombre: elemento.name,
                        frase: elemento.catchphrases,
                        Selling: elemento.sell_nook,
                        timeYear: elemento.north.availability_array[0].months,
                        timeMonth: elemento.north.availability_array[0].time,
                    }
                    datos.push(animal)
                } 
            }
            if(hemisferioElegido =='South'){
                for (let index = 0; index < data.south.length; index++) {
                    const elemento = data.south[index];
                    let animal = {
                        imagen: '<img src=\"'+elemento.image_url+'\">',
                        nombre: elemento.name,
                        frase: elemento.catchphrases,
                        Selling: elemento.sell_nook,
                        timeYear: elemento.south.availability_array[0].months,
                        timeMonth: elemento.south.availability_array[0].time,
                    }
                    datos.push(animal)
                } 
            }
        }
        // Creamos la estructura del la tabla
        table = $('#database').DataTable({
            data : datos,
            columns: [
                { data: 'imagen'},
                { data: 'nombre'},
                { data: 'timeYear'},
                { data: 'timeMonth'},
                { data: 'frase'},
                { data: 'Selling'}
            ]
        })
    })
    .catch((error) => {
    console.log(error);
    });
}

let table;
//los valores por defecto
let criaturaElegida = 'sea';
let hemisferioElegido = 'North';
let mesElegido = 'current';
let elegido = 'ALL';
CrearBotonesCriaturas('criatura');
CrearBotonesHemisferio('hemisferio');
CrearBotonesMeses('meses');
MostrarCapturopedia();


$(".cabecera_capturopedia").on( 'change', '.hemisferio', function() {
    if( $(this).is(':checked') ) {
        // Hacer algo si el checkbox ha sido seleccionado
        hemisferioElegido = $(this).attr('importante');
        console.log(hemisferioElegido);
        table.destroy();
        MostrarCapturopedia();
    }
});
$(".cabecera_capturopedia").on( 'change', '.criatura', function() {
    if( $(this).is(':checked') ) {
        // Hacer algo si el checkbox ha sido seleccionado
        criaturaElegida = $(this).attr('importante');
        table.destroy();
        MostrarCapturopedia();
    }
});
$(".cabecera_capturopedia").on( 'change', '.meses', function() {
    if( $(this).is(':checked') ) {
        // Hacer algo si el checkbox ha sido seleccionado
        elegido = $(this).attr('importante');
            if(elegido=='MONTH'){
                CrearSelectMes('month');
                table.destroy();
                MostrarCapturopedia();
            }else{
                $('#select').empty();
                table.destroy();
                MostrarCapturopedia();
                mesElegido = 'current';
            }
        }
    }
);

$('#select').on('change','#month', function() {
    //añadimos a la variable del filtro el valor escogido
    mesElegido = $(this).find(":selected").val();
    table.destroy();
    MostrarCapturopedia();
});

