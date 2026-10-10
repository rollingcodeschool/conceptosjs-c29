// Realizar una suma de dos números:  Crear un algoritmo que permita al usuario ingresar dos números,  realizar la suma de ambos y  mostrar el resultado.

// tip: la mayor cantidad de veces las variables se declaran con const

const numero1 = parseInt(prompt("Ingresa el primer número"));
const numero2 = parseInt(prompt("Ingresa el segundo número"));
//isNaN(variable) = true si pongo un texto, false si pongo un numero
// una pregunta SI = if
/* if (condicion logica){ 
        las lineas que quiero hacer si se cumple la condicion
    }else{
        las lineas que quiero hacer si no se cumple la condicion
    }
*/
console.log(isNaN(numero1));
//operador logico NOT !, AND &&
// !true = false
// !false = true
// el contenido de la variable numero1 es un numero Y el contenido de la variable numero2 es un numero
if (!isNaN(numero1) && !isNaN(numero2)){
    const resultado = numero1 + numero2;
    console.log("El resultado es: " + resultado);
}else{
    console.log('No ingresaste un numero valido');
}


