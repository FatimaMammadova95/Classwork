const BASE_URL = `http://localhost:8000/users`;
let addUser = document.querySelector("#addUser")

addUser.addEventListener("click",function(){
  window.location.href = "http://127.0.0.1:5500/project/addForm.html";
})

let row = document.querySelector(".row");
async function createCart() {
  row.innerHTML = "";
  try {
    let res = await fetch(`${BASE_URL}`);
    let data = await res.json();
    data.forEach((element) => {
      row.innerHTML += `
            <div class="col-5">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${element.username}</h5>
                <p class="card-text">
                 ${element.email}
                </p>
                <div class="icon">
                  <i class="fa-solid fa-pen" onclick=editBtn("${element.id}")></i>
                  <i class="fa-solid fa-trash" onclick=deleteBtn("${element.id}")></i>
                </div>
              </div>
            </div>
          </div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}
createCart();

async function deleteBtn(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
  createCart();
}
async function editBtn(id) {
  try {
    let res = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ edit: true }),
    });
  } catch (error) {
    console.log(error);
  }
    window.location.href = "http://127.0.0.1:5500/project/editForm.html";
}
