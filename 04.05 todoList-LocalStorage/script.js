let input = document.querySelector(".form-control");
let add = document.querySelector("#button-addon2");
let ul = document.querySelector("#ul");

function createList() {
  ul.innerHTML = "";
  todos.forEach((item) => {
    ul.innerHTML += `<li class="bg-success-subtle d-flex justify-content-between align-items-center m-4">
    <input class="form-check-input me-1 border-black" type="checkbox" value="" id="firstCheckbox" ">
            <p >${item.text}</p>
            <div>
              <button type="button" class="btn btn-success" onclick="editbtn(${item.id})">Edit</button>
              <button type="button" class="btn btn-danger"  onclick="deletebtn(${item.id})">Delete</button>
            </div>
          </li>`;
  });
}

let todos = JSON.parse(localStorage.getItem("Todos")) || [];

window.addEventListener("load", function () {
  createList();
});

add.onclick = function () {
  let obj = {
    id: Date.now(),
    text: input.value,
    check: true,
  };
  todos.push(obj);
  localStorage.setItem("Todos", JSON.stringify(todos));
  createList();
  input.value = "";
};

function editbtn(id) {
  let edited = todos.filter((item) => item.id == id)[0];
  input.value = edited.text;
  add.innerHTML = "Edit";
  add.onclick = function () {
    let finded = todos.find((item) => item.id == id);
    finded.text = input.value;
    localStorage.setItem("Todos", JSON.stringify(todos));
    createList();
    add.innerHTML = "Add";
  };
}
function deletebtn(id) {
  todos = todos.filter((item) => item.id != id);
  localStorage.setItem("Todos", JSON.stringify(todos));
  createList();
}