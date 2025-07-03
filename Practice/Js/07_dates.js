let myDate = new Date();
console.log(myDate.toString()); // Returns the full date and time as a string. Example: "Thu Jan 09 2025 10:40:52 GMT+0000 (Coordinated Universal Time)"
console.log(myDate.toDateString()); // Returns just the date portion as a string. Example: "Thu Jan 09 2025"
console.log(myDate.toTimeString()); // Returns just the time portion as a string. Example: "10:40:52 GMT+0000"
console.log(typeof myDate); // Type of `myDate` is "object" since Date is a built-in object in JavaScript.

let myCreatedDate = new Date("01-09-2025"); // Creating a new date from a string. Format: MM-DD-YYYY
console.log(myCreatedDate); // Outputs the created date: "Mon Jan 09 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(myCreatedDate.toLocaleString()); // Outputs the date in the local timezone format (LocaleString). Example: "1/9/2025, 12:00:00 AM"
console.log(myCreatedDate.toUTCString()); // Outputs the date in UTC format. Example: "Mon, 09 Jan 2025 00:00:00 GMT"
console.log(myCreatedDate.toJSON()); // Outputs the date in JSON format. Example: "2025-01-09T00:00:00.000Z"
console.log(myCreatedDate.getTimezoneOffset()); // Returns the time difference between local time and UTC in minutes. Example: -300 (if UTC-5 timezone)

let myTimeStamp = Date.now(); // Gets the current timestamp (milliseconds since January 1, 1970)
console.log(myTimeStamp); // Example: 1683448768474 (milliseconds)
console.log(myCreatedDate.getTime()); // Returns the timestamp of `myCreatedDate` in milliseconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000)); // Returns the current timestamp in seconds (without milliseconds). Example: 1683448768

let newDate = new Date();
console.log(newDate.getMonth()+1); // Gets the month (0-based index), so add 1 to get the human-readable month. Example: 1 for January.
console.log(newDate.getDay()); // Returns the day of the week (0 is Sunday, 1 is Monday, etc.). Example: 4 for Thursday.

newDate.toLocaleDateString('default', { weekday: "long" }); // Formats the date to show the full weekday name (e.g., "Thursday").


//---------------------------------------------------------- notes and summery -------------------------------------------------------------------------


/* Date Object

  - toString() : Returns the date and time as a string.
  - toDateString() : Returns the date as a string in the format "YYYY-MM-DD".
  - toTimeString() : Returns the time as a string in the format "HH:MM:SS".
  - toLocaleString() : Returns the date and time as a string in the local format.
  - toUTCString() : Returns the date and time as a string in the UTC format.
  - toJSON() : Returns the date and time as a string in the ISO 8601 format.
  - getTimezoneOffset() : Returns the difference between local time and UTC time in minutes.
  - getTime() : Returns the number of milliseconds since the Unix epoch (1970-01-01T00:00:00Z).
  - getMonth() : Returns the month as a number from 0 to 11.
  - getDay() : Returns the day of the week as a number from 0 to 6, with 0 being Sunday.
  - toLocaleDateString() : Returns the date as a string in the local format, with the option to specify the format options.

Important points:

  - The Date object is mutable, meaning that you can change its values.
  - The Date object is timezone-aware, meaning that it knows the local timezone and can be used to convert between local time and UTC time.
  - The Date object is used to represent a specific point in time. If you need to represent a range of time, you should use two Date objects.

Useful properties:

  - getFullYear() : Returns the year as a 4-digit number.
  - getHours() : Returns the hour as a number from 0 to 23.
  - getMinutes() : Returns the minute as a number from 0 to 59.
  - getSeconds() : Returns the second as a number from 0 to 59.
  - getMilliseconds() : Returns the millisecond as a number from 0 to 999.
  - setFullYear() : Sets the year to a 4-digit number.
  - setMonth() : Sets the month to a number from 0 to 11.
  - setDate() : Sets the day of the month to a number from 1 to 31.
  - setHours() : Sets the hour to a number from 0 to 23.
  - setMinutes() : Sets the minute to a number from 0 to 59.
  - setSeconds() : Sets the second to a number from 0 to 59.
  - setMilliseconds() : Sets the millisecond to a number from 0 to 999.
  
  */