//singleton what is it ?? when it from and when doesn't?

//objects literals

const mySym = Symbol("key1")

// console.log(typeof mySym);


const JsUser={ 
    name:"anik",
    "full name":"anik das", // you have to access this by console.log(JsUser["full name"])
    age: 18,
    [mySym]:"mykey", //symbol is Declared like that , and you have to access the symbol console.log(JsUser[mysym])
    location:"jaipur",
    email: "anik2365@gmail.com",
    isLogggedIn:false,
    lastLoginDays:["monday","saturday"]
}
console.log(JsUser.email);
// console.log(JsUser[email]); // in the object email is store as a string so we need to access it as a string
console.log(JsUser["email"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);



myArr=["h","i"]
