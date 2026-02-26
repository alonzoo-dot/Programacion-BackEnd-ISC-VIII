// Importación usando ES Modules
import generateName from "sillyname";
import { randomSuperhero } from "superheroes";

// sillyName
const sillyName = generateName();

// Desafio 2. Utilizando paquete superheroes
const hero = randomSuperhero();

console.log("Este es un nombre tonto aleatorio: " + sillyName);
console.log("Este es un nombre de superheroe: " + hero);
