let ul = document.querySelector("#ul");
function createList() {
  ul.innerHTML = "";
  todos.forEach((item) => {    
    if (item.check) {
      ul.innerHTML += `<li class="bg-success-subtle d-flex justify-content-between align-items-center m-4">
      <input class="form-check-input me-1 border-black" type="checkbox" id="firstCheckbox" onclick="clickbtn(${item.id})">
              <p >${item.text}</p>
              <div>               
                <button type="button" class="btn btn-danger"  onclick="deletebtn(${item.id})">Delete</button>
              </div>
            </li>`;
    }
  });
}
let todos = JSON.parse(localStorage.getItem("Todos"));
window.addEventListener("load", function () {
  createList();
});
  function deletebtn(id) {
    todos = todos.filter((item) => item.id != id);
    localStorage.setItem("Todos", JSON.stringify(todos));
    createList();
  }