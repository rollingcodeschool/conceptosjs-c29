// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const filas = parseInt(prompt('Ingresa un número de filas'))
const columnas = parseInt(prompt('Ingresa un número de columnas'))
let celda = filas * columnas


for(let indiceFilas = 0; indiceFilas < filas; indiceFilas++){
    //aqui quiero dibujar 1 fila
    let textoFilas = '';
    for(let indiceColumnas =0; indiceColumnas < columnas; indiceColumnas++){
        textoFilas += celda + '\t'
        celda--
    }
    console.log(textoFilas)
}
