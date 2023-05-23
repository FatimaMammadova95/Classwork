const BASE_URL = "http://localhost:8000/users";

const tBody = document.querySelector("tbody");
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

let date = new Date();

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
        <tr>
        <td>${element.firstName}</td>
        <td>${element.lastName}</td>
        <td>${element.email}</td>
        <td>${element.cardNumber}</td>
        <td><a href="#" class="btn btn-warning" onclick=editBtn(${element.id})>Edit</a>
        <a href="#" class="btn btn-danger" onclick=deleteBtn(${element.id})>Delete</a>
        <a href="#" class="btn btn-primary" onclick=detailsBtn("${element.firstName}",'${element.date}')>Details</a></td>
        </tr>
        `;
  });
}

async function getData() {
  let res = await axios(BASE_URL);
  drawTable(res.data);
}
getData();

async function deleteBtn(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: inputs[0].value,
    lastName: inputs[1].value,
    email: inputs[2].value,
    cardNumber: inputs[3].value,
    date: date.toLocaleDateString(),
  };
  await axios.post(BASE_URL, obj);
});
