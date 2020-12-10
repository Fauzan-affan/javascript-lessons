// What is a constructor?
// - A function that invoked every single e new instance object created

// How to create a constructor
class User {
    constructor() {
        
    }
}

// create a new empty object {} (cz we dont have any properties in constructor righ now)
const userOne = new User // create an object (Instantiation) from class User
console.log(userOne)

// What is a "new" keyword in that instantiation?
// - create a new empty object {}
// - Sets the value of "this" to the new empty object
// - Call the constructor method

// Create new object/instance with params
// class User {
//     constructor(email, name) {
//         this.email = email, // "this.email" is a properties, "email" is a params
//         this.name = name // "this.name" is a properties, "name" is a params
//     }
// }

// const userOne = new User("arya@gmail.com", "Arya")
// console.log(userOne)