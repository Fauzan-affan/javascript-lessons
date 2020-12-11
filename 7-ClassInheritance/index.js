// What is class inheritance?
// - A class created with a class inheritance inherits all the methods from another class

// How to implement class inheritance?
// - Use "extends" keyword for inherit a class to another classes

class User {
    constructor(email, name) {
        this.email = email, // "this.email" is a properties, "email" is a params
        this.name = name // "this.name" is a properties, "name" is a params
    }

    login = () => {
        console.log(this.email, "just logged in")
        return this
    }

    logout = () => {
        console.log(this.email, "just logged out")
        return this
    }
}

const userOne = new User("arya@gmail.com", "Arya")
const userTwo = new User("romi@gmail.com", "Romi")

class Admin extends User {
    getAllUsers = () => {
        let users = [userOne, userTwo, ceo, admin]

        console.log(users)
    }
}

const admin = new Admin("affan@gmail.com", "Affan");

class CEO extends Admin {

}

const ceo = new CEO("zaki@gmail.com", "Zaki")

// Invoke an objects with getAllusers() method
// userOne.getAllUsers() // error
// userTwo.getAllUsers() // error

admin.login().logout().getAllUsers() // pass
