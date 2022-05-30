/**
 * Funcion que Muestra las Canciones
 * Datos conseguidos por
 * XMLHTTPREQUEST - JSON - POST
 * @param {*} idioma por el que luego se mostrara el titulo de las canciones
 */
function MostrarCanciones(idioma) {
    //creo el objeto XMLHTTPREQUEST
    let xhr = new XMLHttpRequest();
    //Le doy el formato
    xhr.responseType = 'json';
    //comprobamos que la peticion a finalizado y esta completa
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //recibimos la respuesta como un objeto
            let data = xhr.response;
            for (let i = 0; i < data.length; i++) {
                const SONG = data[i];
                GenerarCardMusic(idioma, SONG);
            }
        }
    };
    //hacemos la peticion a la URL añadiendo el parametro al final seleccionado
    xhr.open('POST','././datos/songs.json',true);
    xhr.send();
}
//VARIABLES Y EJECUCION DE CODIGO
let lenguaje = 'ing';
MostrarCanciones(lenguaje);
//EVENTOS
$('input:checkbox').on('change', function(){
    if($(this).is(':checked')){
        lenguaje='esp';
        MostrarCanciones(lenguaje);
        $('.content_music').empty();
        $('#leng').html('ESPAÑOL');
    } else {
        lenguaje='ing';
        MostrarCanciones(lenguaje);
        $('.content_music').empty();
        $('#leng').html('ENGLISH');
    }
});

$('.content_music').on('click', '.card-music', function () {
    let valor = $(this).attr('song');
    $('#music_track').empty();
    $('#music_track').append(
        $("<div>").append(
            $("<audio>", {
                'controls':'',
                'name':'media'
            }).append(
                $("<source>", {
                    'src': valor,
                    'type':'audio/mpeg',
                    'id':'audio'
                })
            )
        )
    );
});