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

/**
 * document.querySelector("selector_de_un_elemento")
 * Retorna un elemento del DOM dado un selector al estilo CSS
 * Ejm: .rojo => un elemento con la clase "rojo"
 * OJO: querySelector solo devuelve 1 elemento
 */

let footerApp = document.querySelector("#footerApp");
console.log(footerApp);

/**
 * document.querySelectorAll("selector_de_uno_o_mas_elementos");
 * Retorna una coleccion de elementos del DOM dado un selector como en CSS
 */
let divsFooter = document.querySelectorAll(".footerApp_seccion");
console.log(divsFooter);

divsFooter.forEach((div) => {
  console.log(div);
});

let navegacion = document.querySelector("#navegacion");
console.log(navegacion);
