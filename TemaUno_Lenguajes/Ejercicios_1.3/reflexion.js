/* REFLEXIÓN - EJERCICIO 1.3

   1. ¿Cuál es la diferencia fundamental entre un módulo nativo (como 
      'fs') y un módulo de NPM (como 'sillyname') en cuanto a su origen e 
      instalación?

   La principal diferencia es que los módulos nativos ya vienen incluidos
   cuando instalamos Node.js, por lo que no es necesario descargarlos ni
   instalarlos aparte. Un ejemplo es el módulo 'fs'. En cambio, los módulos
   de NPM son creados por otros desarrolladores y se deben instalar de forma
   manual usando comandos como 'npm install'.

   2. Investigando la sintaxis: ¿Qué diferencia existe entre 'require' 
      (CommonJS) y 'import' (ES Modules)? Considera el momento en que se 
      cargan los módulos.

   La diferencia es que 'require' carga los módulos en tiempo de ejecución,
   es decir, cuando el programa ya se está ejecutando. Por otro lado, 'import'
   carga los módulos de forma anticipada antes de que el programa comience,
   lo que permite un mejor control y organización del código. Además, 'import'
   es la forma moderna de trabajar con módulos en JavaScript.

   3. Sobre el archivo 'package.json':

      a) ¿Por qué es vital compartir este archivo pero NO la carpeta 
         'node_modules' al subir a un repositorio?

      Porque el archivo 'package.json' contiene la información necesaria para
      saber qué dependencias usa el proyecto, mientras que la carpeta
      'node_modules' puede volver a generarse automáticamente. Subir
      'node_modules' solo hace que el repositorio sea más pesado e innecesario.

      b) ¿Qué sucede si ejecutas 'npm install' en una carpeta que solo 
         tiene el package.json?

      Al ejecutar 'npm install', NPM lee el archivo 'package.json' y descarga
      automáticamente todas las dependencias indicadas, creando de nuevo la
      carpeta 'node_modules'.
*/
