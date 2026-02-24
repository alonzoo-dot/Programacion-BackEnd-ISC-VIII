//Ejercicios_1.2.1: Sintaxis básica de Node.js
//Alumno: [Michael Alonzo Gonzalez]

// Ejercicio B. Declaración de todos los diferentes tipos de datos (variable) y mostrar sus valores en consola.

// String
let texto = "Hola Mundo";
console.log("String:", texto);

// Number
let numero = 42;
console.log("Number:", numero);

// Boolean
let esVerdadero = true;
console.log("Boolean:", esVerdadero);

// Undefined
let indefinido;
console.log("Undefined:", indefinido);

// Null
let nulo = null;
console.log("Null:", nulo);

// Object
let objeto = { nombre: "Juan", edad: 25 };
console.log("Object:", objeto);

// Array
let arreglo = [1, 2, 3, 4, 5];
console.log("Array:", arreglo);

//Ejercicio C. Crear un array con al menos cinco elementos de diferentes tipos de datos.
let arrayMixto = [
  "Texto", // String
  100, // Number
  true, // Boolean
  null, // Null
  { id: 1 }, // Object
];
console.log("Array mixto:", arrayMixto);

//Ejercicio D. Escribe una función polinómica de segundo grado que tome dos números y muestre el resultado.
// Función polinómica: ax² + bx + c
function polinomioSegundoGrado(x, a = 1, b = 1, c = 1) {
  let resultado = a * x * x + b * x + c;
  console.log(`Resultado: ${a}x² + ${b}x + ${c} = ${resultado}`);
  return resultado;
}

polinomioSegundoGrado(2); // 1(2)² + 1(2) + 1 = 7


//Ejercicio E. Crea una función flecha que reciba un string y muestre su impresión aplicando algún método de manipulación de cadenas.

// Función flecha que recibe un texto
const manipularCadena = (texto) => {
  // Muestra el texto original
  console.log("Original:", texto);

  // Convierte el texto a mayúsculas
  console.log("Mayúsculas:", texto.toUpperCase());

  // Invierte el texto separándolo, reordenándolo y uniéndolo
  console.log("Invertido:", texto.split("").reverse().join(""));
};

// Llamada a la función con un ejemplo
manipularCadena("JavaScript");


//Ejercicio F. Función que implementa un bucle que imprima los números del 1 al 10 en orden descendente.
function numerosDescendentes() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

numerosDescendentes();


//Ejercicio G. Crea un objeto que represente un objeto de tu institución con sus respectivas propiedades.
let institucion = {
  nombre: "Universidad Nacional",
  tipo: "Educativa",
  fundacion: 1950,
  alumnos: 15000,
  carreras: ["Ingeniería", "Medicina", "Derecho"],
};

console.log("Institución:", institucion);


//Ejercicio H. Agrega un método al objeto creado anteriormente e imprime una descripción del mismo.

// Se agrega el método mostrarInfo al objeto institucion
institucion.mostrarInfo = function () {
  // Imprime información en la consola
  console.log(
    // Cadena con datos del objeto usando this
    `${this.nombre} es una institución ${this.tipo} fundada en ${this.fundacion} con ${this.alumnos} estudiantes.`,
  ); // Fin de console.log
}; // Fin del método

// Llamada al método mostrarInfo
institucion.mostrarInfo();


//Ejercicio I. Crea un módulo que contenga funciones matemáticas aritméticas (suma, resta, etc.) y utilízalo en otro archivo.

const matematicas = {
  suma: (a, b) => a + b,
  resta: (a, b) => a - b,
  multiplicacion: (a, b) => a * b,
  division: (a, b) => (b !== 0 ? a / b : "Error: División por cero"),
};

console.log("Suma:", matematicas.suma(5, 3));
console.log("Resta:", matematicas.resta(10, 4));
console.log("Multiplicación:", matematicas.multiplicacion(6, 7));
console.log("División:", matematicas.division(20, 5));


//Ejercicio J. Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback.

// Función que recibe otra función como parámetro (callback)
function operacionAsincrona(callback) {
  // Mensaje inicial en consola
  console.log("Iniciando operación...");

  // Simula una tarea asíncrona con retardo
  setTimeout(() => {
    // Resultado generado después del tiempo de espera
    let resultado = "Operación completada exitosamente";

    // Llama al callback y envía el resultado
    callback(resultado);
  }, 2000); // Tiempo de espera: 2 segundos
}

// Llamada a la función asíncrona
operacionAsincrona((resultado) => {
  // Muestra el resultado recibido del callback
  console.log(resultado);
});


//Ejercicio K. Escribe un bloque de código que realice la conversión de una cadena a un número e incluye el bloque para el manejo de errores.

// Función que convierte una cadena a número con manejo de errores
function convertirCadenaANumero(cadena) {
  try {
    // Intenta convertir la cadena a número
    let numero = Number(cadena);

    // Verifica si la conversión falló
    if (isNaN(numero)) {
      // Lanza un error si no es un número válido
      throw new Error("La cadena no puede convertirse a número");
    }

    // Muestra el resultado si la conversión es correcta
    console.log("Conversión exitosa:", numero);

    // Retorna el número convertido
    return numero;
  } catch (error) {
    // Captura y muestra el error
    console.error("Error:", error.message);

    // Retorna null en caso de error
    return null;
  }
}

// Pruebas de la función
convertirCadenaANumero("123"); // Conversión exitosa
convertirCadenaANumero("abc"); // Error
