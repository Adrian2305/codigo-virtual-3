/* Funciones:
1.Funciones que no retornan valor ni reciben parámetros.*/

function imprimirfecha() {
  //como crear una variable que guarda la fecha del ordenador.
  let fecha = new Date();
  console.log(fecha);
}
//Invocando a una función: Se pone fuera del scope
imprimirfecha();

// 2.Funciones que retornan valor y no reciben parámetros.

function retornarfecha() {
  let fecha = new Date();
  return fecha;
}
//invocando a la función: Se pone fuera del scope
let nuevafecha = retornarfecha();
console.log(nuevafecha);

// 3.Funciones que reciben parámetros y retornan valor.
/**
 * Función que recibe dos números y calcula el binomio cuadrado perfecto de ambos.
 * @param {number} a primer número.
 * @param {number} b segundo número.
 * @returns {nomber} El resultado del binomio
 */
function retornarbinomio(a, b) {
  let rpta = a * a + 2 * a * b + b * b;
  return rpta;
}
//invocando a la función: Se pone fuera del scope
let resultadobinomio = retornarbinomio(8, 5);
console.log(resultadobinomio);

// 4.Funciones que no retornan valor y que reciben parámetros.

function imprimirpares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
      if(numeros[i] %2 === 0){
          console.log(numeros[i]);
      }      
  }
}

//invocando a la función: Se pone fuera del scope
let arreglo = [4, 20, 15, 18, 13, 4 / 2, 9];
imprimirpares(arreglo);
