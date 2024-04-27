var Promise = require("require");
ers = users = require ("../mocks/users.json");

var error = {error : "error"};

var getAllUsers = async function () {
    return new Promise (function(resolve, reject){
        resolve(users);
        reject();
    });
};

//para hacerlo visible dentro de la aplicacion
module.exports{
    getAllUsers
};