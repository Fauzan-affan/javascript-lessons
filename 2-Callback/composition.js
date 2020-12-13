// Object composition vs inheritance
class User {
    constructor(email, name) {
        this.email = email,
        this.name = name
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

class Admin extends User {
    getAllUsers = () => {
        let users = [userOne, userTwo]

        console.log(users)
    }
}

class Sales extends User {
    getDataSales = () => {
        let salesPerformance = '88%'
        
        console.log("Sales Performance:", salesPerformance)
    }
}

const userOne = new User("arya@gmail.com", "Arya")
const userTwo = new User("romi@gmail.com", "Romi")

const admin = new Admin("affan@gmail.com", "Affan");

const sales = new Sales("zaki@gmail.com", "Zaki")

// admin.login().logout().getAllUsers()
// sales.getDataSales()

// How to create class CEO extends Admin and Sales?

// Class
// const User = (useremail, username) => {
//     return {
//         ...signUpFunction(useremail,username),
//         ...loginFunction(useremail),
//         ...logoutFunction(useremail)
//     }
// }

// const Admin = (useremail, username) => {
//     return {
//         ...signUpFunction(useremail, username),
//         ...loginFunction(useremail),
//         ...logoutFunction(useremail),
//         ...getAllUserFunction()
//     }
// }

// const Sales = (useremail, username) => {
//     return {
//         ...signUpFunction(useremail,username),
//         ...loginFunction(useremail),
//         ...logoutFunction(useremail),
//         ...getDataSalesFunction()
//     }
// }

// const CEO = (useremail, username) => {
//     return {
//         ...signUpFunction(useremail,username),
//         ...loginFunction(useremail),
//         ...logoutFunction(useremail),
//         ...getAllUserFunction(),
//         ...getDataSalesFunction()
//     }
// }

// Function
// const signUpFunction = (useremail, username) => {
//     const user = {email: useremail, name: username}
    
//     return {
//         ...user
//     }
// }

// const loginFunction = (email) => {
//     return {
//         login: () => console.log(email, "just logged in"),
//         this: this
//     }
// }

// const logoutFunction = (email) => {
//     return {
//         logout: () => console.log(email, "just logged out")
//     }
// }

// const getAllUserFunction = () => {
    
//     return {
//         allUsers: (...users) => console.log(users)
//     }
// }

// const getDataSalesFunction = () => {
//     let salesPerformance = '88%'
    
//     return {
//         dataSales: () => console.log("Sales Performance:", salesPerformance)
//     }
// }

// Instance
// const userOne = User("arya@gmail.com", "Arya")
// const userTwo = User("romi@gmail.com", "Romi")
// const admin = Admin("fauzan@gmail.com", "Fauzan")
// const sales = Sales("zaki@gmail.com", "Zaki")
// const ceo = CEO("affan@gmail.com", "Affan")

// console.log(userOne.login())
// console.log(userOne.logout())
// console.log(admin)
// console.log(admin.allUsers(userOne, userTwo))
// console.log(sales.dataSales())
// console.log(ceo.allUsers(userOne, userTwo, admin, sales, ceo))
// console.log(ceo.dataSales())