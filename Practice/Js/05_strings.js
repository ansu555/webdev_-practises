const name = "anik"
const repocount = 50
// console.log(name+repocount+"value");

console.log(`hello my name is  ${name} and my repo count is ${repocount}`); // modern version of previous comment

const gamename =  new String ('anik2003-valo-chele')  // new is a object
console.log(gamename[0]);
console.log(gamename.__proto__); // proto is a object

console.log(gamename.toUpperCase());
console.log(gamename.charAt(3)); //find the character at 3rd index
console.log(gamename.indexOf('k')); // find the position of character




const newString = gamename.substring(0,4) //for substring when we give negative value it take it as "0" and start from "0"
console.log(newString);

const anotherString = gamename.slice(-7,4) // for slice when we give negative value it will start from end of string
console.log(anotherString);

const newString1 = "    HIIII     "
console.log(newString1);
console.log(newString1.trim()); // trim out the extra spaces


const url = "https://myPortfolio/Anik%20Das" // %20 is space is js
console.log(url.replace('%20','_'));  // replace the space with "_" using .replace

console.log(url.includes('rog')); // check if the string contains the word "rog"

console.log(gamename.split('-')); // split the string with "-" and return an array
 