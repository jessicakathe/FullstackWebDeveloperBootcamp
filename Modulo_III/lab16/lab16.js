/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

// URL of the Json
const url = 'https://api.github.com/users/mojombo/followers';

//promesa - use fetch to get the data, post , put.

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
