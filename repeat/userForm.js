const BASE_URL = "http://localhost:8080/users";

let form = document.querySelector("form");
let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let formFile = document.querySelector("#formFile");
let submit = document.querySelector("#submit");

let id = new URLSearchParams(window.location.search).get("id");

let date = new Date();

if (id) {
  editForm();
}

async function editForm(arr) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = res.data;
  firstname.value = data.name;
  lastname.value = data.surname;
  email.value = data.email;
  formFile.value = data.photo;
}

form.addEventListener("submit", async function (e) {
    e.preventDefault()
  if (!id) {
    let obj = {
        photo: `./images/${formFile.value.split("\\")[2]}`,
        name: firstname.value,
        surname: lastname.value,
        email: email.value,
        date: date.toLocaleString(),
      };
    await axios.post(BASE_URL, obj);
  } else {
    let obj = {
        photo: `./images/${formFile.value.split("\\")[2]}`,
        name: firstname.value,
        surname: lastname.value,
        email: email.value,
      };
    await axios.patch(`${BASE_URL}/${id}`, obj);
  }
  window.location="./index.html"
});
