/* Un objeto es un elemento que abstrae características o atributos en común */

// ¿ Cómo se crea?

let objPersona = {
  nombre: "David",
  apellido: "Roca",
  edad: "22",
  peso: "70",
  casado: false,
};

// Forma de acceder a los atributos.
// Forma 1:
console.log(objPersona.peso);
// Forma 2:
console.log(objPersona["apellido"]);

// Forma de MODIFICAR UN ATRIBUTO.
// Forma 1:
objPersona.casado = false;
objPersona.peso = 70;
console.log(objPersona);

// Forma de CREAR NUEVOS ATRIBUTOS A UN OBJETO.

objPersona.platosfavoritos = ["ceviche", "Arroz chaufa", "Ají de gallina"];
console.log(objPersona);

for (let i = 0; i < objPersona.platosfavoritos.length; i++) {
  console.log(objPersona.platosfavoritos[i]);
}

// ----------------------------- //

let productos = [
  {
    nombre: "Tv samsung",
    precio: 8000,
    codigo: "20191",
    coloresdisponibles: ["Azul"],
  },
  {
    nombre: "Tv samsung",
    precio: 8000,
    codigo: "20191",
    coloresdisponibles: ["Plomo"],
  },
  {
    nombre: "Tv samsung",
    precio: 8000,
    codigo: "20191",
    coloresdisponibles: ["Blanco"],
  },
  {
    nombre: "Tv samsung",
    precio: 8000,
    codigo: "20191",
    coloresdisponibles: ["Rojo"],
  },
];
for (let i = 0; i < productos.length; i++) {
  console.log(`---producto ${i + 1}---`);
  console.log(`Nombre: ${productos[i].nombre}`);
  console.log(`Precio: ${productos[i].precio}`);
  console.log(`Codigo: ${productos[i].codigo}`);
  console.log(`Colores disponibles: `);
  for (let j = 0; j < productos[i].coloresdisponibles.length; j++) {
    console.log(productos[i].coloresdisponibles[j]);
  }
}
