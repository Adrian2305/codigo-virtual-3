// Date() clase cuyos objetos trabajan con fechas
let hoy = new Date();
console.log(hoy);

/**
 * getFullYear(); retorna el año de una variable de tipo fecha
 */
let anioActual = hoy.getFullYear();
console.log("Año Actual: ");
console.log(anioActual);

/**
 * getMonth() retorna el mes de una variable de tipo fecha
 * Recordar que: ENERO EMPIEZA CON EL VALOR DE CERO Y ES POR ESO QUE AGOSTO ES EL NÚMERO 7
 */
let mesActual = hoy.getMonth();
console.log("Mes actual:");
console.log(mesActual);

let diaCalendarioActual = hoy.getDate();
console.log("dia Calendario Actual: ");
console.log(diaCalendarioActual);
/*let stringFecha = `${diaCalendarioActual}-${mesActual + 1}-${anioActual}`; PARA OBTENER EXACTAMENTE
LA FECHA ACTUAL */
let stringFecha = `${diaCalendarioActual}-${mesActual + 1}-${anioActual}`;
console.log("Fecha en string");
console.log(stringFecha);

/**
 * Función que retorna el número del día de la semana empezando desde el 0
 *
 */
let diaSemana = hoy.getDay();
console.log("Dia de la semana");
console.log(diaSemana);

let horaActual = hoy.getHours();
let minutoActual = hoy.getMinutes();
let segundoActual = hoy.getSeconds();
let milisegundosActual = hoy.getMilliseconds();

console.log(`hora Actual: ${horaActual}`);
console.log(`minuto Actual: ${minutoActual}`);
console.log(`segundo Actual: ${segundoActual}`);
console.log(`milisegundo Actual: ${milisegundosActual}`);

// Iniciar una variable de tipo fecha ubicado en navidad.
//new date(año,mes,dia,horas,minutos,segundos);

let navidad2020 = new Date(2020,11,25);
console.log(navidad2020);
