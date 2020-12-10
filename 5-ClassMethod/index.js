// How to create a method/function inside the class?
class User {
    constructor(email, name) {
        this.email = email, // "this.email" is a properties, "email" is a params
        this.name = name // "this.name" is a properties, "name" is a params
    }

    login = () => {
        console.log(this.email, "just logged in")
    }

    logout = () => {
        console.log(this.email, "just logged out")
    }
}

const userOne = new User("arya@gmail.com", "Arya")
const userTwo = new User("romi@gmail.com", "Romi")

// How to use the method?
userOne.login()
userOne.logout()

userTwo.login()
userTwo.logout()