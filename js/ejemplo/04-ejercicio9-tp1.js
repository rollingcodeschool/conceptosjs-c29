/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/
// hola
const frase = prompt('Ingresa una frase de hasta 5 caracteres').toLocaleLowerCase()

console.log(frase.toUpperCase()) // muestra el contenido de frase en mayusculas
console.log(frase.toLocaleLowerCase()) // muestra el contenido de frase en minusculas

// console.log(frase.length)
// console.log(frase.charAt(0))

// A == B verifica los valores 1 == '1'
// A === B verifica los valores como el tipo de dato sea igual   1 === '1'
// A !== B estrictamente distinto ! = =

if(frase.charAt(0) === 'a' || frase.charAt(0) === 'e' || frase.charAt(0) === 'i' || frase.charAt(0) === 'o' || frase.charAt(0) === 'u'){
    console.log(frase.charAt(0))
    document.writeln
}
if(frase.charAt(1) === 'a' || frase.charAt(1) === 'e' || frase.charAt(1) === 'i' || frase.charAt(1) === 'o' || frase.charAt(1) === 'u'){
    console.log(frase.charAt(1))
}
if(frase.charAt(2) === 'a' || frase.charAt(2) === 'e' || frase.charAt(2) === 'i' || frase.charAt(2) === 'o' || frase.charAt(2) === 'u'){
    console.log(frase.charAt(2))
}
if(frase.charAt(3) === 'a' || frase.charAt(3) === 'e' || frase.charAt(3) === 'i' || frase.charAt(3) === 'o' || frase.charAt(3) === 'u'){
    console.log(frase.charAt(3))
}
if(frase.charAt(4) === 'a' || frase.charAt(4) === 'e' || frase.charAt(4) === 'i' || frase.charAt(4) === 'o' || frase.charAt(4) === 'u'){
    console.log(frase.charAt(4))
}