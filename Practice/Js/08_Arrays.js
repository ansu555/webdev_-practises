// Array Basics and Manipulation Examples

const myArr = [0,1,2,6,7,8];
const myHeros = ['krish','saktiman'];
const myArr2 = new Array(1,2,3,4);

// Accessing elements:

console.log(myArr[3]); // Output: 6

// Array methods:
myArr.push(9) //- Adds 9 at the end of myArr.
myArr.pop() //- Removes the last element.
myArr.unshift(0) //- Adds 0 at the beginning.
myArr.shift() //- Removes the first element.
console.log(myArr);

// Check if an element exists:
console.log(myArr.includes(9)); // Output: true/false

// Find the index of an element:
console.log(myArr.indexOf(6)); // Output: Index of 6 (if present)

// Convert array to string:
const newArr = myArr.join();
console.log(newArr); // Output: "0,1,2,6,7,8"
console.log(typeof newArr); // Output: string

// Slice and Splice:
console.log("a", myArr); // Original array

const myN1 = myArr.slice(1,3); // Returns elements from index 1 to 2 (not inclusive of 3).
console.log(myN1); // Output: [1,2]

console.log("b", myArr); // Original array remains unchanged.
const myN2 = myArr.splice(1,3); // Removes elements from index 1 to 3 (inclusive).
console.log(myN2); // Output: [1,2,6]
console.log("original array", myArr); // Original array modified: [0,7,8]

//--------------------------------------------------- part 2 ---------------------------------------------------------

const marveHeros = ["thor","ironman","spiderman"];
const dc = ["superman","aquaman","Batman"];

// Merge arrays using concat:
const allHeros = marveHeros.concat(dc); // Returns a new merged array
console.log(allHeros); // Output: ["thor","ironman","spiderman","superman","aquaman","Batman"]

// Merge arrays using spread operator:
const allNerHeros = [...marveHeros, ...dc];
console.log(allNerHeros); // Output is same as concat.

// Flatten a nested array:
const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArr = anotherArr.flat(Infinity); // Flattens all levels of nested arrays.
console.log(realAnotherArr); // Output: [1,2,3,4,5,6,7,6,7,4,5]

// Array checks and creation:
console.log(Array.isArray("anik")); // Output: false (String is not an array)
console.log(Array.from("anik")); // Output: ["a","n","i","k"] (Creates an array from string)
console.log(Array.from({name: "anik"})); // Output: [] (Objects are not iterable)


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]

// Summary:
// - slice(start, end): Extracts elements from start to end (end not included). Original array remains unchanged.
// - splice(start, count): Removes count elements from start index. Modifies the original array.
// - concat(...arrays): Merges arrays into a new array.
// - flat(depth): Flattens nested arrays up to the specified depth.
// - Array.isArray(variable): Checks if a variable is an array.
// - Array.from(iterable): Converts iterable objects (like strings) into arrays.
// - Array.of(...elements): Creates a new array with the given elements.
