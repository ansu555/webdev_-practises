function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username"); // Handles empty username
        return;
    }
    return `${username} just logged in`; // Message showing login
}