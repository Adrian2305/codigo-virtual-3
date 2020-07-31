//BREAK Y CONTINUE

/*continue; es un scope de una estructura repetitiva, salta u obvia todas las sentencias
de la iteración en la que nos encontremos y continuamos con la siguiente iteración
Ejm: Digamos que tenemos 70 casos que ver pero hay restricciones para que se acepten
algunos casos entonces si hay un caso que no cumple las restricciones no se acepta y
se siguen avanzando los demás casos hasta que terminen los 70 casos.  */

/*break; es un scope de una estructura repetitiva, finaliza todos los ciclos o iteraciones 
que restan por hacer sin importar en que restan por hacer sin importar en que iteración nos
encontremos*/

/*Que el usuario busque un nombre y que cuando el algoritmo lo encuentre se imprima su
edad y la posición en la que se encuentra*/

let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];

let encontado = false;
/* let encontrado = false; Se pone esto ya que no se sabe si va a encontrar lo que 
estás pidiendo y también el if nunca se va cumplir sino se pone este dato */

let buscar = prompt("Ingrese el nombre a buscar en la base de datos");

for (let i = 0; i < nombres.length; i++) {
  console.log(`i=${i}`);
  if (nombres[i] === buscar) {
    console.log(`Encontrado ${buscar}`);
    console.log(`Edad: ${edades[i]}`);
    encontrado = true;
    break;
  }
}
// if (!encontrado): See lee => Si(if) no(!) es encontrado.
if (!encontrado) {
  console.log("No se ha encontrado al usuario");
}

// -----------uso del continue
/* De los arreglos anteriores, imprimir la edad y nombre de las personas mejores de 60 
años*/

for (let i = 0; i < edades.length; i++) {
    if (edades[i]>60) {
        continue;
    }
    console.log(`${nombres[i]} tiene ${edades[i]} años`);
}
