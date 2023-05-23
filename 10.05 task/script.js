let form = document.querySelector("form");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let card = document.querySelector("#card");
let submit = document.querySelector("#submit");
let search = document.querySelector("#search");
let tBody = document.querySelector("tbody");
let firstNameTh = document.querySelector("#firstNameTh");
let alert = document.querySelector(".alert");
let upIcon = document.querySelector(".fa-up-long");
let downIcon = document.querySelector(".fa-down-long");

const BASE_URL = "http://localhost:8000/users";
let arrCopy = [];
let arrCopy2 = [];
let editStatus = false;
let editedId;
table = true;
downIcon.style.display = "none";
upIcon.style.display = "none";
let date = new Date()

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
          <tr>
              <td>${element.firstName}</td>
              <td>${element.lastName}</td>
              <td>${element.email}</td>
              <td>${element.cardNumber.split("").fill("*",0,-4).join("")}</td>
              <td>
                  <a href="#" class="btn btn-warning" onclick=editBtn(${element.id})>Edit</a>
                  <a href="#" class="btn btn-danger" onclick=deleteBtn(${element.id})>Delete</a>
                  <a href="#" class="btn btn-primary" onclick=detailsBtn("${element.firstName}",'${element.date}')>Details</a>
              </td>
          </tr>
       `;
  });
}

async function createTable() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  arrCopy = data;
  arrCopy2 = search.value ? arrCopy2 : data;
  drawTable(arrCopy);
}
createTable();

function alertFunc(text, color) {
  alert.classList.add(`alert-${color}`);
  alert.removeAttribute("disabled");
  alert.innerHTML = `${text}`;
  setTimeout(function () {
    alert.remove()
  }, 2000);
}

form.addEventListener("submit", async function (e) {

  e.preventDefault();
  if (firstName.value && lastName.value && email.value) {
    let obj = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      cardNumber: card.value,
      date: date.toLocaleDateString()
    };

    if (editStatus) {
      alertFunc("Edited success", "success");
      await axios.patch(`${BASE_URL}/${editedId}`, obj);
      editStatus = false;
      submit.innerHTML = "Add";
      firstName.innerHTML=""
      lastName.innerHTML=""
      email.innerHTML=""
    } else {
      await axios.post(BASE_URL, obj);
    }
    alertFunc("Success", "success");
  } else {
    alertFunc("please fill in all the blanks", "warning");
  }
  
});

async function deleteBtn(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  drawTable(arrCopy);
  alertFunc("Information deleted", "danger");
}
async function editBtn(id) {
  editedId = id;
  let edited = arrCopy.filter((item) => item.id == id);
  edited.forEach((item) => {
    firstName.value = item.firstName;
    lastName.value = item.lastName;
    email.value = item.email;
  });
  editStatus = true;
  submit.innerHTML = "Edit";
}

search.addEventListener("input", function (e) {
  arrCopy2 = arrCopy;
  arrCopy2 = arrCopy2.filter((item) =>
    `${item.firstName} ${item.lastName}`
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(arrCopy2);
});
firstNameTh.addEventListener("click", function () {
  console.log("Hello");
  if (table) {
    upIcon.style.display = "inline";
    downIcon.style.display = "none";
    arrCopy2.sort((a, b) => a.firstName.localeCompare(b.firstName));
    drawTable(arrCopy2);
    table = !table;
  } else {
    downIcon.style.display = "inline";
    upIcon.style.display = "none";
    arrCopy2.sort((a, b) => b.firstName.localeCompare(a.firstName));
    drawTable(arrCopy2);
    table = !table;
  }
});

function detailsBtn(name,date){
alertFunc(`${name} user has been created ${date}`,"success")
}