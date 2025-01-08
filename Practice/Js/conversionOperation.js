let score = "anik"

console.log(typeof(score)); //console.log(typeof score); both are same //output string


let valueInNumber = Number(score) //converting string to number
console.log(typeof valueInNumber);

console.log(valueInNumber); 

// "33" => 33
//"33abc" => NaN (not and number)
//Null => 0
//undefined => NaN
//true => 1
//false => 0

let isLoggedIn = "anik"
console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true / 0 => false
//"" => false
//"anik" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber);


//*********************************************** operations ***********************************************/


let value =3
let negValue = -value

console.log(negValue); //-3

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3); //power
console.log(2/3);
console.log(2%3); //remainder

let str1 ="anik"
let str2 =" das"

let str3 = str1 + str2

console.log(str3);

console.log("1"+ 2); // => 12
console.log(1+"2"); // => 12
console.log(1+2+"3"); // => 33
console.log("1"+2+3); // => 123

console.log(+true); // converted but not recomended // => 1
console.log(+""); // not recomended // => 0


let gameCounter = 100

++gameCounter;

console.log(gameCounter);

 // If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

 let a = 3;
const b = a++;
// a is 4; b is 3

console.log(a,b);

let a2 = 3n;
const b2 = a2++;
// a2 is 4n; b2 is 3n

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let x = 3;
const y = ++x;
console.log(x,y);

// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

//++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
