
//console logs are used for debug our code 
console.log("Hello from External Script")
console.log(100)
console.log(true)

//Variables
var myvariable = "my first variable";
let username = "user123";
let loggedIn = true;

// absent of value
let password = null;
console.log(password);

//constant variable
const PI = 3.14;
console.log(PI);

//undefined variable
let someValue
console.log(someValue);

//store the new value
someValue = 23.5
console.log(someValue);

let _address ="123 Main Street"
console.log(useradresss)

// ============== Variable declaration rules ======

let x = 10; // global scope
console.log("global: ", x);

{
    // local/block scope
    x = 2;
    console.log("block: ", x);
    let y = 100;
}

console.log("bottom: ", x);






// Check data type of literals and variables
console.log( typeof x);
console.log( typeof useradresss);
console.log(typeof PI);
console.log(typeof loggedIn);

console.log(typeof "Hi!");
console.log(typeof 500);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
