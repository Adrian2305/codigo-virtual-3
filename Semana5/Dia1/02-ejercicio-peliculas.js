/**
 * Retorna un OBJETO PELICULA en caso encuentre la pelicula que el usuario busca según el nombre
 * caso contrario se retorna null
 * @param {string} nombre
 */

const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title === nombre) {
      /* retorna un valor de la función pero además, finaliza el for automáticamente */

      return data.peliculas[i];
    }
  }
  return null;
};

let peliEncontrada = getPeliculasByName("Atrapa ese email");
console.log(peliEncontrada);

// 2
/**
 * Funcion que retorna una lista de películas que tienen menos de 200 votos (en la propiedad vote_count)
 * En caso de no tener películas con menos de 200 votos retornar un arreglo vacío.
 */

const getMenosVotadas = () => {};


// 3
/**
 * Función que retorna el NÚMERO(CANTIDAD) DE PELÍCULAS cuyos lenguajes originales no sean inglés
 * hint: ver el campo original_language
 */

 const getPeliculasExtranjeras = () => {};


 // 4

 const dsad = () => {};