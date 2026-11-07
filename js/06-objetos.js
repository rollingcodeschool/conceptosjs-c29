const mostrar= ()=>{
    let texto = `<h2>Pelicula: ${pelicula.nombre} </h2>`
    for(let clave in pelicula){
        if( typeof(pelicula[clave]) !== 'function'){
            texto += `<p>${clave}: ${pelicula[clave]} </p>`
        }
    }
    return texto
}
// auto -> propiedades: precio, color, marca, 
// auto -> metodo: arrancar(), detener(), actualizarPrecio(nuevoPrecio)

//notacion literal
// objeto con datos
const pelicula = {
    // propiedades
    // clave: valor
    nombre: 'Avengers: Doomsday',
    cod: 123, 
    duracion: '2h 45m',
    fecha: '17 de diciembre de 2026',
    anioEstreno: 2026,
    estado :false,
    actores: ['Robert Downey Jr.', 'Patrick Stewart', 'Chris Evans'],
    //metodos
    reproducir: function () {
        console.log(this)//devuelve objeto pelicula
        console.log(`reproduciendo pelicula ▶️ ${this.nombre} - cod: ${this.cod}`)
    },
    detener: ()=>{
        console.log(this)// devuelve el objeto window
        console.log('la peli se detuvo ⏹️')
    }
}

const cancion = {} //objeto vacio

//mostrar el objeto
console.log(this)
console.log(cancion)
console.log(pelicula)
const peliculas= []
console.log(typeof(peliculas))
console.log(typeof(pelicula))
let prueba = 124
console.log(typeof('hola mundo'))
console.log(typeof(pelicula.reproducir))


const div = document.getElementById('pantalla')

div.innerHTML = pelicula

//como accedo a las propiedades de mi objeto
console.log(pelicula.nombre)
let textoHTML = ''
textoHTML += `<p>Pelicula: ${pelicula.nombre}</p>`
textoHTML += `<p>Fecha de estreno: ${ pelicula['fecha'] }</p>`
textoHTML += `<p>Fecha de estreno: ${ pelicula['FEcha'] }</p>`

//agregar propieades en un objeto
pelicula.tipo = '3D'
textoHTML += `<p>Tipo de pelicula: ${pelicula.tipo}</p>`

//modificar o actualziar propiedad de un objeto
pelicula.tipo = '2D'
textoHTML += `<p>Tipo de pelicula: ${pelicula.tipo}</p>`

//como borrar una propiedad del objeto
delete pelicula.actores

//usar los métodos del objeto pelicula
pelicula.reproducir()

pelicula.detener()

div.innerHTML = textoHTML + mostrar()

