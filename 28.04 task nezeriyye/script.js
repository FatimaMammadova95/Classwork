let input = document.querySelector("#text");
let button = document.querySelector("#btn");
let ul = document.querySelector("#ul");

button.addEventListener("click", function () {  
  if (input.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.append(li);
  }
  input.value = "";  
});
