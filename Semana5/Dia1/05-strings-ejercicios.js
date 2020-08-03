let frase = "anita lava la tina";
for (let i = 0; i < frase.length; i++) {
  console.log(`${i} => ${frase[i]}`);
}

console.log("-----------");

/**
 * Función que retorna la cantidad de palabras que tiene una cadena de texto.
 * @param {*} cadena
 */
const contadorDePalabras = (cadena) => {
  let contadorPalabras = 0;
  let cadenaArreglada = cadena.trim();
  for (let i = 0; i < cadenaArreglada.length; i++) {
    if (cadenaArreglada[i] === " ") {
      contadorPalabras++;
    }
  }
  return contadorPalabras + 1;
};
let resultado = contadorDePalabras("las chicas del can");
console.log(`Palabras: ${resultado}`);
