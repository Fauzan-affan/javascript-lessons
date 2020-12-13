// Callback Concept

// const main = (param1, param2, callBack) => {
//   console.log(param1, param2);
//   callBack();
// }

// const test = () => {
//   console.log("Hello Callback");
// }

// main(1, 2, test);

/*
Output :
  1 2
  hello callback
*/

// Synchronous Callback
// 1 - Callback as injection of a function

// const calculator = (a,b,operator) => {
//   let result

//   if (operator === "additional") {
//     result = a + b
//   } else if (operator === "minus") {
//     result = a - b
//   }

//   return result
// }

// console.log(calculator(5,5,"additional")) // 10
// console.log(calculator(5,5,"minus")) // 0

/*
Make the function above so that you can perform 
other mathematical operations such as minus, divide, multiply and so on.
*/

// const calculator = (a,b,callback) => {
//   let result = 0

//   // Ternary operator. condition ? true : condition ? true : false
//   typeof callback === "function" ? result = callback(a,b) : result

//   return result
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

// document.querySelector("#buttonAlert")
// .addEventListener("click", () => alert("Ouch i am clicked!"))

// Asynchronous Callback
/* 
The asynchronous process is identical to delay, 
where the result of the process requires a certain time interval to produce 
output. We will find asynchronous processes on Ajax processes, 
HTTP communications, file operations, timers, etc.
*/

// Pada synchronous output di prosess berdasarkan urutan kode.

// function p1() {
//   console.log('p1 done')
// }
// function p2() {
//   console.log('p2 done')
// }
// function p3() {
//   console.log('p3 done')
// }
// p1()
// p2()
// p3()

/* Output :
p1 done
p2 done
p3 done
*/

/* Tetapi pada proses asynchronous output dari kode yang dituliskan 
tidak selalu berurutan. Hasilnya tergantung yang mana 
yang lebih dulu selesai. Perhatikan contoh berikut:
*/

// function p1() {
//   console.log('p1 done')
// }
// function p2() {
//   //setTimeout or delay for asynchronous simulation
//   setTimeout(
//     function() {
//       console.log('p2 done')
//     }, 100
//   )
// }
// function p3() {
//   console.log('p3 done')
// }
// p1()
// p2()
// p3()

/* Output :
p1 done
p3 done
p2 done
*/

// Solusinya adalah dengan membuat p3 menjadi callback bagi p2.

// function p1() {
//   console.log("p1 done");
// }

// function p2(callback) {
//   setTimeout(function () {
//     console.log("p2 done");
//     callback();
//   }, 100);
// }

// function p3() {
//   console.log("p3 done");
// }

// p1();
// p2(p3);

// - Callback in ajax request

// Problem

// data=requestAjax() // asynchronous process
// showResult(data) // undefined

// Solution

function requestAjax(callback){

  // inisialisasi library XML Http Request
  var xhr = new XMLHttpRequest();

  console.log(xhr)

  // set target request
  xhr.open('GET','https://jsonplaceholder.typicode.com/users/1')

  // terapkan callback
  xhr.onload = () => {
    if(xhr.status === 200){
      callback(xhr.response)
    }else{
      callback('Failed')
    }
  }

  // mulai request
  xhr.send()

}

function showResult(data){
  if (data != 'Failed'){
    //tampilkan Data
    data=JSON.parse(data)
    console.log(data)
  } else {
    console.log('Error bosQ')
  }
}

requestAjax(showResult)
