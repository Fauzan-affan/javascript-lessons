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

// console.log('Try change value of properties')
// console.log(userOne.email)
// userOne.email = 'Arya@gmail.com'
// console.log(userOne.email)

// console.log(`How to acces properties with obj.properties or object['properties']`)
// console.log(userOne.email)
// console.log(userOne['email'])

// console.log('Assign properties in some variabel, and try to access with obj[variabel]')
// let prop = 'email'
// console.log(userOne[prop])
// console.log(userOne.prop) // error

// console.log('Create a new properties inside existing object')

// console.log(userOne)

// let newProp = 'age'
// userOne[newProp] = 20
// console.log(userOne)

// newProp = 'signUp'
// userOne[newProp] = function() {
//     userOne.email = 'Hacktiv8@gmail.com'
//     console.log(userOne.email)
// }
// console.log(userOne)
