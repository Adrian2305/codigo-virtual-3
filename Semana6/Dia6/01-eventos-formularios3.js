let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputFecha = document.getElementById("inputFecha");
let formulario = document.getElementById("formulario");

let inputTurnoM = document.getElementById("inputTurnoM");
let inputTurnoT = document.getElementById("inputTurnoT");
let inputTurnoN = document.getElementById("inputTurnoN");

let objFormulario = {
  nombre: "",
  apellido: "",
  fecha: "",
  turno: "mañana ",
};

// e.target => Valor del atributo. Con el value no se puede hacer getAttribute.
// afecta a nombre,apellido,fecha ya que tiene el mismo atributo llamado "name" en el html

// Como la función de flecha tiene una línea se pueden omitir las llaves y también los paréntesis al parámetro "e".
const actualizarObjFormulario = (e) =>
  (objFormulario[e.target.name] = e.target.value);

inputNombre.onkeyup = actualizarObjFormulario;
inputApellido.onkeyup = actualizarObjFormulario;
inputFecha.onchange = actualizarObjFormulario;
/**
 * Al ejecutar el evento onchange de múltiples radioButtons con el mismo "name"
 * solo se ejecuta en el radio que acaba de ser seleccionado, no de los demás.
 */
inputTurnoM.onchange = actualizarObjFormulario;
inputTurnoN.onchange = actualizarObjFormulario;
inputTurnoT.onchange = actualizarObjFormulario;

formulario.onsubmit = (e) => {
  e.preventDefault();
  console.log("Enviando datos al servidor");
  console.log(objFormulario);
};
