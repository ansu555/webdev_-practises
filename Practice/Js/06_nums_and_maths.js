// ========================== Number Basics ==========================

const score = 400;
console.log(score); 

const balance = new Number(100); // Dedicated Number object, not recommended for general use.
console.log(balance); 

console.log(balance.toString().length); 
// Converts the number to a string and logs its length (number of digits).

console.log(balance.toFixed(2)); 
// Formats the number to 2 decimal places and returns a string.

const otherNumber = 123.84566;
console.log(otherNumber.toPrecision(3)); 
// Formats the number to 3 significant digits. Rounds as needed (e.g., 123.84566 → 124).

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); 
// Formats the number according to Indian numbering system (1,00,000).

// ========================== Math Object Basics ==========================

console.log(Math); 
// Logs the `Math` object which provides mathematical constants and functions.

console.log(Math.abs(-4)); 
// Returns the absolute value of -4 (removes the sign, so output is 4).

console.log(Math.round(4.9)); 
// Rounds 4.9 to the nearest integer (output: 5).

console.log(Math.ceil(4.2)); 
// Rounds 4.2 UP to the nearest integer (output: 5).

console.log(Math.floor(4.9)); 
// Rounds 4.9 DOWN to the nearest integer (output: 4).

console.log(Math.min(4, 9, 3, 5)); 
// Returns the smallest value among the arguments (output: 3).

console.log(Math.random()); 
// Generates a random number between 0 (inclusive) and 1 (exclusive).

console.log((Math.random() * 10) + 1); 
// Generates a random number between 1 (inclusive) and 11 (exclusive).

// ========================== Random Numbers in Range ==========================

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
/* Generates a random integer between min (10) and max (20), inclusive.
   1. (max - min + 1): Calculates the range.
   2. Math.random() * range: Scales the random number to the range.
   3. Math.floor(): Ensures the result is an integer.
   4. + min: Shifts the range to start from `min`.
*/

// ========================== Summary ==========================

/*
- `toString()`: Converts a number to a string.
- `toFixed(n)`: Formats a number to `n` decimal places.
- `toPrecision(n)`: Formats a number to `n` significant digits.
- `toLocaleString(locale)`: Formats a number according to the specified locale.

Math Functions:
- `Math.abs(x)`: Absolute value of `x`.
- `Math.round(x)`: Rounds `x` to the nearest integer.
- `Math.ceil(x)`: Rounds `x` UP to the nearest integer.
- `Math.floor(x)`: Rounds `x` DOWN to the nearest integer.
- `Math.min(...args)`: Smallest number among the arguments.
- `Math.max(...args)`: Largest number among the arguments.
- `Math.random()`: Generates a random decimal between 0 and 1.
- Random Integer Formula: `Math.floor(Math.random() * (max - min + 1)) + min`
*/
