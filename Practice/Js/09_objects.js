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

//-------------------------------------------------------------------------- Part 2 -----------------------------------------------------------------------------------------

console.log("part 2");

const tinderUser = new Object(); // or , const tinderUser = {} same

tinderUser.id = "1234er";
tinderUser.name = "anik";
tinderUser.isLogggedIn = false;

console.log(tinderUser);

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

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// const obj3 = {obj1,obj2}

// const obj3 =Object.assign({}, obj1, obj2) // why we use {} ?
// const obj4 =Object.assign( obj1, obj2)

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
console.log(`print the obj3,${JSON.stringify(obj3)}`); // same as normal print

const users = [
  {
    id: 1,
    email: "anik33333.com",
  },
  {
    id: 1,
    email: "anik33333.com",
  },
  {
    id: 1,
    email: "anik33333.com",
  },
];
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogggedIn'));


