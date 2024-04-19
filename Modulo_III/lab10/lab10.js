/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

let array = [55,55,443,2,11,46,666];

array.forEach(element => {
    console.log(`cada elemento:  ${element}`)
});

setTimeout(() => {
    console.log("Retrasado por 1 segundo.");
  }, "1000");

  let x = 2;

  const myCallback=()=> {
    console.log("x vale", x)
  };

  setTimeout(myCallback, "2000");

  console.log("el flujo continua, el seTimeoOut va por aparte o Async por el callback");

const myFunc=()=> {
  setTimeout(()=> console.log('hola mundo'), 1000)
};

const myOtherFunc=()=> {
  setTimeout(()=> console.log('hola mundo 2'), 1000)
};


//Using the promise
