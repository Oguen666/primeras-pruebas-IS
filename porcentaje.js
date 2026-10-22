function calcularDescuento(precio, porcentaje) {
    return precio - (precio * porcentaje / 10); // ERROR INTENCIONAL
}
module.exports = { calcularDescuento };