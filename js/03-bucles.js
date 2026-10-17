// while, do-while, for

//while = mientras

/*
while(condicion logica){
    todas las lineas de codigo que quiero repetir varias veces
    agregar una linea que haga que mi condicion se deje de cumplir en algun momento
}
*/
// let bateria = 100;

// while( bateria >0){
//     console.log('Bateria restante :'+bateria)
//     //bateria++ // bateria = bateria + 1
//     //bateria-- // bateria = bateria - 1
//     bateria = bateria - 5 // bateria = bateria - 1
// }

// do-while (hacer- mientras)

// let intentos = 5;

// do{
//  todas las lineas de codigo que quiero repetir varias veces
//     agregar una linea que haga que mi condicion se deje de cumplir en algun momento
// }while(condicion)

// do{
//     console.log('Intento N: '+intentos);
//     intentos++
// }while(intentos <= 3)


// for funciona como un while

// for(inicializamos una variable; condicion logica ; incremento o decremento de la variable ){
//     todas las lineas que quiero que ejecute el bucle
// }

for(let bateria = 100; bateria >0; bateria = bateria - 5){
    console.log('Bateria restante :'+bateria)
}