
/**  Comentario para documentación
 *  @author Jessica Franco <jessicakathe@gmail.com>
 *  @fileoverview This script use data types in JS
 *  @license BSD 3-clause License
*/

//Numbers
let lenght =16;
let weight =18;
//Strings
let color = "Yellow";

//boolean
let x=true;
let y=false;

//Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    address: "aef",
    phone: "21412",
    ticket: 132.43,
    hobbies: {
        day: "swimming",
        night: "singer"
    },
    student: {
        classes: {
            "math": "1:00 - 2:00",
            "science": undefined
        }
    }
};


// Un Objeto es la base de un json.

// tipo de variable que tiene varios datos al interior
// clave: valor

const otherObject = {one: 1, two:2, three: 3};

// Array
let fruits = [1, "banana", "orange", "pineapple", 32.1, otherObject];

// Null
const a = null;

// Undefined
let b



//Symbol
const uniqueId = Symbol("id");

//function
function sayHello(name) {
    console.log("Hello, "+ name);
}



const holala = function() {
    console.log("anomymous function"); 
}


//function
function sayHello1(name) {
    console.log("anomymous function"); 
};

// Display the variables

console.log("Numbers: ", length, weight);
console.log("Strings: ", color, a);
console.log("Booleans: ", x, y);
console.log("Object: ", person);
console.log("Array: ", fruits);
console.log("Null: ", a);
console.log("Undefined: ", b);
console.log("Symbol: ", uniqueId);
sayHello("Bootcamp 2024");
holala();


