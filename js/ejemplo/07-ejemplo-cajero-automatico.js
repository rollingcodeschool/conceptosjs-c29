// Cree un programa al estilo de un cajero automatico con las siguientes opciones:
// 1- consultar el saldo
// 2- ingresar dinero
// 3- extraer dinero

let saldo = 5000

do{
    const opcion = prompt('Ingresa una opción: 1- consultar el saldo,  2- ingresar dinero, 3- extraer dinero')
   
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
}while(confirm('¿Quieres realizar otra operación?'))



