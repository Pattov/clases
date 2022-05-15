
/**
 * Funcion que sirve para Guardar el LocalStorage
 *
 * @param {*} key string como se guarda la variable 
 * @return {*} el LocalStorage
 */
function cargarLocalStorage (key) {
    // ¿Existe nombre previo guardado en LocalStorage?
    if (LOCALSTORAGE.getItem(key) !== null) {
        // Carga la información
        return JSON.parse(LOCALSTORAGE.getItem(key));
    }
}
/**
 * Funcion q carga en el LocalStorage los registros Hechos cuando se acaba el juego:
 *      Se constestan todas las preguntas
 *      Se Planta durante el juego
 *      Se falla una pregunta
 *
 * @param {*} numeroPregunta pregunta en la que llegamos cuando suceden los sucesos 
 * @param {*} razon razon por la que se ha detenido la aplicacion
 * @param {*} nivel nivel seleccionado
 * @param {*} fechayhora fecha y hora en  la que ha ocurrido
 */
 function cargarRegistros(numeroPregunta, razon, nivel, fechayhora) {
    //A C T U A L I Z O   L A S    V A R I A B L E S  G L O B A L E S   
    registroantiguofacil = cargarLocalStorage('facil');
    registroantiguomedio = cargarLocalStorage('medio');
    registroantiguodificil = cargarLocalStorage('dificil');
    //si hay registros
    if(registroantiguofacil!=null&&nivel=='facil'){
        //incluimos los datos actualizados
        contadorNumeroRegistros = registroantiguofacil.length;
        registros = registroantiguofacil;      
    }
    if(registroantiguomedio!=null&&nivel=='medio'){
        contadorNumeroRegistros = registroantiguomedio.length;
        registros = registroantiguomedio;
    }
    if(registroantiguodificil!=null&&nivel=='dificil'){
        contadorNumeroRegistros = registroantiguodificil.length;
        registros = registroantiguodificil;
    }

    // P R E P A R A M O S   L A    V A R I A B L E  P A S A D A S   P O R   P A R A M E T R O
    // obtenemos la fecha actual con el formato d-m-Y
    let fecha = fechayhora.getDate() + '-' + ( fechayhora.getMonth() + 1 ) + '-' + fechayhora.getFullYear();
    //obtenemos la hora actual
    var hora = fechayhora.getHours() + ':' + fechayhora.getMinutes() + ':' + fechayhora.getSeconds();


    //C R E A M O S     E L     O B J E T O
    // {
    //     pregunta: 12,
    //     razon:"Abandonaste",
    //     dia: 13-05-2022,
    //     hora: 12+":"+23
    // }

    let registro = {
        pregunta: numeroPregunta,
        observaciones: razon,
        fecha: fecha,
        hora: hora
    }

    //nivel
    if(contadorNumeroRegistros<3){
        //si hay menos de tres les añadimos directamente
        //lo añadimos
        registros.push(registro);
    }else{
        //si el registro esta completo
        registros.push(registro);
        //los ordenamos - teniendo en cuenta la pregunta, la fecha y la hora
        registros = sortByKey(sortByKey(sortByKey(registros,'hora'),'fecha'),'pregunta');
        //cojemos solo los tres primeros
        registros = registros.slice(0,3);
    }
    guardarLocalStorage(nivel ,registros);

}
/**
 * Guardar en el localStorage usando Stringify para cambiar el objeto en una cadena JSON
 */
