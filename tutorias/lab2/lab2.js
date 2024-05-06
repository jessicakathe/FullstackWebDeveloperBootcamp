/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

// declaration vars
let productName = null;
let productType = null;
let quantity = null;
let price = null;
let latitude = null;
let longitude = null;
let product = {};


/**
 * @method
 * @param form
 * @returns {string|null}
 * @description this method is used to validate any field form with Bootstrap
 */

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



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
  return toCapitalize;
};

/**
 * @method
 * @param word
 * @returns {string|undefined}
 * @description this method use for encoded a word in base64 // not used, when to use?
 */
const encodeBase64 = word => {
  let encodedStringBtoA = undefined;
  if (word !== null && word !== undefined && word.length > 0) {
    encodedStringBtoA = btoa(word);
  }
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
      productName: data.productName,
      productType: data.productType,
      quantity: data.quantity,
      price: data.price,
      latitude: data.latitude,
      longitude: data.longitude
    }
  }
  debugger
  return buildData;
};

/**
 * @method
 * @param data
 * @returns {Promise<unknown>}
 * @description this method use promise for sanitize data method
 */
const promiseForSanitizeData = (data) => {
  return new Promise((resolve, reject) => {
    productName = wordToCapitalize(data.floatingInputProductName);
    productType = wordToCapitalize(data.floatingInputProductType);
    quantity = data.floatingInputQuantity;
    price = data.floatingInputPrice;
    latitude = data.floatingInputLatitude;
    longitude = data.floatingInputLongitude;
    // The scope of this method is globe within this script,
    // it changes directly the global variables defined.
    // for this reason resolve doesn't have anything.
    resolve();
  });
};

/**
 * @method
 * @returns {Promise<unknown>}
 * @description this method use promise for build JSON data method
 */
const promiseBuildData = () => {
  return new Promise((resolve, reject) => {
    product = buildData({productName: productName, productType: productType, price: price, quantity: quantity, latitude: latitude, longitude: longitude});
    resolve(product);
  });
};

/**
 * 
 * @param {data} data of the form
 * @method 
 */


const sendLocalStorage = (data) => {
  localStorage.setItem("product", JSON.stringify(data));
};



/**
 * @method
 * @returns {Object}
 * @description this method use promise for get data from the HTML inputs
 */

const getPromiseDataFormMyForm = () => {
  return new Promise((resolve, reject) => {
    //1. first step load data from html
    const floatingInputProductName = document.getElementById("floatingInputProductName").value;
    const floatingInputProductType = document.getElementById("floatingInputProductType").value;
    const floatingInputQuantity = document.getElementById("floatingInputQuantity").value;
    const floatingInputPrice = document.getElementById("floatingInputPrice").value;
    const floatingInputLatitude = document.getElementById("floatingInputLatitude").value;
    const floatingInputLongitude = document.getElementById("floatingInputLongitude").value;

    resolve({
      floatingInputProductName: floatingInputProductName,
      floatingInputProductType: floatingInputProductType,
      floatingInputQuantity: floatingInputQuantity,
      floatingInputPrice: floatingInputPrice,
      floatingInputLatitude: floatingInputLatitude,
      floatingInputLongitude: floatingInputLongitude
    });
  });
};



/**
 * @method
 * @returns {Object}
 * @description this method use promises for get data from the HTML inputs,
 * also through convert to JSON object for next time send to any server
 */
const getDataFormMyForm = () => {
  getPromiseDataFormMyForm()
     .then(result => {
       return promiseForSanitizeData(result);
     })
     .then(result => {
       return promiseBuildData(result);
     })
     .then(result => {
      return sendLocalStorage(result);
    })
     .then(result => {
      console.log(result);
     })
     .catch((error) => { 
      throw new error(error);
    });

};





