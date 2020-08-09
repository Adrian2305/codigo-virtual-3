let body = document.querySelector("body");

// Colocando estilos desde JS
body.style.background = "#444";

// elemento.classList
/**
 * Es un atributo que te permite trabajar con las clases de un elemento como añadir clase, listar las clases,
 * el elemento que tiene, quitar una clase y hasta agregar como un interruptor
 */

let header = document.querySelector("header");
console.log("Lista de clases del elemento");
console.log(header.classList);

/**
 * elemento.classList.add("nombre(s)_de_clase(s) separado por comas")
 * Añade una clase a un elemento del DOM
 * TODO: remove, contains.
 */

header.classList.add("header");

// elemento.clientWidth => Devuelve el ancho del elemento
// elemento.clientHeight => Devuelve la altura del elemento

let seccion1 = document.querySelector(".seccion1");
console.log(`Ancho de .seccion1: ${seccion1.clientWidth}`);
console.log(`Alto de .seccion1: ${seccion1.clientHeight}`);

/* elemento.offsetTop => Devuelve la cantidad de pixeles que el elemento dista 
con la parte superior del viewport */

/* elemento.offsetLeft => Devuelve la cantidad de pixeles que el elemento dista 
con la parte izquierda del viewport */

console.log(`Pixeles desde top .seccion1: ${seccion1.offsetTop}`);
console.log(`Pixeles desde left .seccion1: ${seccion1.offsetleft}`);

/*elemento.scrollTop => Devuelve la cantidad de pixeles que el elemento lleva 
como scroll interno */

console.log(`Seccion1 scrollTop: ${seccion1.scrollTop}`);

let html = document.querySelector("html");

console.log(`body scrollTop: ${html.scrollTop}`);
let imagen = document.querySelector("img");

let alto = window.innerHeight;

body.onscroll = (e) => {
  let scrollAbajo = html.scrollTop;

  if (scrollAbajo > 200) {
    imagen.style.height = "200px";
  } else {
    imagen.style.height = scrollAbajo + "px";
  }
};


// PARA ANIMACIONES https://www.svgator.com/