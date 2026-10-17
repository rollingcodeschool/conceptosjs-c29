const numero1 = parseInt(prompt("Ingrese el primer número"));
const numero2 = parseInt(prompt("Ingrese el segundo número"));
const numero3 = parseInt(prompt("Ingrese el tercer número"));
if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
  if (numero1 > numero2 && numero1 > numero3) {
    alert("El primer número ingresado es el mayor de los 3 números");
  } else if (numero2 > numero1 && numero2 > numero3) {
    alert("El segundo número ingresado es el mayor de los 3 números");
  } else if (numero3 > numero1 && numero3 > numero2) {
    alert("El tercer número ingresado es el mayor de los 3 números");
  }
} else {
  alert("por favor ingrese solo números");
}
