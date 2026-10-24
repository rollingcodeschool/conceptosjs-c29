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
  true
];

console.log(colores)
console.log(peliculas)
console.log(peliculas.length)
const div = document.getElementById('pantalla')
let textoHTML =''

//mostrar un array
textoHTML += '<ul>'
for(let i=0; i< peliculas.length; i++){
    textoHTML += `<li>${ peliculas[i] }</li>`
}
textoHTML += '</ul>'


//mostrar el html en pantalla
div.innerHTML = textoHTML