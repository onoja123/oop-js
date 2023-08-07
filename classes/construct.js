// Defined a constructor function called User to create user objects
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function() {
        console.log(this.email, 'has logged in')
    }
}

// Create instances of User class using a function
var userOne = new User('tt@gmail.com', 'tt');
var userTwo = new User('test@gmail.com', 'test');


//Output userOne object details
console.log(userOne)
userOne.login()