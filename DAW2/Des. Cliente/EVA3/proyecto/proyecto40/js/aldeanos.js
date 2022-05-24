// <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//     </div>
// </div>
function CrearCard(nombre, imagen) {
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
function MostrarPersonalidad(personalidad) {
    const url = 'https://api.nookipedia.com/villagers?game=nh&personality='+personalidad;
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
        console.log(data)
    return data.map((vill)=> {
        CrearCard(vill.name, vill.image_url);
    })
    })
    .catch((error) => {
    console.log(error);
    });
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
        console.log(data)
    return data.map((vill)=> {
        CrearCard(vill.name, vill.image_url);
    })
    })
    .catch((error) => {
    console.log(error);
    });
}


$( "#personalidad" ).change((e)=>{

}
)



// MostrarTodos();