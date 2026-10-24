/* Ejercicio: Calculadora de Descuentos en Tienda

Una tienda online necesita automatizar el cálculo final de sus ventas:
Crea una función llamada aplicarDescuento que reciba dos parámetros: el precioOriginal y el porcentajeDescuento.
- La función debe calcular el precio final aplicando la rebaja y retornar ese nuevo valor.
- Fuera de la función, simula dos compras distintas, guarda el resultado retornado en variables y muestra un mensaje en pantalla indicando cuánto debe abonar el cliente en cada caso. */

function aplicarDescuento(precioOriginal, porcentajeDescuento){
    const montoDescuento = (precioOriginal * porcentajeDescuento) / 100
    const precioFinal = precioOriginal - montoDescuento
    return precioFinal
}

//simular dos compras
const precio1 = Number(prompt('Ingresa el monto total'))
const descuento1 = Number(prompt('Ingresa el porcentaje de descuento'))
const precio2 = Number(prompt('Ingresa el monto total'))

const precioFinal1 = aplicarDescuento(precio1, descuento1)
const precioFinal2 = aplicarDescuento(precio2, 10)
console.log('El precio final de la primer venta es $'+ precioFinal1)
console.log('El precio final de la segunda venta es $'+ precioFinal2)

const totalVentas =  precioFinal1 + precioFinal2
console.log('El total de ventas fue de $'+ totalVentas)