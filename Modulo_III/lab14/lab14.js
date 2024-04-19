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
const COUNTRY_CODE = "+57";

/**
 * @method
 * @param word
 * @returns {string|null}
 * @description this method use for capitalize a word
 */
const wordToCapitalize = word => {
    let toCapitalize = null;
    if (word !== null && word !== undefined && word.length > 0) {
        toCapitalize = word[0].toUpperCase() + word.slice(1);
    }
    debugger
    return toCapitalize;
};

/**
 * @method
 * @param word
 * @returns {string|undefined}
 * @description this method use for encoded a word in base64
 */
const encodeBase64 = word => {
    let encodedStringBtoA = undefined;
    if (word !== null && word !== undefined && word.length > 0) {
        encodedStringBtoA = btoa(word);
    }
    debugger
    return encodedStringBtoA;
};

/**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */
const buildData = data => {
    let buildData = null;

    if (data !== null && data !== undefined) {
        buildData = {
            email: data.email,
            firstname: data.firstname,
            last_name: data.lastName,
            phone: `${COUNTRY_CODE}${data.phone}`,
            password: data.password
        }
    }
    debugger
    return buildData;
};
