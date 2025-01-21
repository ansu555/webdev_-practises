// const gamename = new String('anik2003-valo-chele');


// const anotherString = gamename.slice(-19, 4); 
// // Extracts a portion of the string. Negative values count from the end of the string.
// console.log(anotherString); // Logs an empty string because the start index is greater than the end index.

// const myArr = [0,1,2,6,7,8];
// console.log(myArr.includes(9));

// const newArr = myArr.join();
// console.log(newArr); // Output: "0,1,2,6,7,8"
// console.log(typeof newArr); 

// console.log(typeof Array);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username"); // Handles empty username
        return;
    }
    return `${username} just logged in`; // Message showing login
}

console.log(loginUserMessage("anik"))