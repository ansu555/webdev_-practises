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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive) send a copy, heap(Non Primitive) actural value


//stack
let myYoutubeNmae = "anik das "
let anotheryoutubeName = myYoutubeNmae

anotheryoutubeName = "chai aur code"

console.log(myYoutubeNmae); // => anik das

console.log(anotheryoutubeName); // => chai aur code

//------------------------------------------------------------------------------------------

//heap
let user1 = {
    userEmail :"anik2003#google.com",
    upi:"1234"
}

let user2 = user1

user2.userEmail = "anik2003#gmail.com"

console.log(user1.userEmail); //anik2003#gmail.com
console.log(user2.userEmail); //anik2003#gmail.com
