// window.document
//document => objeto que sirve para manipular el DOM

// Propiedades más importantes.
/**
 *  document.getElementById("id_del_elemento"); => obtiene una variable la referencia a un elemento del DOM
 *  */

let header = document.getElementById("header");
// header es un objeto de la clase "ELEMENT"
console.log(header);

/**
 * document.getElementByClassName("nombre_de_la_clase");
 * retorna un HTMLCollection(similar a un arreglo) de elementos que tengan la clase pasada como parámetro
 */

let secciones = document.getElementsByClassName("miseccion");
console.log(secciones);
console.log(`Cantidad de secciones`);
console.log(secciones.length);

// Transformar el HTMLCollection a un Array

let seccionesArreglo = Array.from(secciones);
console.log(seccionesArreglo);
seccionesArreglo.forEach((seccion) => {
  console.log(seccion);
});
