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
