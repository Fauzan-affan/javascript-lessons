let userOneEmail = 'fauzan@gmail.com'
let userOneName = 'Fauzan'
let userOneFriends = ['Romi']

let userTwoEmail = 'affan@gmail.com'
let userTwoName = 'Affan'
let userTwoFriends = ['Sansan', 'Arya']

let userThreeEmail = 'fauzan@gmail.com'
let userThreeName = 'Fauzan'
let userThreeFriends = ['Romi']

const login = (email) => {
    console.log(email, 'is now online')
}

const logout = (email) => {
    console.log(email, 'has logged out')
}

const logFriends = (friends) => {
    friends.forEach(friend => {
        console.log(friend)
    });
}

login(userOneEmail)

// OOP - Encapsulation

let userOne = {
    
}