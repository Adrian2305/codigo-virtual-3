/**
 * Los nombres de las clases deben iniciar con una mayúscula.
 */

class Restaurant {
  aforo;
  nroMesas;
  direccion;
  categoria;
  telefonos;
  nombre;
  delivery;
  /**
   * Para la tipificación:
   * Será tipo A si el aforo es mayor a 500 personas.
   * Tipo B si el aforo es mayor a 300 personas.
   * Tipo c si el aforo es menor igual a 300 personas.
   */
  tipificacion;
  /**
   *Función que se ejecuta automaticamente al momento de crear un objeto
   */
  constructor(
    _aforo,
    _nroMesas,
    _direccion,
    _categoria,
    _telefonos,
    _nombre,
    _delivery
  ) {
    // this: Para acceder al scope interno de la clase y se usa para acceder a los atributos
    // y métodos de la clase
    this.aforo = _aforo;
    this.nroMesas = _nroMesas;
    this.direccion = _direccion;
    this.categoria = _categoria;
    this.telefonos = _telefonos;
    this.nombre = _nombre;
    this.delivery = _delivery;

    if (this.aforo > 500) {
      this.tipificacion = "A";
    } else if (this.aforo > 300) {
      this.tipificacion = "B";
    } else {
      this.tipificacion = "C";
    }
  }

  imprimirTelefonos() {
    console.log(`Teléfonos del restaurant: ${this.nombre}`);
    for (let i = 0; i < this.telefonos.length; i++) {
      console.log(` ${this.telefonos[i]}`);
    }
  }

  imprimirTelefonos2() {
    for (const tel of this.telefonos) {
      console.log(`Telefono: ${tell}`);
    }
  }
}
// Instanciando una clase: Creando un objeto a partir de una clase.
//new Restaurant(); :El paréntesis da valores iniciales al objeto.(Aquí puedes ejecutar el único constructor)
// new Restaurant(); :El new reserva un espacio de memoria para el objeto objTanta

let objTanta = new Restaurant(800, 200, "Vallecito", "Comida criolla");
let objAstrid = new Restaurant();

// Modificando los atributos de un objeto

objTanta.aforo = 500;
objTanta.delivery = true;
objAstrid.aforo = 1000;

console.log(objTanta);
console.log(objAstrid);

objTanta.imprimirTelefonos();
objTanta.imprimirTelefonos2();
