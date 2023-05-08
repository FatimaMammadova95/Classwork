const BASE_URL = `http://localhost:8000/users`;

let email = document.querySelector("#email");
let username = document.querySelector("#username");
let submit = document.querySelector("#submit");

async function editedValue() {
  try {
    let res = await fetch(`${BASE_URL}`);
    let data = await res.json();
    let edited = data.filter((item) => item.edit)[0];
    email.value = edited.email;
    username.value = edited.username;
    submit.addEventListener("click", async function (e) {
      e.preventDefault();
      await fetch(`${BASE_URL}/${edited.id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email.value,
          username: username.value,
          edit: false,
        }),
      });
      email.value = "";
      username.value = "";
      window.location.href = "http://127.0.0.1:5500/project/cards.html";
    });
  } catch (error) {
    console.log(error);
  }
}
editedValue();
