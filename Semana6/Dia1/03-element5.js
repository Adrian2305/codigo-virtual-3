/**
 * EJERCICIO:
 * recorrer el arreglo "covid" para poblar la tabla y agregar
 * filas y columnas con la información que sugieren las
 * cabeceras de la tabla. No se debe obedecer a ningún click.
 */

let tbody = document.getElementById("tbody");

const llenarTabla = () => {
  /**
   * 1. Iterar el arreglo covid
   * 2. En cada vuelta crear una fila y 5 columnas
   * 3. Agregar las columnas a la fila
   * 4. Al final de cada vuelta, agregar la fila al tbody
   */
  covid.forEach((objPais, i) => {
    let fila = document.createElement("tr");

    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;

    let tdPais = document.createElement("td");
    tdPais.innerText = objPais.country;

    let tdInfectados = document.createElement("td");
    tdInfectados.innerText = objPais.cases;

    let tdFallecidos = document.createElement("td");
    tdFallecidos.innerText = objPais.deaths;

    let tdRecuperados = document.createElement("td");
    tdRecuperados.innerText = objPais.recovered;

    let tdAcciones = document.createElement("td");

    // Creando un elemento  
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar";
    tdAcciones.appendChild(btnEliminar);
    btnEliminar.onclick = () => {
      alert(`¿Estás seguro de eliminar ${objPais.country}?`);
      fila.setAttribute("hidden", "hidden");
    };

    fila.appendChild(tdNro);
    fila.appendChild(tdPais);
    fila.appendChild(tdInfectados);
    fila.appendChild(tdFallecidos);
    fila.appendChild(tdRecuperados);
    fila.appendChild(tdAcciones);

    tbody.appendChild(fila);
  });
};

llenarTabla();
