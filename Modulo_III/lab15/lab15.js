/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

// create a JSON object
//parseo es convertir un dato a otro tipo de daot
let student1 = {
    "name": "John Doe",
    "age": 20,
    "major": "Computer Science"
};

let student2 = {
    "name": "Jane Doe",
    "age": 22,
    "major": "Electrical Engineer"
};

console.log(student1)
console.log(student2)

//array


let students = [
    {
        "name": "John Doe",
        "age": 20,
        "major": "Computer Science"
    },
    {
        "name": "Jane Doe",
        "age": 22,
        "major": "Electrical Engineer"
    }    
];

console.log(students[1])
// parentesis cuadrados para acceder el arreglo
// . y el nombre de la clave entre "" para acceder un json

console.log(students[1]["name"])
console.log(students.length)

