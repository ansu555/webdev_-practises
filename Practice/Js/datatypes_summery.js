// Premitive types
// 7 types : string, Number, Boolearn, Undefined, Symbol, Bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const outsideTemp = null

let userEmail;

const Id = Symbol ('123')
const anotherId = Symbol ('123')
console.log(Id === anotherId);

const bigNumber = 32456789098765434567777789976555789n // bigInt

// Reference Type / Non premitive
// Arrays, Objects, Functions

const heros = ["saktiman" , "batman", "doga"];
let myObj= {
    name : "saktiman",
    age:89,
}

const myFunction  = function(){
    console.log("Hello world");
}

// Non premitive types return is always object
// Return of function is object function