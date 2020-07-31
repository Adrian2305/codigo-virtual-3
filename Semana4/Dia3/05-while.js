//Dado un arreglo de numeros, hallar la cantidad de numeros positivos, negativos, iguales a cero

let numeros = [0, 25, -9, -8, 0, 0, 28, 7464, -968, 9, -9, 0];
//let contador= 0; para que empiece desde el cero
let contador = 0;
let positivos = 0;
let negativos = 0;
let ceros = 0;

while (contador < numeros.length) {
  if (numeros[contador] > 0) {
    //numero positivo
    positivos += 1;
  } else if (numeros[contador] < 0) {
    //Numero negativo
    negativos += 1;
  } else {
    //numero 0
    ceros += 1;
  }
  // console.log(numeros[contador]);  SIRVE PARA IMPRIMIR TODOS LOS NÚMEROS

  // contador +=1; Para que avance de uno en uno.
  contador += 1;
}
console.log(`Positivos ${positivos}`);
console.log(`Negativos ${negativos}`);
console.log(`Ceros ${ceros}`);
