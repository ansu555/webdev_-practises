let myDate = new Date(); // Creating a new date object with the current date and time
console.log(typeof myDate); // Type of `myDate` is "string" since Date

console.log(myDate.toString()); // Outputs the current timestamp in milliseconds since January 1, 1970
console.log(myDate.toDateString()); // Outputs the date in a human-readable format (e.g., "Mon Jan 09 2025")
console.log(myDate.toTimeString()); // Outputs the time in a human-readable format (e.g., "00:00:00 GMT+0000 (Coordinated Universal Time)")
console.log(myDate.toLocaleString()); // Outputs the date and time in the local timezone format

let myCreation= new Date("2025-07-3")
console.log(myCreation);
console.log(myCreation.toDateString()); // Outputs the date in a human-readable format (e.g., "Mon Jan 09 2025")

let myTimeStamp = Date.now() // Gets the current timestamp (milliseconds since January 1, 1970

console.log(myTimeStamp); // Outputs the current timestamp in milliseconds (e.g., 1683448768474)


console.log(myTimeStamp.getTime()); // Returns the timestamp of `myCreation` in milliseconds since
