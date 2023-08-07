class User {
    // Constructor function to initialize user properties of email and name and a constant score of 0 for every user
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;

    }
    // Method to simulate a user login
    login() {
        console.log(this.email, 'just logged in')
        return this;
    }

    // Method to simulate a user logout
    logout() {
        console.log(this.email, "just logged out")
        return this;
    }

    // Method to update a user score
    updateScore() {
        this.score ++;
        console.log(this.email, "score is now", this.score);
        return this;

    }
}

// Define a subclass called Admin that inherits from User
class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

// Create instances of User and Admin classes
var userOne = new User('tt@gmail.com', 'tt');
var userTwo = new User('test@gmail.com', 'test');
var admin = new Admin('admin@gmail', 'Admin')

// Store the user instances and admin instance in the users array
var users = [userOne, userTwo, admin];

// Delete userOne from the users array using the admin instance
admin.deleteUser(userOne)
console.log(users)