// Colocar un valor al display
var numero1 = 0;
var numero2 = 0;
var operacion = '';
var concatenar = false;

function setValor(valor) {
    let valorActual = document.getElementById('display');
    if (numero1 === 0) {
        numero1 = valor;
    } else {
        numero2 = valor;
    }
    valorActual.innerText = valor;
    console.log(valor);
}

function setValorConcat(valor) {
    let valorActual = document.getElementById('display');
    if (concatenar) {
        let nuevoValor = valorActual.innerText + valor;
        numero1 = nuevoValor;
        valorActual.innerText = numero1;
    } else {
        numero2 = valor;
        valorActual.innerText = numero2;
        concatenar = true;
    }
    console.log(numero1);
}


function setOperacion(op) {
    operacion = op;
    concatenar = false;
    document.getElementById('display').innerText = operacion;
    console.log(operacion);
}

function calcular() {
    let resultado = 0;
    switch(operacion) {
        case '+':
            resultado = parseInt(numero1) + parseInt(numero2);
            break;
        case '-':
            resultado = parseInt(numero1) - parseInt(numero2);
            break;
        case 'X':
            resultado = parseInt(numero1) * parseInt(numero2);
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = parseFloat(numero1) / parseFloat(numero2);
            } else {
                console.error('Error: División por cero');
                resultado = 'Error';
            }
        case '=':
            resultado = parseInt(numero1);
            break;
    }
    setValor(resultado);
    console.log('Resultado:', resultado);
}

function limpiar() {
    numero1 = 0;
    numero2 = 0;
    operacion = '';
    concatenar = false;
    document.getElementById('display').innerText = 0;
}

function borrar() {
    let valor = document.getElementById('display');
    let valorActual = valor.innerText;

    if (valorActual.length === 1) {
        valor.innerText = valorActual;
        limpiar();
        return;
    }
    else {
        let nuevoValor = valorActual.substring(0, valorActual.length - 1);
        valor.innerText = nuevoValor;
        if (!concatenar) {
            numero1 = nuevoValor;
        }
        else {
            numero2 = nuevoValor;
        }
        document.getElementById('display').innerText = nuevoValor;
    }
}