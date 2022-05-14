/**
 * Elimina una Cookie 
 *
 * @param {*} nombre nombre de la Cookie
 */
function deleteCookie(nombre) {
    setCookies(nombre,"",0);
}
/**
 * Devuelve el valor de una Cookie
 *
 * @param {*} nombre nombre de la Cookie que queremos encontrar
 * @return {*} devuelve el valor de la Cookie
 */
function getCookie(nombre) {
    let nom = nombre+"=";
    let array = document.cookie.split(";");
    for (let i = 0; i < array.length; i++) {
        let c = array[i];
        while (c.charAt(0)==" ") {
            c = c.substring(1);
        }
        if(c.indexOf(nombre)==0){
            return c.substring(nom.length, c.length);
        }
    }
    return "";
}
/**
 * Crea una Cookie
 *
 * @param {*} nombre nombre que le queremos dar
 * @param {*} valor valor de la Cookie
 * @param {*} expiracion numero de dias en los que se vaya a conservar la Cookie
 */
function setCookies(nombre, valor, expiracion) {
    let d = new Date();
    d.setTime(d.getTime()+(expiracion*24*60*60*1000));
    let exp = "expires="+d.toUTCString();
    document.cookie = nombre+"="+valor+";"+exp;
}
/**
 *  Te permite ver todos las Cookies que esten en el navegador
 *
 */
function verCookies() {
    alert("Cookies actuales\n"+document.cookie);
}