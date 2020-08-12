let lista = document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");

btnGenerar.onclick = () => {
  /**
   * document.createElement("etiqueta_del_elemento")
   * retorna un elemento htmlque aún no está en el DOM
   * imaginemos que dicho elemento está en el limbo
   */
  let liTemporal = document.createElement("li");
  let numeroAleatorio = (Math.random() * (45 - 1) + 1).toFixed(0);
  liTemporal.innerText = numeroAleatorio;
  /**
   * elemento.setAttribute("nombre_del_atributo","valor_del_atributo")
   * Como un atributo al elemento con un respectivo
   * (hablamos de atributos HTML ejm: id, calss, border, name, value)
   */
  liTemporal.setAttribute("class", "lista-item");
  liTemporal.onclick = () => {
    console.log(`Uy! alguien está haciendo click en ${numeroAleatorio}`);
  };
  /**
   * elemento.appendChild(elemento), agrega como hijo final al elemento recibido
   * por parámetros.
   * elemento.before(elemento), análogamente inserta un hijo al inicio de los
   * elementos hijos
   */

  lista.appendChild(liTemporal);
  /**
   * Reto:
   * -Permitir como máximo 7 números de lotería
   * -Validar si un número se repite salga otro
   * HINT: Usar un arreglo para guardar los números y sacar la cantidad de números
   */
};
/**
 * document.onkeyup=(e)=>{if(e.key==="x"){hacer algo aquí}}
 * html
 */
