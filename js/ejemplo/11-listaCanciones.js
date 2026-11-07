/*
quiero que el usuario cargue canciones en una lista y luego quiero mostrar esa lista por pantalla
titulo
artista
anio
*/
const canciones = [];

do {
  const titulo = prompt("Ingresa el titulo de la canción");
  const artista = prompt("Ingresa el artista");
  const anio = prompt("Ingresa el año de la canción");

  //crear el objeto cancion
  const cancion = {
    titulo: titulo,
    artista,
    anio,
  };

  canciones.push(cancion);
} while (confirm("¿Quieres cargar otra canción?"));

console.log(canciones);
