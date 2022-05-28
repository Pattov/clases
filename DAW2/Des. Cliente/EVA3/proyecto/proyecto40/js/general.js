/**
 * Esta funcion nos permite capitalizar la primera Letra
 *
 * @param {*} str String que queremos Capitalizar
 * @return {*} el String con la primera letra en Mayuscula
 */
function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
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
    ).append(
        $("<button>", {
            'type': 'button',
            'class':'btn-close close_'+tipo,
            'aria-label': 'Close'
        }).hide()
    ); 
    options.forEach(option => {
        $("#"+tipo).append(
            $("<option>", {
                'class': tipo,
                'value':option,
                text: capitalizarPrimeraLetra(option)
            })
        )
    });

}

/* <div class="card card-music">
        <img src="https://acnhapi.com/v1/images/songs/1" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">Agente Totakeke</h5>
        </div>
    </div> */
function GenerarCardMusic(idioma, datos) {
    $('.content_music').append(
        $("<div>", {
            'class': 'card card-music',
            'song': datos.music_uri
        }).append(
            $("<img>", {
                'src': datos.image_uri,
                'class':'card-img-top'
            })
        ).append(
            $("<div>", {
                'class':'card-body card-music-'+datos.id
            })
        )
    )
    if(idioma === 'esp'){
        $(`div.card-music-${datos.id}`).append($("<h5>", {
            'class':'card-title',
            text: datos.name_EUes
        }))
    }else{
        $(`div.card-music-${datos.id}`).append($("<h5>", {
            'class':'card-title',
            text: datos.name_USen
        }))
    }
}
/**
 * <div class="btn-group tipo" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check criatura" name="btnradio criatura" id="btn_radio1" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="btn_radio1">
            <img src="img/capturopedia/Sea_Button.png">
        </label>
    </div>
 */
function GenerarGrupoDeBotones(tipo,datos) {
    $('#'+tipo).append(
        $("<div>", {
            'class': 'btn-group '+tipo,
            'role': 'group',
            'aria-label': 'Basic radio toggle button group'
        })
    )

    for (let i = 0; i < datos.length; i++) {
        const cadaBoton = datos[i];
        $(`.${tipo}`).append(
            $("<input>", {
                'type': 'radio',
                'class': 'btn-check '+tipo,
                'name': 'btnradio '+tipo,
                'id': 'btn_radio'+(i+1),
                'autocomplete': 'off',
                'value':cadaBoton.nombre
            })
        ).append(
            $("<label>", {
                'class': 'btn btn-outline-dark',
                'for': 'btn_radio'+(i+1)
            }).append(cadaBoton.imagen)
        )
    }
}