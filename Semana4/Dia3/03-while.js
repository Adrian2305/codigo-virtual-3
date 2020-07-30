//While

let c = 0;
console.log(`C inicial = ${c}`);
while (c<8) {
    console.log(`C = ${c}`);
    c = c + 1;
}
console.log(`Valor de C = ${c}`);

console.log("-------------");
//tabla de multiplicación

let base = +prompt("Ingrese la base del número a obtener la tabla")
let contador = 0;
while(contador <= 12){
    console.log(`${base} x ${contador} = ${base*contador}`);
    contador = contador + 1;
}