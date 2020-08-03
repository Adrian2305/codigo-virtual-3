/* Si la función solo tiene una línea de ejecución se pueden omitir las llaves "{}" */

const sumar = (a, b) => console.log(a + b);
sumar(52, 11);

// Si la función recibe un parámetro se pueden omitir los paréntesis.

const cuadrado = (numero) => console.log(numero * numero);
cuadrado(12);

/* Si la función solo tiene una línea de ejecución y a su vez retorna un valor se puede obviar la palabra
"return" y en su lugar encerrar el retorno en un parántesis */

const cubo = n => (n * n * n);

console.log(cubo(5));
