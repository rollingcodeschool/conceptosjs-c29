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
    actores: ['Robert Downey Jr.', 'Patrick Stewart', 'Chris Evans']
    //metodos
}

const cancion = {} //objeto vacio

//mostrar el objeto
console.log(cancion)
console.log(pelicula)
const peliculas= []
console.log(typeof(peliculas))
console.log(typeof(pelicula))

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

div.innerHTML = textoHTML