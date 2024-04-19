/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

// declaration vars
let email = null;
let firstname = null;
let lastName = null;
let phone = null;
let password = null;
let user = {};

const wordToCapitalize = (word) => {
    let toCapitalize = null;

    if (word !== null && word !== undefined && word.length>0) {
        toCapitalize = word(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return toCapitalize;
}


const encodeBase64 = (word) => {
    let encodeStringToBtoA = undefined;

    if (word !== null && word !== undefined && word.length>0) {
        encodeStringToBtoA = btoa(word);
    }
    
    return encodeStringToBtoA;

}


const buildData = (data)=> {
    let buildDataOut = {};

    if (data !== null && data !== undefined) {
        buildDataOut = {
            email = data.email,
            first_name= data.firstname,
            last_name: data.lastName,
            phone: data.phone,
            password: data.password
        }
        return buildDataOut
    };

}


// getData
const getDataFormMyForm = () => {
    //1. first step load data from html
    const floatingInputEmail = document.getElementById("floatingInputEmail").value;
    const floatingInputName = document.getElementById("floatingInputName").value;
    const floatingInputLastname = document.getElementById("floatingInputLastname").value;
    const floatingInputPhone = document.getElementById("floatingInputPhone").value;
    const floatingPassword = document.getElementById("floatingPassword").value;
    debugger
};

//2. sanitize data
email = floatingInputEmail;
firstname = wordToCapitalize(floatingInputName);
lastName = wordToCapitalize(floatingInputLastname);
phone = floatingInputPhone;
password = floatingPassword;


//3. prepare to send
user = buildData({email: email, firstname: firstname, lastName: lastName, phone: phone, password: password})
console.log(buildDataOut);