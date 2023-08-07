// Define a class called User to represent user objects
class User {
    // Constructor function to initialize user properties of email and name
    constructor(email, name) {
        this.email = email; 
        this.name = name;  
    }

    // Method to simulate a user login 
    login() {
        console.log(this.email, 'just logged in');
    }

    // Method to simulate a user logout
    logout() {
        console.log(this.email, "just logged out");
    }
}

// Create instances of User and log results
var userOne = new User('tt@gmail.com', "tt");
console.log(userOne);

var userTwo = new User('test@gmail.com', 'test');
console.log(userTwo); 

// Perform a login action  for userOne
userOne.login(); 

// Perform a logout action for userOne
userOne.logout(); 
