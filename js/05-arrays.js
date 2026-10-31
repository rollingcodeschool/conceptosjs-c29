const mostrarPeliculas = (titulo) => {
  //mostrar un array
  textoHTML += `<h2 class="my-3">${titulo}</h2>`;
  textoHTML += '<ul class= "list-group">';
  for (let i = 0; i < peliculas.length; i++) {
    textoHTML += `<li class= "list-group-item">${peliculas[i]}</li>`;
  }
  textoHTML += "</ul>";
  //mostrar el html en pantalla
  div.innerHTML = textoHTML;
};

const mostrarPeliculasOrdenadas = () => {
  //mostrar un array
  textoHTML += `<h2 class="my-3">Peliculas ordenadas</h2>`;
  //ordenar el array
  // peliculasOrdenadas.sort()// ordena de la A-Z y luego a-z
  peliculasOrdenadas.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base"}))
  console.log(peliculasOrdenadas)

  textoHTML += '<ul class= "list-group">';
  peliculasOrdenadas.forEach((item)=> textoHTML += `<li class= "list-group-item">${item}</li>` )
  textoHTML += "</ul>";
  //mostrar el html en pantalla
  div.innerHTML = textoHTML;
};

//declarar un array vacio
const colores = [];
const peliculas = [
  "Avatar",
  20,
  "Avengers: Endgame",
  "Avatar: The Way of Water",
  2026,
  "Titanic",
  "Star Wars: Episode VII - The Force Awakens",
  "Avengers: Infinity War",
  "Spider-Man: No Way Home",
  "Inside Out 2",
  "Jurassic World",
  "The Lion King",
  true,
];

console.log(colores);
console.log(peliculas);
console.log(peliculas.length); //muestra la cantidad de elementos en el array
console.log(peliculas[0]); // como acceder a una posicion del array
console.log(peliculas[peliculas.length - 1]); //accedemos al ultimo elemento del array
console.log(peliculas[50]); //esto devuelve undefined

const div = document.getElementById("pantalla");
let textoHTML = "";

//mostramos el array
mostrarPeliculas(`Array de peliculas inicial - Total peliculas: ${peliculas.length}`)

//agregar elementos en el array
peliculas.unshift(false, "Avengers: Doomsdays") //este metodo envia elementos al inicio del array
mostrarPeliculas(`Agregamos dos peliculas al inicio - Total peliculas: ${peliculas.length}`)

peliculas.push('La odisea', 2026)
mostrarPeliculas(`Agregamos dos peliculas al final del array - Total peliculas: ${peliculas.length}`)

peliculas.splice(3, 0, 'rapidos y furiosos')
mostrarPeliculas(`Agregamos una pelicula en el medio del array - Total peliculas: ${peliculas.length}`)

//como eliminar elementos del array
peliculas.shift()
mostrarPeliculas(`Eliminamos una pelicula del inicio del array - Total peliculas: ${peliculas.length}`)

peliculas.pop()
mostrarPeliculas(`Eliminamos una pelicula del final del array - Total peliculas: ${peliculas.length}`)

// peliculas.splice(3, 2) // borrar dos elementos del array
// peliculas.splice(3) // borrar todos los elementos desde la posicion 3 inclusive
peliculas.splice(3, 1)
mostrarPeliculas(`Eliminamos una pelicula del medio del array - Total peliculas: ${peliculas.length}`)

//modificar elementos del array
peliculas[5] = 'Godzilla x Kong: Supernova'
mostrarPeliculas(`Modificamos una pelicula del medio del array - Total peliculas: ${peliculas.length}`)

peliculas.splice(peliculas.length -2, 1)
mostrarPeliculas(`Eliminamos un valor booleano del array - Total peliculas: ${peliculas.length}`)

//metodos especiales para trabajar con arrays
const peliBuscada = prompt('Ingresa una pelicula')
// const peliEncontrada = peliculas.find((peli) => peli.toLowerCase() === peliBuscada.toLowerCase() )
// const peliEncontrada = peliculas.find((item) => condicion logica )
const peliEncontrada = peliculas.find((peli) => peli.toLowerCase().includes(peliBuscada.toLowerCase()) )

const peliNoEncontrada = peliculas.find((peli) => peli === 'Paranormal Activity 8' )
//nullish= false, 0, '', null, undifined
if(peliEncontrada){
  alert(`La peli ${peliEncontrada}, esta en nuestro catálogo`)
}else{
   alert(`No tenemos esa peli aún`)
}
console.log(peliEncontrada)
console.log(peliNoEncontrada)

//como funciona include
const prueba = 'Endgame'
console.log(peliculas[3].includes(prueba))
console.log(peliculas[3].includes('Infinity war'))

//cuando queremos copiar el contenido del array en uno nuevo, usamos el operador spread ...
const peliculasOrdenadas = [...peliculas]
// console.log(peliculas)
// console.log(peliculasOrdenadas)

// peliculas.push('Sonic 4')
// console.log(peliculas)
// console.log(peliculasOrdenadas)
mostrarPeliculasOrdenadas()

//filtrar valores de un array
const terminoBuscado = prompt('Ingresa la pelicula buscada').toLowerCase()

const peliculasFiltradas = peliculas.filter((pelicula)=> pelicula.toLowerCase().includes(terminoBuscado) )

console.log(peliculasFiltradas)

