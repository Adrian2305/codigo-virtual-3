// API es una url para consumir algún tipo de recurso

let objPeru = {
  "gentilicio": "Peruano",
  "zonaHoraria": "GMT -05:00",
  "departamentos": [
    {
      "nombre": "puno",
      "gentilicio":"Puneño"
    },
    {
        "nombre":"Tarapoto",
        "gentilicio":"Tarapotino"
    }
  ],
};

console.log(`Total dptos: ${objPeru.departamentos.length}`);