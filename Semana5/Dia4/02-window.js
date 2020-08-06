// window  => objeto que representa al navegador y todas sus propiedades internas(Objeto global)

//Obtener la altura y el ancho del viewpport

let alto = window.innerHeight;
let ancho = window.innerWidth;

console.log(alto);
console.log(ancho);

let navegacion = window.location;
console.log(navegacion);

let url = navegacion.href;
console.log(url);

let hostname = navegacion.hostname;
console.log(hostname);

// window.document => objeto que tiene toda la información del dom

console.log(window.document);
