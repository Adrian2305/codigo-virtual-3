let frase = "Agua que no has de beber, jala la cadena y déjala correr";
let cantidadLetras = frase.length;
console.log(`Cantidad de caracteres: ${cantidadLetras}`);

/**
 * string.toLowercase()
 * retorna la misma cadena de texto, convertida a minúsculas.
 */

let minusculas = frase.toLowerCase();
console.log(minusculas);

/**
 * string.toUpperCase()
 * retorna la misma cadena de texto, convertida a mayúsculas.
 */

let mayusculas = frase.toUpperCase();
console.log(mayusculas);

/**
 * string.substr(posición_inicial, cantidad_decaracteres_desde_posición_inicial)
 * Retorna una subcadena dada una posición inicial y una cantidad de caracteres a partir de dicha posición inicial.
 */
let subcadena = frase.substr(2, 10);
console.log(subcadena);

/**
 * string.substring(posición_inicial, posoción_final)
 * retorna una subcadena dada una posición inicial y una posición final
 * Atención: La última posición no es considerada dentro de la subcadena de respuesta
 */

let subcadenaInicialFin = frase.substring(8, 12);
console.log(subcadenaInicialFin);

/**
 * string.includes("subcadena_buscada")
 * Retorna true si la "subcadena_buscada" existe en el string
 * Retorna false si no existe
 */

let existeBEBER = frase.includes("BEBER");
console.log(`¿BEBER está incluída?: ${existeBEBER}`);

/**
 * string.indexOf("subcadena")
 * Retorna la posición de la "subcadena buscada"
 * si "la subcadena no existe", se retorna -1
 */

let posicionPalabraCadena = frase.indexOf("cadena");
console.log(posicionPalabraCadena);

let posicionPalabraCadenas = frase.indexOf("cadenas");
console.log(posicionPalabraCadenas);

/**
 * string.trim()
 * retorna una copia de la cadena
 * Sin los espacios en blanco a los extremos de dicha cadena
 * Si la cadena tiene espacios intermedios, no los borra
 */

let fraseConEspacios = "    ups!           ";
console.log(fraseConEspacios);
console.log(fraseConEspacios.trim());
