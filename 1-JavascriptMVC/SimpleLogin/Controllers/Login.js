// Model
import {users} from "../Model/Login.js"

// View
import Login from "../Views/Login/Login.js"
import Dashboard from "../Views/Dashboard/Dashboard.js"

export const handleView = (status) => {
    if (status === "yes") {
        return Dashboard
    } else {
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
            return "yes"
        } else {
            return "no"
        }
    }
}