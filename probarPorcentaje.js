const { calcularDescuento } = require('./porcentaje');

const resultado = calcularDescuento(100, 10);

if (resultado === 90) {
    console.log("PRUEBA SUPERADA");
} else {
    console.log("PRUEBA FALLIDA");
}
