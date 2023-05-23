const BASE_URL = "http://localhost:8080/users";

let tBody = document.querySelector("tbody");
let cards = document.querySelector(".cards");

function createTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
        <tr>
                <td>${element.id}</td>
                <td><img src="${element.photo}" alt="" /></td>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.email}</td>
                <td>${element.date}</td>
                <td>
                  <a href="userForm.html?id=${element.id}" class="btn btn-success">Edit</a>
                  <a href="#" class="btn btn-danger" onclick=deleteBtn(${element.id})>Delete</a>
                  <a href="#" class="btn btn-primary" onclick=favBtn(${element.id})>Add Fav</a>
                </td>
              </tr>
        `;
  });
}

function createCard(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    cards.innerHTML += `
        <div class="card">
        <div>
          <span class="id">Id: ${element.id}</span>
          <span class="date">Date: ${element.date}</span>
        </div>
        <div class="info">
          <div class="title">
            <img src="${element.photo}" alt="" />
            <span>
              <div>${element.name} ${element.surname}</div>
              <div>${element.email}</div></span
            >
          </div>
          <div class="btns">
            <a href="userForm.html?id=${element.id}" class="btn btn-success">Edit</a>
            <a href="#" class="btn btn-danger" onclick=deleteBtn(${element.id})>Delete</a>
          </div>
        </div>
      </div>
        `;
  });
}

async function getData() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  createTable(data);
  createCard(data);
}
getData();

async function deleteBtn(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  getData();
}

let arr = [] || JSON.parse(localStorage.getItem("Fav"));

async function favBtn(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = res.data;
  let filtered = arr.filter((item) => item.id != id);
  if (filtered) {
    arr.push(data);
    localStorage.setItem("Fav", JSON.stringify(arr));
  }else{
    alert("You already added this user")
  }
}
