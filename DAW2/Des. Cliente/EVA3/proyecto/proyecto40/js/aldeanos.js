// <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//     </div>
// </div>
function CrearCard() {
    //CREAR ESTRUCTURA
    $('#listaAldeanos').append('div', {
            'class':'card',
            'style':'width:18rem;',
            html:'hola'
        })
}

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
    console.log('hecho');
    CrearCard;
    // CrearCard(vill.name,vill.image_url);
    $("#listaAldeanos").append($("</p>").html(`${vill.name}`));
    // $("#listaAldeanos").append(`<img src=${vill.image_url}>`)
})
})
.catch((error) => {
console.log(error);
});