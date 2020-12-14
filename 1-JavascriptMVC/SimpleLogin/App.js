// Controller
import {handleView, handleForm} from "./Controllers/Login.js"

var inputUsername, inputPassword

const App = document.querySelector("#App");
App.innerHTML = handleView();

const handleUsername = (e) => {inputUsername = e.target.value}
const handlePassword = (e) => {inputPassword = e.target.value}

const username = document.querySelector("#username");
username.addEventListener("change", handleUsername)

const password = document.querySelector("#password");
password.addEventListener("change", handlePassword)

const updateStatus = () => {
    App.innerHTML = handleView(
        handleForm(inputUsername, inputPassword)
    )
}

App.addEventListener("submit", e => {
    e.preventDefault()

    updateStatus()
})