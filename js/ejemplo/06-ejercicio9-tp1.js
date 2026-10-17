/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/
// hola = 4
const frase = prompt('Ingresa una frase').toLocaleLowerCase()
console.log(frase)
for(let caracter = 0; caracter < frase.length; caracter++){

    if(frase.charAt(caracter) === 'a' || frase.charAt(caracter) === 'e' || frase.charAt(caracter) === 'i' || frase.charAt(caracter) === 'o' || frase.charAt(caracter) === 'u'){
        console.log(frase.charAt(caracter))
    }

}

