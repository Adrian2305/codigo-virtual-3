//Las funciones anonimas son funciones cuyo valor se guarda en una variable.

let sumar = function (a, b) {
  let total = a + b;
  return a + b;
};
// Para sumar los dos valores de a y b:
let rpta = sumar(7, 8);
console.log(rpta);

/* Funciones de flecha: HACER ESTO YA QUE ES BUENA PRÁCTICA, ES LO MISMO SOLO ESTAMOS
REEMPLAZANDO EL VALOR DE LET Y FUNCTION. */

const sumarFlecha = (a, b) => {
  return a + b;
};
console.log(sumarFlecha(500, 20));

const mifuncion = () => {};
