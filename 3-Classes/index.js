// How to create multiple object manualy
let userOne = {
    email: 'fauzan@gmail.com',
    name: 'Fauzan',
    login(){
        console.log(this.email, 'is now online')
    },
    logout(){
        console.log(this.email, 'was logged out')
    }
}

let userTwo = {
    email: 'affan@gmail.com',
    name: 'Affan',
    login(){
        console.log(this.email, 'is now online')
    },
    logout(){
        console.log(this.email, 'was logged out')
    }
}

let userThree = {
    email: 'zaki@gmail.com',
    name: 'Zaki',
    login(){
        console.log(this.email, 'is now online')
    },
    logout(){
        console.log(this.email, 'was logged out')
    }
}

// How to create class
class User {
    // properties 1
    // properties 2
    // properties 3
    // properties 4
}

// How to instance object from class
const userOne = new User // Instance a new object called userOne
const userTwo = new User // Instance a new object called userTwo
const userThree = new User // Instance a new object called userThree

