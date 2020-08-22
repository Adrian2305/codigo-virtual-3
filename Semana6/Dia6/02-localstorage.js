// Con este código a medida que vas añadiendo un producto en la consola se van añadiendo.

let formulario = document.getElementById("formulario");
let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let tbody = document.getElementById("tbody");
let inputColor = document.getElementById("inputColor");
let menu = document.getElementById("menu");

inputColor.onchange = () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = inputColor.value;
  localStorage.setItem("color", inputColor.value);
};

let productos = [];
const llenarTabla = () => {
  tbody.innerHTML = "";

  productos.forEach((objProd, i) => {
    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;
    let tdCodigo = document.createElement("td");
    tdCodigo.innerText = objProd.codigo;
    let tdNombre = document.createElement("td");
    tdNombre.innerText = objProd.nombre;
    tr.appendChild(tdNro);
    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tbody.appendChild(tr);
  });
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);
  /**
   * window.localStorage.setItem("identificador_del_item","valor")
   * En la memoria localStorage del navegador(chrome), se crea una variable llamada
   * "identificador_del_item" con el valor "valor"
   * OJO solo se pueden guardar valores Strings.
   */
  /**
   * JSON es una clase estatica (analoga a Math) que tiene una serie de funciones para trabajar con objetos
   * JSON.
   * ejm JSON.stringify(objetolarreglo), retorna el parametro pasado como argumento en STRING
   */
  let productosString = JSON.stringify(productos);
  window.localStorage.setItem("listaproductos", productosString);
  llenarTabla();
};

/**
 * Función que verifica si hay datos en el LOCALSTORAGE y llena la tabla con dichos datos iniciales
 */
const verificarStorage = () => {
  let productosStorage = window.localStorage.getItem("listaproductos");
  let colorStorage = localStorage.getItem("color");
  /**
   * Preguntamos si habían datos con esa clave(listaproductos) en el storage
   */
  if (productosStorage) {
    // El localStorage solo lo guarda en string y con let productosJSON = JSON.parse(productosStorage); lo cambia a formato JSON
    let productosJSON = JSON.parse(productosStorage);
    productos = productosJSON;
    llenarTabla();
  }
  if (colorStorage) {
    // En vez de crear una variable para cambiar el color del estilo usamos esto:
    document.querySelector("body").style.backgroundColor = colorStorage;
    inputColor.value = colorStorage;
  }
};
verificarStorage();

// ESTO ES PARA QUE NO PUEDAN APRETAR CLIC DERECHO Y NO LE SALGAN LAS OPCIONES, EN ESTE CASO SOLO ES EN EL BODY.
document.querySelector("body").oncontextmenu = (e) => {
  e.preventDefault();
  // Aqui se podría dibujar un menu contextual propio de la aplicación.
  // Con esto hacemos que se quede pegado en el eje x y también en el eje y ya que
  // en el html pusimos que esté en left 0 y top 0.
  menu.style.left = `${e.clientX}px`;
  menu.style.topt = `${e.clientY}px`;
  // Usamos el menu.removeAttribute("hidden"); para quitar el atributo hidden que está en el menu
  menu.removeAttribute("hidden");
};

document.querySelector("body").onclick = (e) => {
  menu.setAttribute("hidden", "hidden");
};
