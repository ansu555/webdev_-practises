// **Singleton Pattern**
// A Singleton is a design pattern where only one instance of a class/object exists throughout the application.
// It's useful for managing global app state, configuration, or shared resources.
// When it works: When you need a single, shared instance.
// When it doesn't work: Overuse can lead to global state management issues, making debugging harder.

// **Object Literals**
const mySym = Symbol("key1"); // Declares a unique symbol with a description "key1".
console.log(typeof mySym); // Output: "symbol"

// **Object Definition and Properties**
const JsUser = { 
    name: "anik", // A standard string property.
    "full name": "anik das", // A property with spaces, accessed using bracket notation.
    age: 18, // A number property.
    [mySym]: "mykey", // A symbol property for creating unique keys.
    location: "jaipur", // A standard string property.
    email: "anik2365@gmail.com", // Email address.
    isLogggedIn: false, // Boolean property to track login status.
    lastLoginDays: ["monday", "saturday"] // Array property holding recent login days.
};

console.log(JsUser.email); // Output: "anik2365@gmail.com"
// console.log(JsUser[email]); // Uncommenting this will cause an error because "email" is not defined.
console.log(JsUser["email"]); // Output: "anik2365@gmail.com" - Accessing the property as a string.
console.log(JsUser[mySym]); // Output: "mykey" - Accessing the symbol property.
console.log(typeof JsUser[mySym]); // Output: "string"

// **Modifying Properties**
JsUser.email = "chatGPT.com"; // Updates the "email" property to a new value.
// Object.freeze(JsUser) // Uncommenting this will prevent any further modifications to the object.
JsUser.email = "ansu123@gmail.com"; // Since Object.freeze is commented, this modification works.
console.log(JsUser); 
// Output: The entire `JsUser` object with the updated "email" property.

// **Adding Methods**
JsUser.greeting = function () {
    console.log("Hello jsuser");
};
console.log(JsUser.greeting); 
// Output: [Function: greeting] - Displays the function definition.

JsUser.greetingTwo = function () {
    console.log(`hello js user, ${this.name}`); 
    // Uses `this.name` to dynamically reference the object's `name` property.
};
console.log(JsUser.greetingTwo()); 
// Output:
// "hello js user, anik"
// The function logs a message using the object's `name` property dynamically.

