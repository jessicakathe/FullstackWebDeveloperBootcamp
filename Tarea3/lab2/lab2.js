
/**  Comentario para documentación
 *  @author Jessica Franco <jessicakathe@gmail.com>
 *  @fileoverview This script use a fetch api
 *  @license BSD 3-clause License
*/

// initialise variables
// URL of the Json
const url = 'https://api.github.com/users/mojombo/followers';

// promesa - use fetch to get the data, post , put.
// with arrow function

fetch(url)
.then(
    response => {
        if (response.ok){
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        // use the jason data
        console.log(data);
    })
    .catch(error => {
    //handle the error
        console.error('There has been a problem with your fetch operation', error);
    });
