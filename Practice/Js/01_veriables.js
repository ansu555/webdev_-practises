// ========================== Data Types Example ==========================

const userID = 987654; // Unchangeable: A constant variable.
let userEmail = "example_user@gmail.com"; // Can be reassigned later.
var userPassword = "password123"; /* Avoid using `var` due to issues with block scope and 
                                     functional scope; use `let` or `const` instead. */

userCity = "Mumbai"; // Declaring a variable without `let`, `const`, or `var` (not recommended).

let userState; // Declared but uninitialized; default value will be `undefined`.

// userID = 123; // Uncommenting this line will throw an error because `const` variables cannot be reassigned.

console.log(userID); // Logs the unchangeable `userID`.

userEmail = "updated_user@gmail.com"; // Reassigning `let` variable.
userPassword = "new_password456"; // Reassigning `var` variable.
userCity = "Kolkata"; // Updating the variable declared without `var/let/const`.

console.table([userID, userEmail, userPassword, userCity, userState]); 
// Displays data in a table format.
