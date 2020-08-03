const buscarpordni = (dni, callback) => {
  /* Conecta a la bd, hace la consulta del dni, retorna la información de la persona*/

  let nombreencontrado = "----";
  setTimeout(function () {
    console.log("Buscando en la base de datos");
    let nombreencontrado = "David Roca";
    callback(nombreencontrado);
  }, 2000);
};

buscarpordni("77418965", (nombre) => {
  console.log(nombre);
});
