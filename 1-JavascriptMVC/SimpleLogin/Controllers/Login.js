// Model
import {users} from "../Model/Users.js"

// View
import Login from "../Views/Login/Login.js"
import Dashboard from "../Views/Dashboard/Dashboard.js"

export const handleView = (status) => {
    switch (status) {
        case "dashboard":
            return Dashboard
        default:
            return Login
    }
}

export const handleForm = (username, password) => {
    let authUsername, authPassword
    
    if (username && password) {
        authUsername = users.filter(user => user.username === username)
        authPassword = JSON.stringify(...authUsername.map(user => user.password)) === password
        
        console.log(authUsername, authPassword)

        if (authPassword) {
            return "dashboard"
        } else {
            return "login"
        }
    }
}