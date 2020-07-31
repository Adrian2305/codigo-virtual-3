//Arrays, Arreglos, vectores.

let numeros = [15, 16, 1.5, 9, -9, 16];
let vacio = [];
let nombres = ["a, b, c, d"];
let combinado = [12, "qwerty", true];
//imprimiendo el array
// Para saber las posiciones de los números se empieza a contar dede el cero
console.log(numeros);
//imprimiendo un elemento del arreglo dependiendo de su posición
console.log(`Posición 4 = ${numero[4]}`);
// Cambiando el número de la posición 0
numeros[0] = 720;
console.log(numeros);
console.log(`Cantidad de elementos del array`);
console.log(numeros.length);

let totalElementos = numeros.length;
//Imprimir el último elemento de un arreglo
console.log(numeros[5]);
console.log(numeros[totalElementos - 1]);

//Agregando elementos de un arreglo(array)
numeros.push(212);
console.log(numeros);
console.log(nombres);
