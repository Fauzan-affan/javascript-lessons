// - Every "this" keyword is the pronoun of object

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

    signUp = (email, name) => {
        this.email = email,
        this.name = name
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
// userOne.signUp("dono@gmail.com", "Dono")
userOne.login().logout().signUp("dono@gmail.com", "Dono") // error and just invoke login()
// userOne.signUp("dono@gmail.com", "Dono")
console.log(userOne)