/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


console.log("Hello World, i Know how to count");

//[1,2,3,4].forEach(n=>console.log(n));

const numbers = [1,2,6,7];

function logger(n) {
    console.log(n);
}

numbers.forEach(logger);

//numbers.forEach(function(n){
//   console.log(n); 
//});