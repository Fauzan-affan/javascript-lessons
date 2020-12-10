// - Every "this" keyword is the pronoun of object

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

// class User {
//     constructor(email, name) {
//         this.email = email, // "this.email" is a properties, "email" is a params
//         this.name = name // "this.name" is a properties, "name" is a params
//     }

//     login = () => {
//         console.log(this.email, "just logged in")
//         return this // an userOne or userTwo and have same properties in construtor
//     }

//     logout = () => {
//         console.log(this.email, "just logged out")
//         return this // an userOne or userTwo and have same properties in construtor
//     }
// }

const userOne = new User("arya@gmail.com", "Arya")
const userTwo = new User("romi@gmail.com", "Romi")

// How to use the method?
// userOne.login()
// userOne.logout()

// userTwo.login()
// userTwo.logout()

// How to invoke methode chaining?
userOne.login().logout() // error and just invoke login()
