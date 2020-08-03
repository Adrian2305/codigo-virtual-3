// Se pueden crear funciones dentro de otras funciones.

const areacirculo = (radio) => {
  const pi = 3.1416;
  const cuadrado = (numero) => {
    return numero * numero;
  };
  return pi * cuadrado(radio);
};

let rpta = areacirculo(13);
console.log(rpta);
