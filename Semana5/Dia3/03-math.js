// La clase math es una clase ESTÁTICA que nos provee de funciones matemáticas

//Ejm: Math.sqrt(numero)
let raizDe25 = Math.sqrt(25);
console.log(raizDe25);

// Math.floor(numero_decimal)
//Redondea un numero al proximo entero inferior
//Ejm: Math.floor(5.9999) = 5

let numeroDecimal = Math.floor(5.999);
console.log(numeroDecimal);

// Math.ceil(numero_decimal)
// redondea un numero al proximo entero superior
// Ejm: Math.ceil(0.2);
console.log(Math.ceil(0.2));

// Math.round(numero_decimal)
// Redondea un número respetando las formas normales de redondeo
// Ejm: Math.round(3.2) = 3
// Ejm: Math.round(3.6) = 4

console.log(Math.round(2.5));

// Math.random() => genera un numero aleatorio
// entre 0 y 1

let aleatorioQuinceYCien = Math.random() * (100 - 15) + 15;
console.log(aleatorioQuinceYCien);

// .toFixed(numero_de_decimales)

console.log(aleatorioQuinceYCien.toFixed(2));
