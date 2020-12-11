// What is a constructor?
// - A function that invoked every single e new instance object created

// How to create a constructor
class User {
    constructor(name) {
        this.name = name
    }

}

// create a new empty object {} (cz we dont have any properties in constructor righ now)
const userOne = new User("Arya") // create an object (Instantiation) from class User
const userTwo = new User("Arya2") // create an object (Instantiation) from class User
const userThree = new User("Arya3") // create an object (Instantiation) from class User
const userFour = new User("Arya4") // create an object (Instantiation) from class User
console.log(userOne)
console.log(userTwo)

const userOneFunc = (name) => {
    return userOne.name = name
}

console.log(userOneFunc("Fauzan"))

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