function CrearBotonesCriaturas(tipo) {
    let data = [];

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

CrearBotonesCriaturas('criatura');
