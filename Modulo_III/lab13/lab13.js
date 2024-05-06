/**
 *     @author Alejandro Romero <alejo8591@gmail.com>
 *     @fileOverview This script use Function & Scopes in JS
 *     @licence BSD 3-Clause License
 */

function promise1() {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve('Promise 1 resolved')
    }, 2000);
  });
};

function promise2(message) {
  return new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve(message + ' -> Promise 2 resolved')
    }, 2000);
  });
};

promise1()
  .then(result => {
    console.groupCollapsed("Estoy aqui")
  return promise2(result);
  })
  .then(finaResult =>{
    console.log(finaResult); //will print
  }).catch(error=> {
    console.error('Error:', error);
  }   
);

promise1()
promise2()