function guardarLocalStorage (nombre, valor) {
    LOCALSTORAGE.setItem(nombre, JSON.stringify(valor));
}  
/**
 *  Generamos El modal
 *  si no hay ningun Registro <p> No Hay ningún registr </p>
 *  si hay algun registro en cada nivel creara  la siguiente estructura
 *  <div>
 *      <h5><em>NIVEL NOMBRENIVEL</em></h5>
 *      <table class="table table-striped">
 *          <thead>
 *              <tr>
 *                  <th scope="col"></th>
 *                  <th scope="col">PREGUNTA LOGRADA</th>
 *                  <th scope="col">OBSERVACIONES</th>
 *                  <th scope="col">FECHA</th>
 *                  <th scope="col">HORA</th>
 *              </tr>
 *          </thead>
 *          <tbody>
 *              -- SE REPITE TANTAS VECES COMO REGISTROS HALLA:
 *              <tr>
 *                  <th scope="col">NUM_REGISTRO</th>
 *                  <td>NUM_PREGUNTA_REGISTRO</td>
 *                  <td>OBSERVACION_REGISTRO</td>
 *                  <td>FECHA_REGISTRO</td>
 *                  <td>HORA_REGISTRO</td>
 *              </tr>
 *          </tbody>
 *      </table>
 *  </div>
 *
 *
 */
