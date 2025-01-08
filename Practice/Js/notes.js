// 5:11 [ Setting up environment ] 
// 1 The difference between .js and .txt file is that .js file can be run
// 2 Environment Node js/ deno js (in past html was needed but not now)

// 16:53 [ Git hub ]
// 1 code 
//     ctrl  + shft + p add dev configuration file

// 27:14 [ let var const ]

// 1 variable declaring best practices 

// 2 const variable can't be modified 

// 3 console.table

// 4 js used to not work on scope

// 5 prefer not use var

// 6 variable with out initializing is undefined


// 43:54 [ data types ECMA standard ]

// 1 use strict 

// 2 alert (" ")

// 3 only code execution is not but goal should always be readable (prettier)

// 4 mdn doc tc39

// 5 data types

//    - number

//    - bugInt

//    - string

//    - boolean

//    - null

//    - undefined 

//    - symbol 

// Null is object


// Object


// 1:01:55 [ data type conversation ]


// - type of normal = lowercase

// - "33" => 33 number

// - "33abc" => NaN 

// - true => 1

// - false => 0

// - 1  , " "  => true

// - 0 , " " , "abc" => false


// 1:14:46 [ why string to number]

// Arithmetic Operation

// 1 + "2" => 12

// 3 + 3 - 3 * 3 / 3 +( 2 + 2 )

// +true  => 1

// +""  => 0

// Prefix increment

// Postfix increment 


// 1:29:49 [ comparison of data type ]

// >

// <

// <=

// >=

// ==

// ===

// (Don't compare different data types)

// null > 0

// null< 0

// null <= 0 => true bcz null is converted to 0

// [Summary]

// - Comparing same datatypes are easy to predict 

// - Don't compare different data types



// 1:38:38 [ data type summary ]

// - interview related questions 

// - primitive and non primitive (call by value, call by reference)

// - primitive:7 (call by value)

// - string, number, bolean, null, undefined, symbol , BigInt

// - non primitive:3 (call by reference)

// - arrays, object, function 


// - dynamically type vs statically type

// - js is dynamically typed

// - const id = Symbol("123")

// - const anotherId = Symbol("123")

// - id === anotherId => false

// - array, object, function overview 

// - typeof datatyped is available on documentation 


// 01:56:40  -  [ stack and heap memory ]
// - Primitive data type goes to Stack we get a copy of that value.
// - Non-Primitive data type goes to Heap we get refrence of that value.  

// 02:06:34 [ Strings in JS ]
// - strings can be donated by ' or "
// - to concatenate we can use 
// - back tick (sting interpolations)
// e.g `hello ${name}`
// - sting is object but it has length property
// - it can be access as
// e.g stringName[0]
// - stringName._proto_
// - stringName.toUpperCase()
// - stringName.charAt()
// - stringName.indexAt()
// - stringName.substing(0,4) can have -ve value
// - stringName.slice(-7,4) can have -ve value
// - stringName.trim() , .trimStart(), .trimEnd()
// - stringName.replace('what to search', 'what to replace with')
// - stringName.includes('name')
// - stringName.split('sepater','limit')
// - search for small() yourself

// 02:29:17 -  [ Number and maths ]
// =========== Number ===========
// - Type conversation 
// -const score = 400 (implicit)
// -balance = new Number(100) (explicit, this return an object)
// - use _proto_ on both as previous to get all methods
// const balance = 100.12323 
// // used for how many values after decimal
// -balance.toFixed(2) // 100.12
// // used for how many values to take in total (priority is before decimal)
// - balance.toPrecision(4) // 100.1 (returns a string)
// const hundreds = 1000000
// hundreds.toLocaleString('en-IN'); // inserts commas
// -balance.toString()
// =========== Maths ===========
// // console.log(Math.abs(-4));
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(4.2));
// // console.log(Math.floor(4.9));
// // console.log(Math.min(4, 3, 6, 8));
// // console.log(Math.max(4, 3, 6, 8));
// console.log(Math.random());
// console.log((Math.random()*10) + 1);

// 02:52:34  -  [ date and time ] (I know following code is a mess but will try to give a consice note on date)
// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
// Note: TC39 is working on Temporal

// let myDate = new Date() 
// console.log(myDate); // 2024-01-04T07:35:09.154Z
// console.log(myDate.toString()); // Thu Jan 04 2024 07:35:09 GMT+0000 (Coordinated Universal Time)
// console.log('dateString '+ myDate.toDateString()); // dateString Thu Jan 04 2024
// console.log('isoString '+ myDate.toISOString()); // isoString 2024-01-04T07:35:09.154Z
// console.log('JSON '+ myDate.toJSON()); // JSON 2024-01-04T07:35:09.154Z
// console.log('LocaleDateString '+ myDate.toLocaleDateString()); // LocaleDateString 1/4/2024
// console.log('LocaleString '+ myDate.toLocaleString()); // LocaleString 1/4/2024, 7:35:09 AM
// console.log('LocaleTimeString '+ myDate.toLocaleTimeString()); // LocaleTimeString 7:35:09 AM

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log('dateString '+ myDate.toDateString());
// console.log('isoString '+ myDate.toISOString());
// console.log('JSON '+ myDate.toJSON());
// console.log('LocaleDateString '+ myDate.toLocaleDateString());
// console.log('LocaleString '+ myDate.toLocaleString());
// console.log('LocaleTimeString '+ myDate.toLocaleTimeString());

// myDate 2024-01-04T07:35:09.154Z
// String Thu Jan 04 2024 07:35:09 GMT+0000 (Coordinated Universal Time)
// dateString Thu Jan 04 2024
// isoString 2024-01-04T07:35:09.154Z
// JSON 2024-01-04T07:35:09.154Z
// LocaleDateString 1/4/2024
// LocaleString 1/4/2024, 7:35:09 AM
// LocaleTimeString 7:35:09 AM

// // creating a custom date (months start from 0)
// let myCreatedDate = new Date(2023, 0, 23) // Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") // YYYY-MM-DD month start from 1
// let myCreatedDate = new Date("01-14-2023");
// // MM-DD-YYYY console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // milli seconds passed from January 1, 1970
// console.log(myCreatedDate.getTime()); // returns time in milliseconds
// console.log(Math.floor(Date.now()/1000)); // returns time in seconds

// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth() + 1); // starts from 0
// console.log(newDate.getDay()); // starts from monday

// `${newDate.getDay()} and the time ` use back ticks to create full date and time

// newDate.toLocaleString("default", {
//   weekday: "long",
// }); 