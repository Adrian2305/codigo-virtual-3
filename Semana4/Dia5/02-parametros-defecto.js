// Funciones con parámetros por defecto

function trinomioCuadrado(a, b, c) {
  /* Este if solo se cumple si los valores de a, b y c son números */
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let rpta = a * a * a + 3 * a * a * b + 3 * a * b * b + b * b * b;
    return rpta;
  } else {
    console.error("Los datos proporcionados no son correctos");
    return 0;
  }
}
/**
 * Función que recibe un arreglo de nobmres y un nombre a buscar. si el algoritmo encuentra
 * el nombre buscado dentro del arreglo, retorna true, en caso contrario retorna false
 * @param {array} nombres
 * @param {String} busqueda
 * @returns {boolean}
 */
let resultado = trinomioCuadrado(2, 4, 8);
console.log(resultado);

function buscarnombre(nombres = [], busqueda) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === busqueda) {
      /*La sentencia return en una función no solo retorna un valor sino que también hace que
      la función deje de ejecutarse en esa sentencia, no importa si está dentro de un for,white
      if,etc. en otras palabras es como un ;break;*/
      return true;
    }
  }
}

/* Funcion NaN

Es una función que devuelve TRUE si el valor que tiene dentro -No es un número.
Es una función que devuelve FALSE si el valor que tiene dentro -No es un número.
*/

// NotANumber

console.log(isNaN(5));
console.log(isNaN("TEXTO"));


/*
let nombres = ["martin", "jaime", "anita", "paola", "daniel"];
let resultadobusqueda = buscarnombre(nombres, "anita");
console.log(resultadobusqueda);

function buscarnombre(arreglonombres, busqueda, posicioninicial = 0) {
  for (let i = posicioninicial; i < arreglonombres.length; i++) {}
}
let nombres = ["a", "b", "c", "d", "e", "f", "g"];

opción 1: el algoritmo buscará el nombre desde la posición proporcionada

buscarnombre(nombre,"f", 80); 
nombre de la función(nombre de la variable(nombre), lo que quieres buscar(en este caso es la letra f),
desde la posición en que lo vas a buscar(80 en este caso)) */
