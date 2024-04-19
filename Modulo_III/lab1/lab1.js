
/**  Comentario para documentación
 *  @author Jessica Franco <jessicakathe@gmail.com>
 *  @fileoverview This script use variable declarations and comments
 *  @license BSD 3-clause License
*/

// comentario en una línea
/* Esto es un comentario
 multilinea
*/

let name = "Jessica";
let oneNumber = 1;
const email = "jessicakathe@gmail.com"; // debilmente tipado, puede cambiar en el tiempo

//bad practice
var threeVar = 18.5;
let emailOne = "fsdfva";

//Lenguaje debilmente tipado, significa que la variable puede cambiar en el tiempo
//como lenguaje no es necesario determinar si es const, var, etc.
// como practica, hacer esto ah llevado a errores pues luego se podría cambiar
// a otro tipo de variable.

/* Buenas prácticas de Javascript 
https://github.com/alejo8591/javascript
*/

console.log(oneNumber);
console.log(emailOne);

emailOne=1;
console.log(emailOne);

/* type of variable */
console.log(typeof oneNumber)
console.log(typeof twoString)
console.log(typeof threeVar)