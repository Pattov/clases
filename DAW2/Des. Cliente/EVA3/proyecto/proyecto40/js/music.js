function MostrarCanciones() {
    //creo el objeto XMLHTTPREQUEST
    let xhr = new XMLHttpRequest();
    //Le doy el formato
    xhr.responseType = 'json';
    //comprobamos que la peticion a finalizado y esta completa
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //recibimos la respuesta como un objeto
            let data = xhr.response;
            console.log(data);
        }
    };
    //hacemos la peticion a la URL añadiendo el parametro al final seleccionado
    xhr.open('POST', '././datos/songs.json',true);
    //introducimos en el Header la contraseña para acceder a la API
    xhr.setRequestHeader("X-API-KEY", "f66873e9-3cf3-4b56-a17b-1987afe8c3de");
    xhr.send();
}

MostrarCanciones();