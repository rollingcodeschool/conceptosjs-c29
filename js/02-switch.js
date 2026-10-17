// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- consultar el saldo
// 2- ingresar dinero
// 3- extraer dinero

const opcion = prompt('Ingresa una opción: 1- consultar el saldo,  2- ingresar dinero, 3- extraer dinero')
let saldo = 5000

switch(opcion){
    case '1':
    case 'saldo':
        alert('Tu saldo es: $' + saldo)
        break;
    case '2':
        const deposito = parseFloat(prompt('Ingrese el monto que desea depositar'))
        saldo = saldo + deposito // saldo += deposito
        // alert('Ingresaste $'+ deposito+ ', tu saldo actual es $'+ saldo)
        alert(`Ingresaste $ ${deposito}, tu saldo actual es $ ${saldo}`)
        break;
    case '3':
        const montoExtraer = parseFloat(prompt('Ingrese el monto que desea extraer'))
        if( montoExtraer <= saldo){
            saldo = saldo - montoExtraer // saldo -= montoExtrar
            alert(`Retiraste $${montoExtraer}, tu saldo actual es $ ${saldo}`)
        }else{
            alert('Fondos insuficientes')
        }
        break;
    default:
         alert('Opción invalida')
}


// if(opcion === 1){
//     // 1- consultar el saldo
// }else if(opcion === 2){
//     // 2- ingresar dinero
// }else if(opcion === 3){
//     // 3- extraer dinero
// }else{
//     // Ingreso un valor invalido
// }

// ejemplo de switch

/*
switch (variable)
{
    case 1:
        todas las lineas de codigo para consultar el saldo
        break;
    case 2:
        todas las lineas del caso 2
        break;
    case n:
        todas las lineas del caso n
        break;
default:
    todas las lineas de codigo cuando no se cumplio ninguno de los casos anteriores
}
*/