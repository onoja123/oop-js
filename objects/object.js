// Define an object named 'userOne' representing a user with properties 'email', 'name', and methods 'login()' and 'logout()'.
var userOne = {
    email: "test@gmail.com",
    name: "Test",

    // Method to log a message indicating that the user has logged in, using the 'email' property of the object.
    login() {
        console.log(this.email, "Has logged in")
    },

    // Method to log a message indicating that the user has logged out, using the 'email' property of the object.
    logout() {
        console.log(this.email, "Has logged out")
    }
}


// Output the value of the 'name' property of the 'userOne' object to the console.
console.log(userOne.name)