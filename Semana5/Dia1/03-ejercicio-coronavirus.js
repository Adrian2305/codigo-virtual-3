//1
/**
 * Función que retorna el número de casos de personas
 * infectadas en el total en el mundo
 * Retorna null
 */
const getTotalDeCasosEnElMundo = (totalCasos) => {
  for (let i = 0; i < data.casos.length; i++) {
    if (data.casos[i].cases === totalCasos) {
      return data.casos[i];
    }
  }
  return null;
};

//3
/**
 * Función que retorna el porcentaje de casos de personas recuperadas frente al total de casos en un país
 *
 * Para ello se debe proporcionar el nombre del país, para buscar un país se debe hacer uso de la función del
 * ejercicio 2 (obligatorio)
 * @param {*} país
 */
const getCifrasByNamePais = (pais) => {};

//4
/**
 * Función que retorna un arreglo de todos los paises con el siguiente objeto como estructura
 * [{
 * pais:"nombre del pais",
 * prubeasrealizadas:50000,
 * pruebasPositivas:25000,
 * porcentajePruebas:50
 * }]
 * implica que cada pais debe mostral el porcentaje de casos positivos
 * frente al total de pruebas realizadas.
 */
const generarArrayPorcentajeDePruebasPositivas = () => {
  let arregloResultado = [];
  for (let i = 0; i < covid.length; i++) {
    let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;
    let objTemporalPais = {
      pais: covid[i].country,
      prubeasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      porcentajePruebas: porcentaje,
    };
    arregloResultado.push(objTemporalPais);
  }
  return arregloResultado;
};
let resultado = generarArrayPorcentajeDePruebasPositivas();
console.log(resultado);
