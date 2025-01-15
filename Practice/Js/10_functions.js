// Function to log each character of "HITESH"
function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName() // Unused function

// Function to add two numbers and return the result
function addTwoNumbers(number1, number2) {
    // Simplified addition logic
    return number1 + number2;
}

const result = addTwoNumbers(3, 5); // Example: adds 3 and 5, result is 8
// console.log("Result: ", result); // Unused logging

// Function to log in a user with default username as "sam"
function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username"); // Handles empty username
        return;
    }
    return `${username} just logged in`; // Message showing login
}

// console.log(loginUserMessage("hitesh")) // Example: returns "hitesh just logged in"
// console.log(loginUserMessage()) // Example: returns "sam just logged in"

// Function to handle rest parameters and return additional cart values
function calculateCartPrice(val1, val2, ...num1) {
    return num1; // Returns all extra values as an array
}

// Example: calculateCartPrice(200, 400, 500, 2000)
// Returns [500, 2000]

// Object for testing
const user = {
    username: "hitesh",
    prices: 199
};

// Function to handle and log object properties
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) // Example: logs details of the `user` object
handleObject({
    username: "sam",
    price: 399
}); // Example: logs "Username is sam and price is 399"

// Array for testing
const myNewArray = [200, 400, 100, 600];

// Function to return the second value of an array
function returnSecondValue(getArray) {
    return getArray[1]; // Accesses the second element
}

// Example: returnSecondValue(myNewArray) -> Returns 400
console.log(returnSecondValue([200, 400, 500, 1000])); // Outputs 400


//-------------------------------------------------------------- Scope ---------------------------------------------------------------------------

let a=10
const b=20
var c=30

if(true){
    let a=10
const b=20
//var c=30 // dont use var
}

console.log(a);
console.log(b);
//console.log(c); // var


function one(){
    const username = "hitesh"

    function two(){
        const website ="youtube"
     console.log(username);
     
    }
   // console.log(website);
    two()
}

one()