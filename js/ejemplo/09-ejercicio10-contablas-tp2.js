// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingresa un número de filas'))
const columnas = parseInt(prompt('Ingresa un número de columnas'))
let celda = filas * columnas
const div = document.getElementById('pantalla')

let textoFilas = '';
textoFilas += `<table class="table table-striped">
      <tbody>`
//dibujar filas y tablas
for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    //aqui quiero dibujar 1 fila
   textoFilas += `<tr>`
    for(let indiceColumnas =0; indiceColumnas < columnas; indiceColumnas++){
          textoFilas += `<td>${celda}</td>`
        celda--
    }
   textoFilas += `</tr>`
}

textoFilas+= ` </tbody> </table>`

div.innerHTML = textoFilas;



