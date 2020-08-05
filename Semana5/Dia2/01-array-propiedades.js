// arreglo.forEach(()=>{})
// El callback se ejecuta tantas veces como elementos tenga el arreglo.

peliculas.forEach((peli) => {
  console.log(peli);
});
//---------------//

let arreglo = ["Jorge", "Luis", "Karla", "Jane"];

arreglo.forEach((nombre) => {
  // En el parámetro el primero es el elemento, el segundo es el índice y el tercero es la referencia al mismo arreglo(copia del elemento).
  console.log(nombre);
});

peliculas.forEach;

//------------
//filter

/**
 * Función de los arreglos que recibe un callback en el cual se puede retornar un arreglo de elementos de
 * acuerdo a ciertas condiciones sirve como un filtro de elementos.
 * Ejecuta el callback tantas veces como elementos tenga
 */

let numeros = [20, 1, 7, 82, 32, 10];

let mayoresIgualesQueDiez = numeros.filter((elemento, i, arreglo) => {
  if (elemento >= 10) {
    return elemento;
  }
});
console.table(mayoresIgualesQueDiez);

// AQUI USA EL .filter PARA SOLO PONER LAS PELÍCULAS EXTRANJERAS QUE ESTÁN EN IDIOMA ESPAÑOL.

let peliculasExtranjeras = peliculas.filter((objPelicula) => {
  if (objPelicula.original_language !== "en") {
    return objPelicula;
  }
});
console.log(peliculasExtranjeras);
