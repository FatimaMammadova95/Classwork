const BASE_URL = `http://localhost:8000/users`;

let email = document.querySelector("#email");
let username = document.querySelector("#username");
let submit = document.querySelector("#submit");

submit.addEventListener("click", async function (e) {
  e.preventDefault() 
  if (username.value && email.value) {
    let obj = {
      email: email.value,
      username: username.value,
      edit: false,
    };
    try {
      let res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
    } catch (error) {
      console.log(error);
    }
    window.location.href = "http://127.0.0.1:5500/project/cards.html";
  }
});