function generarModalRegistros() {
    //si no hay ningun registro
    if(cargarLocalStorage('facil')==null&&cargarLocalStorage('medio')==null&&cargarLocalStorage('dificil')==null){
        const CTEXTO = document.createElement('p');
        CTEXTO.textContent="No hay ningún registro";
        MODALREGISTROS.appendChild(CTEXTO);
    } 
    //si hay registros faciles
    if(cargarLocalStorage('facil')!=null){
        let registrosFaciles = cargarLocalStorage('facil');
        //ordenamos por fecha y hora
        registrosFaciles = sortByKey(sortByKey(registrosFaciles,'hora'),'fecha');
        //ordenamos por pregunta
        registrosFaciles = sortByKey(registrosFaciles,'pregunta');
        //Si hay un registro facil
        const CDIV = document.createElement('div');    
        //preparamos el array
        const CTITULO = document.createElement('h5');
        const CTITULONEGRITA = document.createElement('em');
        CTITULONEGRITA.textContent = "NIVEL FÁCIL";  
        const CTABLA = document.createElement('table');
        CTABLA.classList.add('table','table-striped');
        const CTABLAHEAD = document.createElement('thead');
        const CTRHEAD = document.createElement('tr');
        const CTHPRIMERA = document.createElement('th');
        CTHPRIMERA.setAttribute('scope', 'col');
        CTHPRIMERA.textContent = "";
        const CTHSEGUNDA = document.createElement('th');
        CTHSEGUNDA.setAttribute('scope', 'col');
        CTHSEGUNDA.textContent = "PREGUNTA LOGRADA";
        const CTHTERCERA = document.createElement('th');
        CTHTERCERA.setAttribute('scope', 'col');
        CTHTERCERA.textContent = "OBSERVACIONES";
        const CTHCUARTA = document.createElement('th');
        CTHCUARTA.setAttribute('scope', 'col');
        CTHCUARTA.textContent = "FECHA";
        const CTHQUINTA = document.createElement('th');
        CTHQUINTA.setAttribute('scope', 'col');
        CTHQUINTA.textContent = "HORA";
        const CTABLABODY = document.createElement('tbody');
        
        for (let index = 0; index < registrosFaciles.length ; index++) {
            const CTRBODY = document.createElement('tr');
            const CTHPRIMERA = document.createElement('th');
            CTHPRIMERA.setAttribute('scope', 'col');
            CTHPRIMERA.textContent = index+1;
            const CTDSEGUNDA = document.createElement('td');
            CTDSEGUNDA.textContent = registrosFaciles[index].pregunta;
            const CTDTERCERA = document.createElement('td');
            CTDTERCERA.textContent = registrosFaciles[index].observaciones;
            const CTDCUARTA = document.createElement('td');
            CTDCUARTA.textContent = registrosFaciles[index].fecha;
            const CTDQUINTA = document.createElement('td');
            CTDQUINTA.textContent = registrosFaciles[index].hora;
            CTRBODY.appendChild(CTHPRIMERA);
            CTRBODY.appendChild(CTDSEGUNDA);
            CTRBODY.appendChild(CTDTERCERA);
            CTRBODY.appendChild(CTDCUARTA);
            CTRBODY.appendChild(CTDQUINTA);
            CTABLABODY.appendChild(CTRBODY);
            }
        CTRHEAD.appendChild(CTHPRIMERA);
        CTRHEAD.appendChild(CTHSEGUNDA);
        CTRHEAD.appendChild(CTHTERCERA);
        CTRHEAD.appendChild(CTHCUARTA);
        CTRHEAD.appendChild(CTHQUINTA);
        CTABLAHEAD.appendChild(CTRHEAD);
        CTABLA.appendChild(CTABLAHEAD);
        CTABLA.appendChild(CTABLABODY);
        CTITULO.appendChild(CTITULONEGRITA);
        CDIV.appendChild(CTITULO);
        CDIV.appendChild(CTABLA);
        MODALREGISTROS.appendChild(CDIV); 
    }
    if(cargarLocalStorage('medio')!=null){
        let registrosMedios = cargarLocalStorage('medio');
        registrosMedios = sortByKey(sortByKey(sortByKey(registrosMedios,'hora'),'fecha'),'pregunta');
        //Si hay un registro medio
        const CDIV = document.createElement('div');    
        //preparamos el array
        const CTITULO = document.createElement('h5');
        const CTITULONEGRITA = document.createElement('em');
        CTITULONEGRITA.textContent = "NIVEL MEDIO";  
        const CTABLA = document.createElement('table');
        CTABLA.classList.add('table','table-striped');
        const CTABLAHEAD = document.createElement('thead');
        const CTRHEAD = document.createElement('tr');
        const CTHPRIMERA = document.createElement('th');
        CTHPRIMERA.setAttribute('scope', 'col');
        CTHPRIMERA.textContent = "";
        const CTHSEGUNDA = document.createElement('th');
        CTHSEGUNDA.setAttribute('scope', 'col');
        CTHSEGUNDA.textContent = "PREGUNTA LOGRADA";
        const CTHTERCERA = document.createElement('th');
        CTHTERCERA.setAttribute('scope', 'col');
        CTHTERCERA.textContent = "OBSERVACIONES";
        const CTHCUARTA = document.createElement('th');
        CTHCUARTA.setAttribute('scope', 'col');
        CTHCUARTA.textContent = "FECHA";
        const CTHQUINTA = document.createElement('th');
        CTHQUINTA.setAttribute('scope', 'col');
        CTHQUINTA.textContent = "HORA";
        const CTABLABODY = document.createElement('tbody');
        
        for (let index = 0; index < registrosMedios.length ; index++) {
            const CTRBODY = document.createElement('tr');
            const CTHPRIMERA = document.createElement('th');
            CTHPRIMERA.setAttribute('scope', 'col');
            CTHPRIMERA.textContent = index+1;
            const CTDSEGUNDA = document.createElement('td');
            CTDSEGUNDA.textContent = registrosMedios[index].pregunta;
            const CTDTERCERA = document.createElement('td');
            CTDTERCERA.textContent = registrosMedios[index].observaciones;
            const CTDCUARTA = document.createElement('td');
            CTDCUARTA.textContent = registrosMedios[index].fecha;
            const CTDQUINTA = document.createElement('td');
            CTDQUINTA.textContent = registrosMedios[index].hora;
            CTRBODY.appendChild(CTHPRIMERA);
            CTRBODY.appendChild(CTDSEGUNDA);
            CTRBODY.appendChild(CTDTERCERA);
            CTRBODY.appendChild(CTDCUARTA);
            CTRBODY.appendChild(CTDQUINTA);
            CTABLABODY.appendChild(CTRBODY);
            }
        CTRHEAD.appendChild(CTHPRIMERA);
        CTRHEAD.appendChild(CTHSEGUNDA);
        CTRHEAD.appendChild(CTHTERCERA);
        CTRHEAD.appendChild(CTHCUARTA);
        CTRHEAD.appendChild(CTHQUINTA);
        CTABLAHEAD.appendChild(CTRHEAD);
        CTABLA.appendChild(CTABLAHEAD);
        CTABLA.appendChild(CTABLABODY);
        CTITULO.appendChild(CTITULONEGRITA);
        CDIV.appendChild(CTITULO);
        CDIV.appendChild(CTABLA);
        MODALREGISTROS.appendChild(CDIV); 
    }
    if(cargarLocalStorage('dificil')!=null){
        let registrosDificiles = cargarLocalStorage('dificil');
        registrosDificiles = sortByKey(sortByKey(sortByKey(registrosDificiles,'hora'),'fecha'),'pregunta');
    //Si hay un registro medio
        const CDIV = document.createElement('div');    
        //preparamos el array
        const CTITULO = document.createElement('h5');
        const CTITULONEGRITA = document.createElement('em');
        CTITULONEGRITA.textContent = "NIVEL DIFÍCIL";  
        const CTABLA = document.createElement('table');
        CTABLA.classList.add('table','table-striped');
        const CTABLAHEAD = document.createElement('thead');
        const CTRHEAD = document.createElement('tr');
        const CTHPRIMERA = document.createElement('th');
        CTHPRIMERA.setAttribute('scope', 'col');
        CTHPRIMERA.textContent = "";
        const CTHSEGUNDA = document.createElement('th');
        CTHSEGUNDA.setAttribute('scope', 'col');
        CTHSEGUNDA.textContent = "PREGUNTA LOGRADA";
        const CTHTERCERA = document.createElement('th');
        CTHTERCERA.setAttribute('scope', 'col');
        CTHTERCERA.textContent = "OBSERVACIONES";
        const CTHCUARTA = document.createElement('th');
        CTHCUARTA.setAttribute('scope', 'col');
        CTHCUARTA.textContent = "FECHA";
        const CTHQUINTA = document.createElement('th');
        CTHQUINTA.setAttribute('scope', 'col');
        CTHQUINTA.textContent = "HORA";
        const CTABLABODY = document.createElement('tbody');
        
        for (let index = 0; index < registrosDificiles.length ; index++) {
            const CTRBODY = document.createElement('tr');
            const CTHPRIMERA = document.createElement('th');
            CTHPRIMERA.setAttribute('scope', 'col');
            CTHPRIMERA.textContent = index+1;
            const CTDSEGUNDA = document.createElement('td');
            CTDSEGUNDA.textContent = registrosDificiles[index].pregunta;
            const CTDTERCERA = document.createElement('td');
            CTDTERCERA.textContent = registrosDificiles[index].observaciones;
            const CTDCUARTA = document.createElement('td');
            CTDCUARTA.textContent = registrosDificiles[index].fecha;
            const CTDQUINTA = document.createElement('td');
            CTDQUINTA.textContent = registrosDificiles[index].hora;
            CTRBODY.appendChild(CTHPRIMERA);
            CTRBODY.appendChild(CTDSEGUNDA);
            CTRBODY.appendChild(CTDTERCERA);
            CTRBODY.appendChild(CTDCUARTA);
            CTRBODY.appendChild(CTDQUINTA);
            CTABLABODY.appendChild(CTRBODY);
            }
        CTRHEAD.appendChild(CTHPRIMERA);
        CTRHEAD.appendChild(CTHSEGUNDA);
        CTRHEAD.appendChild(CTHTERCERA);
        CTRHEAD.appendChild(CTHCUARTA);
        CTRHEAD.appendChild(CTHQUINTA);
        CTABLAHEAD.appendChild(CTRHEAD);
        CTABLA.appendChild(CTABLAHEAD);
        CTABLA.appendChild(CTABLABODY);
        CTITULO.appendChild(CTITULONEGRITA);
        CDIV.appendChild(CTITULO);
        CDIV.appendChild(CTABLA);
        MODALREGISTROS.appendChild(CDIV); 
    }

}

