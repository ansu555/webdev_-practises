// ========================== Data Type Conversion ==========================


let score = "anik";
console.log(typeof(score)); // Logs the type of `score` (string).

let valueInNumber = Number(score); // Converts `score` to a number.
console.log(typeof valueInNumber); // Logs the type of `valueInNumber` (number).
console.log(valueInNumber); // Logs the value (NaN since "anik" cannot be converted to a number).

// Examples of `Number` conversions:
// "33" => 33
// "33abc" => NaN (Not a Number)
// Null => 0
// undefined => NaN
// true => 1
// false => 0

let isLoggedIn = "anik"; // Non-empty string.
console.log(isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn); // Converts string to a boolean.
console.log(booleanIsLoggedIn); // Logs `true` since non-empty strings are truthy.

// Examples of `Boolean` conversions:
// 1 => true, 0 => false
// "" => false (empty string is falsy)
// "anik" => true (non-empty string is truthy)

let someNumber = 33; // Number.
let stringNumber = String(someNumber); // Converts number to string.
console.log(typeof stringNumber); // Logs `string`.

// ========================== Arithmetic Operations ==========================

let value = 3;
let negValue = -value; // Negates the value.
console.log(negValue); // Logs `-3`.

console.log(2 + 2); // Addition.
console.log(2 - 2); // Subtraction.
console.log(2 * 2); // Multiplication.
console.log(2 ** 3); // Exponentiation (2^3 = 8).
console.log(2 / 3); // Division.
console.log(2 % 3); // Modulus (remainder of 2/3).

// ========================== String Operations ==========================

let str1 = "anik";
let str2 = " das";
let str3 = str1 + str2; // Concatenates `str1` and `str2`.
console.log(str3); // Logs "anik das".

console.log("1" + 2); // Logs `12` (string concatenation).
console.log(1 + "2"); // Logs `12`.
console.log(1 + 2 + "3"); // Logs `33` (number addition first, then string concatenation).
console.log("1" + 2 + 3); // Logs `123` (string concatenation all the way).

console.log(+true); // Converts `true` to number (1), but not recommended.
console.log(+""); // Converts empty string to 0, but not recommended.

// ========================== Increment and Decrement ==========================

let gameCounter = 100;
++gameCounter; // Pre-increment.
console.log(gameCounter); // Logs `101`.

let a = 3;
const b = a++; // Post-increment: `b` gets the value before incrementing.
console.log(a, b); // Logs `4, 3`.

let a2 = 3n; // BigInt.
const b2 = a2++; // Post-increment for BigInt.
console.log(a2, b2); // Logs `4n, 3n`.

let x = 3;
const y = ++x; // Pre-increment: `y` gets the value after incrementing.
console.log(x, y); // Logs `4, 4`.

let x2 = 3n; // BigInt.
const y2 = ++x2; // Pre-increment for BigInt.
console.log(x2, y2); // Logs `4n, 4n`.

// Invalid syntax for double prefix increment:
// ++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation.


