// Callback Concept

const main = (param1, param2, callBack) => {
  console.log(param1, param2);
  callBack();
}

const myCallback = () => {
  console.log("Hello Callback");
}

// main(1, 2, myCallback);

/*
Output :
    1 2
    hello callback
*/

// Synchronous Callback
// 1 - Callback as injection of a function

// const calculator = (a,b) => {
//     let result = a + b
//     return result
// }

// console.log(calculator(5,5)) // 10

/*
Make the function above so that you can perform 
other mathematical operations such as minus, divide, multiply and so on.
*/

// const calculator = (a,b,callback) => {
//     let result = 0

//     typeof callback === "function" ? result = callback(a,b) : result

//     return result
// }

// let addition = calculator(5,5, (x,y) => x+y)
// let minus = calculator(5,5, (x,y) => x-y)
// let divide = calculator(5,5, (x,y) => x/y)
// let multiply = calculator(5,5, (x,y) => x*y)

// console.log(addition) // 10
// console.log(minus) // 0
// console.log(divide) // 1
// console.log(multiply) // 25

// 2 - Callback as event listener

// document.querySelector("#buttonAlert").addEventListener("click", () => alert("Ouch i am clicked!"))

// Asynchronous Callback
/* 
The asynchronous process is identical to delay, 
where the result of the process requires a certain time interval to produce 
output. We will find asynchronous processes on Ajax processes, 
HTTP communications, file operations, timers, etc.
*/