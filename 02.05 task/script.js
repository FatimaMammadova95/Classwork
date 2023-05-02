// const add = document.querySelector("#add");
// const delate = document.querySelector("#delate");
// const empty = document.querySelector("#empty");

// ////1
// add.addEventListener("click", function () {
//     localStorage.setItem("lastName", "Akberov");
//   localStorage.setItem("firstName", "Kamran");
//   localStorage.setItem("age", "23");
// });
// 1.1
// console.log(localStorage.length);

// ////2
// for (let i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.key(i));
// }

// ////3
// let keys = Object.keys(localStorage);
// for (const key of keys) {
//   console.log(localStorage.getItem(key));
// }

// ////4
// console.log(localStorage.key(0));
// //4.1
// let arr = [];
// for (let i = 0; i < localStorage.length; i++) {
//   arr.push(localStorage.key(i));
// }
// console.log(arr);

// ////5
// console.log(localStorage.getItem(localStorage.key(0)));
// //5.1
// let arr1 = [];
// for (let i = 0; i < localStorage.length; i++) {
//   arr1.push(localStorage.getItem(localStorage.key(i)));
// }
// console.log(arr1);

// ////6
// delate.addEventListener("click", function () {
//   localStorage.removeItem("firstName");
// });
// //6.1
// empty.addEventListener("click", function () {
//  localStorage.clear()
// });

////7

let form = document.querySelector("#form");
let username = document.querySelector("#exampleInputUsername");
let email = document.querySelector("#exampleInputEmail1");
let password = document.querySelector("#exampleInputPassword1");
let check = document.querySelector("#exampleCheck1");
let submit = document.querySelector("#submit");


let arr = JSON.parse(localStorage.getItem("Users")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (username.value && email.value) {
    let obj = {
      username: `${username.value}`,
      email: `${email.value}`,
      password: `${password.value}`,
      check: `${check.checked}`,
    };
    arr.push(obj);
    localStorage.setItem("Users", JSON.stringify(arr));
  }
});

////8
let users = JSON.parse(localStorage.getItem("Users"))
console.log(users);
