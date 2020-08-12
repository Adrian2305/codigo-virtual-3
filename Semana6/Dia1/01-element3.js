let btnTitulo1 = document.querySelector("#btnTitulo1");
let btnTitulo2 = document.querySelector("#btnTitulo2");
let h1 = document.querySelector("h1");
let selectPeliculas = document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");

btnTitulo1.onclick = () => {
  /**
   * elemento.innerText => settea el contenido de una etiqueta
   * OJO: Se debe considerar solo el contenido a nivel de texto
   * y no html
   */
  h1.innerText = "Nuevo <strong>titulo</strong> 1";
};
btnTitulo2.onclick = () => {
  /**
   * elemento.innerHTML => settea el contenido de una etiqueta a
   * nivel de texto y también reconoce etiquetas HTML
   */
  h1.innerHTML = "Nuevo <strong>titulo</strong> 2";
};

const llenarSelect = () => {
  let contenido = "";
  peliculas.forEach((objPelicula) => {
    contenido = contenido + `<option>${objPelicula.title}</option>`;
  });
  selectPeliculas.innerHTML = contenido;
};

btnSelect.onclick = () => {
  llenarSelect();
};
