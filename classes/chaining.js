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

// Create instances of User
var userOne = new User('tt@gmail.com', "tt");
var userTwo = new User('test@gmail.com', 'test');

// Perform a login action for userOne and then chain updateScore() method twice, followed by a logout action
userOne.login().updateScore().updateScore().logout()

