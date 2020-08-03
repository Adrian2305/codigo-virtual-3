// COMO SI ESTUVIERAS HACIENDO BOLETAS.

let objTienda = {
  nombre: "capricho",
  categoria: "postres",
  descripcion: "Tienda de postres peruanos",
  sucursales: [
    {
      nombre: "Capricho Mercaderes",
      telefono: "936333894",
    },
    {
      nombre: "Capricho Lambramani",
      telefono: "952453189",
    },
    {
      nombre: "Capricho EEUU",
      telefono: "946325914",
    },
  ],
};

console.log(`------- CAPRICHO ---------`);
console.log(`Nombre: ${objTienda.nombre}`);
console.log(`Categoria: ${objTienda.categoria}`);
console.log(`Descripcion: ${objTienda.descripcion}`);
console.log(`Sucursales:`);

for (let i = 0; i < objTienda.sucursales.length; i++) {
    console.log(`-------`);
    console.log(`Sucursal ${i+1}`);
    console.log(`Nombre: ${objTienda.sucursales[i].nombre}`);
    console.log(`Telefono: ${objTienda.sucursales[i].telefono}`);
    console.log(`-------`);
}