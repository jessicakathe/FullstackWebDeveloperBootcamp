/**  Comentario para documentación
 *  @author Jessica Franco <jessicakathe@gmail.com>
 *  @fileoverview This script uses arrow functions to get the data of the product 
 *  from the form and to build an object with each data
 *  @license BSD 3-clause License
*/

// variables
let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let product = {};


// Crear una función ArrowFunction llamada getProductDataForm
// Dentro de getProductDataForm con el método document.getElementById("<elementId>").value 
// obtener cada uno de los valores y asignarlo a cada una de las variables según el campo del form

/**
 * @method
 * @returns {Object}
 * @description this method use promise for get data from the HTML inputs
 */

const getPromiseDataFormMyForm = () => {
    console.log("this first step for nested promises to get Data from form");
    return new Promise((resolve, reject) => {
      //1. first step load data from html
      const productName = document.getElementById("floatingInputName").value;
      const productType = document.getElementById("floatingInputProductType").value;
      const floatingInputQuantity = document.getElementById("floatingInputQuantity").value;
      const floatingPrice = document.getElementById("floatingPrice").value;
      const floatingLatitude = document.getElementById("floatingLatitude").value;
      const floatingLongitude = document.getElementById("floatingLongitude").value;

      resolve({
        productName: productName,
        productType: productType,
        quantity: quantity,
        price: price,
        latitude: latitude,
        longitude: longitude
      });
    });
  };



// Crear una función ArrowFunction llamada buildProductDataForRequest y completar el objeto con cada uno de los datos

/**
 * @method
 * @param data
 * @returns {Object|null}
 * @description this method use for build data for send to server
 */

const buildData = data => {
    console.log("this second step for builData");
    let buildData = null;
  
    if (data !== null && data !== undefined) {
      buildData = {
        product_name: data.product_name,
        product_type: data.product_type,
        quantity: data.quantity,
        price: data.price,
        latitude: data.latitude,
        longitude: data.longitude
      }
    }
    debugger
    return buildData;
  };

buildProductDataForRequest => {

}

/**
 * @method
 * @returns {Promise<unknown>}
 * @description this method use promise for build JSON data method
 */
const promiseBuildData = () => {
    console.log("this third step for promise Build Data");
    return new Promise((resolve, reject) => {
      product = buildData({product_name: product_name, product_type: product_type, quantity: quantity, price: price, latitude: latitude, longitude: longitude});
      resolve(product);
    });
  };

/**
 * @method
 * @returns {Object}
 * @description this method use promises for get data from the HTML inputs,
 * also through convert to JSON object for next time send to any server
 */

const buildProductDataForRequest = () => {
    getPromiseDataFormMyForm()
      .then(result => {
        return promiseBuildData(result);
      })
      .then(result => {
        console.log(result);
      });
  };

console.log(buildProductDataForRequest());
/*   product = {
    product_name: "<productName value>",
    product_type: "<productName value>",
    quantity: "<productName value>",
    price: "<productName value>",
    latitude: "<productName value>",
    longitude: "<productName value>"
};
 */