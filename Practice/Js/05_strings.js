// ========================== Template Literals ==========================

const name = "anik";
const repocount = 50;
// Using template literals for cleaner string concatenation.
console.log(`Hello, my name is ${name} and my repo count is ${repocount}`);

// ========================== String Object ==========================

const gamename = new String('anik2003-valo-chele'); // Creating a string object using `new`.
console.log(gamename[0]); // Accessing the first character of the string.
console.log(gamename.__proto__); // Accessing the prototype object of the string.

console.log(gamename.toUpperCase()); // Converts the string to uppercase.
console.log(gamename.charAt(3)); // Finds the character at index 3 (0-based indexing).
console.log(gamename.indexOf('k')); // Finds the position of the character 'k'.

// ========================== Substring and Slice ==========================

const newString = gamename.substring(0, 4); 
// Extracts a substring from index 0 to 4 (exclusive). Negative values are treated as 0.
console.log(newString); // Logs `anik`.

const anotherString = gamename.slice(-19, 4); 
// Extracts a portion of the string. Negative values count from the end of the string.
console.log(anotherString); // Logs an empty string because the start index is greater than the end index.

// ========================== String Trimming ==========================

const newString1 = "    HIIII     ";
console.log(newString1); // Logs the original string with spaces.
console.log(newString1.trim()); // Removes the extra spaces from both ends.

// ========================== Replace and Includes ==========================

const url = "https://myPortfolio/Anik%20Das"; 
// `%20` is a URL-encoded representation of a space in JavaScript.
console.log(url.replace('%20', '_')); 
// Replaces `%20` with `_` using the `.replace` method.

console.log(url.includes('rog')); 
// Checks if the string contains the substring 'rog'. Returns `true` or `false`.

// ========================== Split ==========================

console.log(gamename.split('-')); 
// Splits the string into an array using `-` as the delimiter.
// Logs `['anik2003', 'valo', 'chele']`.
