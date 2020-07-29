// Condicionales
let indiceMasaCorporal = 0;
let edad = +prompt("Ingrese su edad joven");
// let rpta = edad > 17;
// comparadores aritméticos
// !== diferente
// === igual


// Comparadores logicos:

// Y : &&
// O :  ll 
// not: !

if (edad > 17) {
  let altura = +prompt("¿Cuanto mide joven");
  let peso = +prompt("¿Cuanto pesa joven (Kgs.)?");
  indiceMasaCorporal = peso / (altura * 2);
  debugger;
  if (indiceMasaCorporal > 30) {
    console.log(`No, no hay pase laboral #quedateEnCasa`);
    console.log(`Usted es población vulnerable`);
    console.log(`Su indice de masa corporal (IMC) es: ${indicemMasaCorporal}`);
  } else {
    console.log(`Si hay pase laboral`);
    console.log(`Su indice de masa corporal (IMC) es: ${indiceMasaCorporal}`);
  }
} else {
  console.log(`No, no hay pase laboral #quedateEnCasa`);
  console.log(`es usted muy moco`);
}
console.log("Fin del programa, hasta pronto");