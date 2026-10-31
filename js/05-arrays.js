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
mostrarPeliculas('Array de peliculas inicial')