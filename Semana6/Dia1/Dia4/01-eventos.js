// creando variables
let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let btnToggle = document.getElementById("btnToggle");
let linkDark = document.getElementById("linkDark");
let cuadrado = document.getElementById("cuadrado");
let cuadrado2 = document.getElementById("cuadrado2");
let cuadrado3 = document.getElementById("cuadrado3");

// HASTA LA LÍNEA 16 ES PARA AÑADIRLE DOS ESTILOS AL HEADER, EN ESTE CASO ESTILO DARK Y LIGHT CON UN BUTTON.
btnLight.onclick = () => {
  console.log("click en light");
  let href = linkDark.getAttribute("href");
  // elemento.getAttribute("nombre_del_atributo"); => Sirve para añadirle un atributo al elemento, retorna el valor de un atributo de un elemento
  linkDark.setAttribute("href", "");
};

btnDark.addEventListener("click", () => {
  linkDark.setAttribute("href", "./01-eventos-dark.css");
});

// AQUÍ ES PARA HACER QUE EL BUTTON CAMBIE LOS ESTILOS.
btnToggle.onclick = (e) => {
  console.log(e);

  let href = linkDark.getAttribute("href");
  if (href.length > 0) {
    //está en dark
    linkDark.setAttribute("href", "");
  } else {
    linkDark.setAttribute("href", "./01-eventos-dark.css");
  }
};
cuadrado.onclick = (e) => {
  console.log(e);
  console.log(`Tipo de evento ${e.type}`);
  console.log("Elemento objetivo del evento");
  console.log(e.target);
  console.log(`Valores de X e Y con respecto al navegador`);
  console.log(` X=> ${e.clientX} - Y => ${e.clientY}`);
  console.log(`Valores de X e Y con respecto al MISMO ELEMENTO`);
  console.log(` X=> ${e.offSetX} - Y => ${e.offsetY}`);
};

/**
 *  elemento.onmousemove
 * evento que se desencadena cuando el mouse se mueve por encima del elemento
 */

cuadrado2.onmousemove = (e) => {
  let x = e.offSetX;
  let y = e.offSetX;
  let bolita = document.createElement("div");
  bolita.classList.add("bolita");
  // AQUÍ ESTAMOS PONIENDO LOS ESTILOS EN QUE LUGAR EN ESTE CASO A LA BOLITA.
  bolita.style.left = x + "pw";
  bolita.style.top = y + "px";
  bolita.style.display = cuadrado2.appenChild(bolita);
};

/**
 * elemento.onmouseover
 * evento que se ejecuta cuando el mouse pasa por encima del elemento
 * A diferencia del mousemove, el evento solo se dispara UNA VEZ, cuando el mouse
 * selencciona el elemento
 * SIMILAR AL HOVER (CSS)
 */

cuadrado3.onmouseover = (e) => {
  console.log(e);
  cuadrado3.classList.add("sombra");
};
// Cuando el mouse abandona el elemento
cuadrado3.onmouseleave = (e) => {
  console.log(e);
  cuadrado3.classList.remove("sombra");
};
