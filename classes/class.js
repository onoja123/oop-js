class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;

    }
}

var userOne = new User('tt@gmail.com', "tt") 
console.log(userOne)

var userTwo = new User('test@gmail.com', 'test')
console.log(userTwo)

// 'new' used to create a new empty object
// 'this' used to call the object
