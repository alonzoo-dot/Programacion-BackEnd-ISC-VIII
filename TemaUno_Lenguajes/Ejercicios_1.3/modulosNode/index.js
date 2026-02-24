const fs = require("fs"); // Importa la herramienta de sistema de archivos

fs.writeFile("archivo.txt", "Hola desde NodeJS", (err) => {
  if (err) throw err;
  console.log("El archivo ha sido creado con éxito.");

  // Desafio 1: usando fs.readFile
  fs.readFile("archivo.txt", "utf8", (err, contenido) => {
    if (err) throw err;

    console.log("Contenido del archivo:");
    console.log(contenido);
  });
});
