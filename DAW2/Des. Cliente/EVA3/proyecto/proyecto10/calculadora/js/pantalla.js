//clase que maneja todas las funciones que se muestran en Pantalla
class Pantalla {
    constructor() {
        this.resultadoPantalla = resultadoPantalla;
        this.operacionPantalla = operacionPantalla;
        this.calculador = new Calculadora();
        this.tipooperacion = undefined;
        this.resultado = '';
        this.operacion = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.operacionPantalla = '';
        this.resultadoPantalla = '';
        this.tipooperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipooperacion !== 'igual' && this.calcular();
        this.tipooperacion = tipo;
        this.operacion = this.resultado || this.operacion;
        this.resultado = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        this.resultado = this.resultado + numero;
        console.log(resultadoPantalla);
        console.log(operacionPantalla);
        if(numero === '.' || this.resultado.includes('.')) return
        this.resultado = this.resultado.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.resultadoPantalla.textContent = this.resultado;
        this.operacionPantalla.textContent = this.operacion;
    }

    calcular() {
        const operacion = parseFloat(this.operacion);
        const resultado = parseFloat(this.resultado);

        if( isNaN(resultado)  || isNaN(operacion) ) return
        this.resultado = this.calculador[this.tipooperacion](operacion, resultado);
    }
}