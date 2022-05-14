
/**
 *
 *
 * @param {*} nombre
 * @return {*} 
 */
function cargarLocalStorage (nombre) {
    // ¿Existe nombre previo guardado en LocalStorage?
    if (LOCALSTORAGE.getItem(nombre) !== null) {
        // Carga la información
        return JSON.parse(LOCALSTORAGE.getItem(nombre));
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

function cargarRegistros(numeroPregunta, razon, nivel, fechayhora) {
    //A C T U A L I Z O   L A S    V A R I A B L E S  G L O B A L E S   
    registroantiguofacil = cargarLocalStorage('facil');
    registroantiguomedio = cargarLocalStorage('medio');
    registroantiguodificil = cargarLocalStorage('dificil');

    //si hay registros
    if(registroantiguofacil!=null){
        //incluimos los datos actualizados
        contadorNumeroRegistrosFacil = registroantiguofacil.length;
        console.log("registros "+contadorNumeroRegistrosFacil);
        registrosFaciles = registroantiguofacil;
        console.log("Registros Trabajando "+registrosFaciles);      
    }
    if(registroantiguomedio!=null){
        contadorNumeroRegistrosmedio = registroantiguomedio.length;
        registrosMedios = registroantiguomedio;
    }
    if(registroantiguodificil!=null){
        contadorNumeroRegistrosdificil = registroantiguodificil.length;
        registrosDificiles = registroantiguodificil;
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

    //nivel facil
    if(nivel=='facil'&& contadorNumeroRegistrosFacil<3){
        //si hay menos de tres les añadimos directamente
        //lo añadimos
        registrosFaciles.push(registro);
        console.log(registrosFaciles);
    }else{
        //si el registro esta completo
        registrosFaciles.push(registro);
        //los ordenamos - teniendo en cuenta la pregunta, la fecha y la hora
        registrosFaciles = sortByKey(sortByKey(sortByKey(registrosFaciles,'hora'),'fecha'),'pregunta');
        //cojemos solo los tres primeros
        registrosFaciles = registrosFaciles.slice(0,3);
    }
    guardarLocalStorage(nivel ,registrosFaciles);
    

    //nivel medio
    if(nivel=='medio' && contadorNumeroRegistrosmedio<3){
        registrosMedios.push(registro);
    }else{
        registrosMedios.push(registro);
        registrosMedios = sortByKey(sortByKey(sortByKey(registrosMedios,'hora'),'fecha'),'pregunta');
        registrosMedios = registrosMedios.slice(0,3);
    }
    guardarLocalStorage(nivel ,registrosMedios);

    if(nivel=='dificil' && contadorNumeroRegistrosdificil<3){
        registrosDificiles.push(registro);
    }else{
        registrosDificiles.push(registro);
        registrosDificiles = sortByKey(sortByKey(sortByKey(registrosDificiles,'hora'),'fecha'),'pregunta');
        registrosDificiles = registrosDificiles.slice(0,3);
    }
    guardarLocalStorage(nivel ,registrosDificiles);

}

let registrosFaciles = [];
let registrosMedios = [];
let registrosDificiles = [];
let registroantiguofacil;
let registroantiguomedio;
let registroantiguodificil;