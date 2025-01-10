// Globe scope

let lastName = "pain";
let firstName = "max";

{
  let lastName = "john";
  let firstName = "soap";

  // Local Scope
  let fullName = "$(firstName) $(lastName)";
  console.log(fullName);
}

console.log(fullName);
console.log(lastName);

//  console.log(fullName);  // reference error

console.log(window);

pollution = "sucks";

console.log(window.pollution);
console.log(pollution);

// //var
// {
//     var x = 1;
//     {
//         var x = 2;  // saME VARIABLE!
//         console.log(x);   //  2
//     }
//     console.log(x);  //  2
// }

// {
//     let x = 1;
//     {
//         let x = 2;  // different VARIABLE!
//         console.log(x);   //  2
//     }
//     console.log(x);  //  1
// }

let x = 10
{
    let y = 5;
    {
        let z = x + y;  
        
    }
    console.log(z);
}

let total =10;

if(total === 10) {
    // console.log( total is equals to ${total});
} else{
    console.log('sorry total is not equals to 10');
}

console.log('end of script');

userAge = 6;

// ages 6-13
if (userAge <= 13 && userAge >= 6) {
    console.log("Kids Team");

// 14-17
} else if (userAge < 18) {
    console.log("Teenagers Team");

// 18 and up
} else if (userAge >= 18) {
    console.log('Adult Team');

} else {
    console.log("Age is not valid");
}

console.log("end of script"); // <----------

// Switch Statement

let statusCode = 201;

switch (statusCode) {
    case 200:
        console.log("Request was successful");
        break;
    case 201:
        console.log("Success and created");
        break;
    case 404:
        console.log("No found!");
        break;
    case 500:
        console.log("Server Error!");
        break
    default:
        console.log("Invalid Status Code");
}

// ======= Ternary Op ============
let isAuthenticated = false;

let authorized = isAuthenticated ? "Granted" : "Denied";

console.log(authorized);

// ======= if else ============
let auth;

if (isAuthenticated) {
    auth = "Granted"
} else {
    auth = "Denied"
}

let orderAmount = 100;

try {
    // any errors will be pass to the catch block
    if (orderAmount < 0) {
        console.log("Try Again!");
    } else {
        throw "Error with payment" // <----
    }
    
} catch (error) {
    // access the error in the "error" variable
    console.log(error); // <--- 

    alert(`Amount ${orderAmount} not valid`)
}


console.log("Does this log?");