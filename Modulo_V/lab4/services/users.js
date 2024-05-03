var Promise = require("bluebird");
var users = require ("../mocks/users.json");

/**
 * @type {{error: string}}
 */

var error = {error : "error"};

/**
 * @method
 * @description This method use for get all list of users
 * @returns {Promise<*>}
 */

var getAllUsers = async function () {
    return new Promise (function(resolve, reject){
        resolve(users); //ToDo: remove when the DB implemented
        reject();
    });
};

var getAllupdateUserByEmail = async function () {
    return new Promise (function(resolve, reject){
        resolve(users); //ToDo: remove when the DB implemented
        reject();
    });
};



//para hacerlo visible dentro de la aplicacion
module.exports = {
    getAllUsers,
};