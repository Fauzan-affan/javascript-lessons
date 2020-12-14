// Controller
import {handleView, handleForm} from "./Controllers/Login.js"

let inputUsername, inputPassword

const App = document.querySelector("#App");
App.innerHTML = handleView("login");

const handleUsername = (e) => {
    inputUsername = e.target.value
}
const handlePassword = (e) => {inputPassword = e.target.value}

const username = document.querySelector("#username");
username.addEventListener("change", handleUsername)

const password = document.querySelector("#password");
password.addEventListener("change", handlePassword)

const updateStatus = () => {
    App.innerHTML = handleView(
        handleForm(inputUsername, inputPassword) // true: dashboard, false: login
    )
}

App.addEventListener("submit", e => {
    e.preventDefault() // Mencegah Reload

    updateStatus()
})