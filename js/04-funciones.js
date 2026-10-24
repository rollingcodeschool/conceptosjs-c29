// funciones sin parametros
function saludar(){
    //todas las lineas de codigo que quiero que haga saludar
    alert('hola mundo 🌎')
}
//funciones con parametros
function saludarPersona(nombrePersona){
    // alert(`Hola ${nombrePersona}, bienvenido a nuestro sistema.`)
    alert("Hola " + nombrePersona + " !!")
}

//funiones que retornan un valor
function sumar(numero1, numero2){
    const resultado = numero1 + numero2
    return resultado
    // el return siempre es la ultima linea de codigo de la funcion
    // console.log(resultado)
}

//invocar a una funcion
saludar()

const nombre = prompt('ingresa tu nombre')
saludarPersona(nombre)
saludarPersona('Leandro')

const numero1 = Number(prompt('ingresa el primer número'))
const numero2 = Number(prompt('ingresa el segundo número'))

const resultado = sumar(numero1, numero2)
console.log('El resultado de la suma es: '+ resultado)