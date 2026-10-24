// funciones sin parametros
function saludar(){
    //todas las lineas de codigo que quiero que haga saludar
    alert('hola mundo 🌎')
}
//funciones con parametros
function saludarPersona(nombrePersona){
    alert(`Hola ${nombrePersona}, bienvenido a nuestro sistema.`)
}

//invocar a una funcion
saludar()

const nombre = prompt('ingresa tu nombre')
saludarPersona(nombre)
saludarPersona('Leandro')
