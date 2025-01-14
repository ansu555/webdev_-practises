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
  lastLoginDays: ["monday", "saturday"], // Array property holding recent login days.
};

console.log(JsUser.email); // Output: "anik2365@gmail.com"
// console.log(JsUser[email]); // Uncommenting this will cause an error because "email" is not defined.
console.log(JsUser["email"]); // Output: "anik2365@gmail.com" - Accessing the property as a string.
console.log(JsUser[mySym]); // Output: "mykey" - Accessing the symbol property.
console.log(typeof JsUser[mySym]); // Output: "string"

// **Modifying Properties**
JsUser.email = "chatGPT.com"; // Updates the "email" property to a new value.
 Object.freeze(JsUser) // Uncommenting this will prevent any further modifications to the object.
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

// Key Points for Methods:

// 1. **Adding Methods to Objects**:
//    - Methods can be added dynamically as properties, e.g., `JsUser.greeting`.
//    - Functions assigned to properties are treated as methods of the object.

// 2. **Using `this` in Methods**:
//    - `this` refers to the current object (`JsUser`) when invoked in the method context.
//    - Allows dynamic referencing of the object's properties, such as `this.name`.

// 3. **Accessing Properties**:
//    - Dot notation (`JsUser.email`) is used for standard properties.
//    - Bracket notation (`JsUser["full name"]`) is used for properties with spaces or special characters.
//    - Symbols are accessed using their respective variable (`JsUser[mySym]`).

// 4. **Modifying Properties**:
//    - Properties can be updated directly unless the object is frozen with `Object.freeze()`.

// 5. **Freezing Objects**:
//    - `Object.freeze()` prevents modifications to properties, effectively making the object immutable.

// 6. **Output of Method Definitions**:
//    - Printing a method, e.g., `console.log(JsUser.greeting)`, shows the function definition.
//    - Invoking a method runs its code, e.g., `console.log(JsUser.greetingTwo())`.

//-------------------------------------------------------------------------- Part 2 -----------------------------------------------------------------------------------------

// PART 2 NOTES

// 1. Creating an object using `new Object()` or `{}`
const tinderUser = new Object(); // Same as const tinderUser = {};
tinderUser.id = "1234er";
tinderUser.name = "anik";
tinderUser.isLogggedIn = false;

console.log(tinderUser);
// Output: { id: '1234er', name: 'anik', isLogggedIn: false }

// 2. Nested objects
const regularUser = {
  email: "anik200365@gmail.com",
  fullname: {
    userFullName: {
      firstName: "anik",
      lastName: "das",
    },
  },
};

console.log(regularUser.fullname.userFullName);
// Output: { firstName: 'anik', lastName: 'das' }

// 3. Merging objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Using Object.assign()
const obj3 = Object.assign({}, obj1, obj2);
// Why use `{}`? It creates a new object to avoid mutating `obj1`.
console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// Without `{}`, Object.assign mutates the first object.
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// NOTE: obj1 is now modified.

// Using spread operator
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log(`print the obj3,${JSON.stringify(obj3)}`);
// Same as normal print: Converts `obj3` to a JSON string.

// 4. Array of objects
const users = [
  { id: 1, email: "anik33333.com" },
  { id: 2, email: "anik22222.com" },
  { id: 3, email: "anik11111.com" },
];
console.log(users[1].email);
// Output: anik22222.com

// 5. Object methods
console.log(Object.keys(tinderUser));
// Output: [ 'id', 'name', 'isLogggedIn' ]
// Returns an array of the object’s keys.

console.log(Object.values(tinderUser));
// Output: [ '1234er', 'anik', false ]
// Returns an array of the object’s values.

console.log(Object.entries(tinderUser));
// Output: [ ['id', '1234er'], ['name', 'anik'], ['isLogggedIn', false] ]
// Returns an array of key-value pairs as subarrays.

console.log(tinderUser.hasOwnProperty("isLogggedIn"));
// Output: true
// Checks if the object has the specified key.

// Key Points:
// - `Object.keys(obj)` returns an array of the object’s keys.
// - `Object.values(obj)` returns an array of the object’s values.
// - `Object.entries(obj)` returns key-value pairs in an array.
// - `Object.assign(target, ...sources)` merges objects into the target.
//   - If `target` is empty ({}), a new object is created.
// - Spread operator (`...`) is a cleaner way to merge objects.
// - `hasOwnProperty(key)` checks if an object has a specific property.

//------------------------------------------------------------- Part 3 -------------------------------------------------------------------------

// **Destructuring in JavaScript**

// **1. Object Destructuring:**
const course = {
    courseName: "chai aur code",
    price: "0",
    courseInstructure: "hitesh"
};

// Basic Syntax:
const { courseName, price, courseInstructure } = course;
console.log(courseName, price, courseInstructure);
// Output: chai aur code 0 hitesh

// Renaming Properties:
const { courseInstructure: Insstructure } = course;
console.log(Insstructure);
// Output: hitesh

// Default Values:
const { duration = "3 hours" } = course;
console.log(duration);
// Output: 3 hours

// Nested Objects:
const student = {
    name: "anik",
    details: {
        age: 21,
        city: "Kolkata"
    }
};
const { details: { age, city } } = student;
console.log(age, city);
// Output: 21 Kolkata

// **2. Array Destructuring:**
const scores = [10, 20, 30];

// Basic Syntax:
const [first, second, third] = scores;
console.log(first, second, third);
// Output: 10 20 30

// Skipping Elements:
const [, , last] = scores;
console.log(last);
// Output: 30

// Default Values:
const [a, b, c, d = 40] = scores;
console.log(d);
// Output: 40

// **3. Mixed Destructuring:**
const data = {
    name: "anik",
    marks: [95, 85, 75]
};
const { name, marks: [math, science, english] } = data;
console.log(name, math, science, english);
// Output: anik 95 85 75

// **4. Destructuring with Functions:**
const getUser = () => ({
    id: 101,
    username: "anik"
});

const { id, username } = getUser();
console.log(id, username);
// Output: 101 anik

// Function Parameters:
const printUser = ({ id, username }) => {
    console.log(`ID: ${id}, Username: ${username}`);
};
printUser({ id: 102, username: "hitesh" });
// Output: ID: 102, Username: hitesh

// **Key Points:**
// 1. Destructuring simplifies extracting values from objects and arrays.
// 2. Use default values to handle undefined properties or elements.
// 3. Nested destructuring allows accessing deeply nested values.
// 4. Use aliases for renaming properties while destructuring.
// 5. Destructuring can be used with function parameters to enhance readability and reduce boilerplate code.


//destructuing in JSON API
