// https://docs.google.com/document/d/1g4NPayMnNV8UUNdoTLZdcf4BehCip14QDuRwa4V7uFU/edit#
// (1)

//Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2;
};

var cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};


// (2)
// Call the functions above as sketched below. It’s not about doing it as fast 
// as you can, but about understanding what's happening, so make sure you understand each line.

console.log(add(1,2));       // What will this print?
//Will print 3

console.log(add);            // What will it print and what does add represent?
//It will print out the function. Add represents the add function and no value is provided.

console.log(add(1,2,3));     // What will it print
//Will print our 3 and undefined

console.log(add(1));	     // What will it print 	
//Will print out NaN

console.log(cb(3,3,add));    // What will it print
//Will print out: Results from the two numbers 3+3=6

console.log(cb(4,3,sub));    // What will it print
//Will print out: Results from the two numbers: 4 + 3 = 1
//Will print out the + as it's "hardcoded in"

console.log(cb(3,3,add()));  // What will it print (and what was the problem)
//Will give an error. db(3,3) will work fine but then we write "add()" 
//and say that we will give values but provide none

console.log(cb(3,"hh",add)); // What will it print
//Will print out: Results from the two numbers: 3 + hh= 3hh


// (3)
// Error Handling
//7 will fail due to missing/wrong arguments. But it will fail runtime, not as with Java, at compile time.
//We can check arguments in JavaScript as sketched below and provide better errors by throwing our own exceptions:
//typeof n1 === "number" //Will fail if n1 is undefined, or is not a number
//typeof callback === "function" //Will fail if callback is undefined or is not a function
//Rewrite the Callback function expression (cb)  to make a check for all its three required arguments, and throw an Error if any of the arguments do not match as explained here.
//Surround the call to the function with a try-catch block, and provide a more user-friendly error message if the function throws an error


cb2 not fixed

var cb = function(n1,n2, callback){
    if (typeof n1 === "number" || typeof n2 === "number"){
        return "An error has occured. You didn't provide a number.";
    } else if (typeof callback === "function"){
        return "An error has occured with your functions attributes.";
    } else {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    }
};

var cb2 = function(n1,n2, callback){
    try {
        return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    } catch (err){
        return "An error has occured: the programming error is " + err;
    }
};



//More Callbacks 
//Take another look at the function expression declared in cb, and the provided 
//callbacks in 5+6. What we have in cb is a very generic function, that can take 
//any callback that can do something with two numbers and return a value.

// (4)
// Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function

var mul = function (n1, n2) {
    return n1 * n2;
};
console.log(cb(3, 3, mul));


// (5)
// Call cb, this time with an anonymous function that divides the first argument with the second

console.log(cb(9, 3, function div(n1, n2) {
    return n1 / n2;
}));

// Callbacks (with map, filter and forEach)

// (1)
// Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). 
// Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.


let array = ["Lars", "Peter", "Jan", "Ian"];
let newarray = array.filter(array => array.length <=3);
// Use the forEach method to iterate and print (console.log) both the original and the new array.


// (2)
// Use the names-array created above, and, using its map method, create a new array with all names uppercased.

array2 = array.map(function (array) { 
    return array.toUpperCase();
});


// (3)
// Use map, join + just a little bit more to create a function, which given the
// array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string 
// with the HTML for the names in an <ul>

Doesn't work

var html = function(array) {
    let htmloutput;
    htmloutput + "<ul>";
    array.forEach(array => htmloutput+"<li>"+array+"</li>");
    htmloutput + "<ul>";
    return htmloutput;
};

let test;
test + "<ul>";
function logger(n) {
    test+"<li>"+n+"</li>";
}

array.forEach(logger);
test + "<ul>";


// (4)
// Given this JavaScript array

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

// a) 
// Use the filter filter function to get arrays with only:


//Cars newer than 1999
var newerThan1999 = cars.filter(function(cars) {
  return cars.year > 1999;
});
console.log(newerThan1999);

//All Volvo’s
var allVolvos = cars.filter(function(cars) {
  return cars.make === "Volvo";
});
console.log(allVolvos);

//All cars with a price below 5000
var costBelow5000 = cars.filter(function(cars) {
  return cars.price < 5000;
});
console.log(costBelow5000);



// Asynchronous Callbacks

// (1)
//Given the code below answer, don’t execute the code, in what order you would expect to see the outputs:

var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");

//I would expect it in this order
//console.log("aaaaaaaaaa");
//console.log("dddddddddd");
//console.log("ffffffffff");
//msgPrinter ("eeeeeeeeee",1000);
//msgPrinter ("bbbbbbbbbb",2000);

// The reason is that the 3 without delay would print out first.
// Then the eee with 1 sec delay will print second last and then bbb with 2 sec delay last.


// (2) Add the code to a javascript file, execute and verify whether you answer to 1) was right

// It was.