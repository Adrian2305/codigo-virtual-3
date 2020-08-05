/**
 * Devuelve un arreglo de la misma cantidad de elementos del arreglo
 * original con las transformaciones que el usuario le haga a cada elemento
 * A diferencia del filter, la función map no puede retornar menos elementos
 */

console.log("//////map/////");

let nombres = ["joaquin", "Maria", "Thamara", "Allison", "Jorge"];

let nombresMayusculas = nombres.map((name) => {
  return {
    original: name,
    minuscula: name.toLowerCase(),
    mayuscula: name.toUpperCase(),
  };
});
console.log(nombresMayusculas);

// ------------------
// arreglo.splice(posicion_inicial, elementos_a_eliminar, elementos_a_insertar)

console.log("///////SPLICE///////");
let productos = [
  "TV Samsung",
  "Tablet Android",
  "Laptop Razer",
  "Smatphone Xiaomi",
];
// .splice(A partir de la posición 0, eliminar un elemento, añadir un nuevo elemento)
productos.splice(2, 1, "PC gamer");
console.log(productos);
productos.splice(2, 0, "Mouse logitech", "Audífonos Razer");
console.log(productos);

// ----------indexOf---------
// Sirve para saber la posición del producto[arreglo]
console.log("//////indexOf/////");
let posicionMouse = productos.indexOf("Mouse logitech");
console.log("Posición del mouse");
console.log(posicionMouse);

//------ pop-------
/**
 * Sirve para extraer el último de un arreglo
 * La función además se retorna dicho elemento
 */
console.log("/////////POP///////");
let elementoEliminado = productos.pop();
console.log(`Eliminaste: ${elementoEliminado}`);
console.log(productos);
