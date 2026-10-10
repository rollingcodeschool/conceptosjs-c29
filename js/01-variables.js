// Esto es un comentario simple

/* Esto es un comentario
de 
multiples lineas
*/

// crear variables (let - const - var)
// tipos de datos: primitivos, referencia

//declarar una variable
let numero = 10;
let numeroDecimal = 10.5;

console.log("Este es un mensaje de prueba");
console.log('numero')
console.log('El contenido de la variable es '+ numero)
console.log('El contenido de la variable es ', numero)
console.log(numeroDecimal)

console.log(typeof(numeroDecimal))

let nombre = 'Leandro'
console.log(typeof(nombre))

//tipo booleano true, false
let encendido = true
console.log(typeof(encendido))

let prueba
console.log(typeof(prueba))
console.log(prueba)

let vacio = null
console.log(typeof(vacio))
console.log(vacio)

//cambio el contenido de una variable
vacio = 'prueba'
console.log(vacio)

const url = "https://universe.rollingcodeschool.com/"

console.log(url)
//no puedo asignar otro valor a una variable creada con const
// url = 'otra prueba'