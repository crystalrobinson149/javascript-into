
console.log(5 > 4); // true
console.log(5 < 4); // false

console.log(3 >= 4); // false
console.log(3 >= 3); // true


console.log(10 <= 44); // true

console.log(100 == 100);
console.log(100 == 10);

// ===================================
// (==) type conversion
console.log(3 == "3"); // true

// (===) No type conversion [check for value and data type]
console.log(3 === "3"); // false

//
console.log(10 != 100); // true
console.log(10 != 10); // false

// (!=) type conversion
console.log(10 != "10"); // false

// (!==) No type conversion
console.log(10 !== "10"); // true

console.log(3 + 3); // 6
console.log(3 + "3"); // "33"
console.log("6" + 6); // "66"
console.log("hello" + "world"); // "helloworld"

//
let result = 3 + 3;

console.log(result);


console.log(result);


let accountBalance = 100

let price = 10

let purchaseValid = price < accountBalance;

if (purchaseValid) {
    alert("thanks for your purchase")
}

console.log(purchaseValid);