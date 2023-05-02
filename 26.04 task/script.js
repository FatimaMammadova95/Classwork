///Html

let form = document.createElement("form");
let nameLabel = document.createElement("label");
let surnameLabel = document.createElement("label");
let nameInput = document.createElement("input");
let surnameInput = document.createElement("input");
let checkbox = document.createElement("input");
let radiobox1 = document.createElement("input");
let radiobox2 = document.createElement("input");
let submit = document.createElement("button");
let letsStart = document.createElement("button");
let nexPage = document.createElement("button");
let timer = document.createElement("p");
let br = document.createElement("br");

document.body.append(letsStart);
document.body.append(br);
document.body.append(timer);
document.body.append(form);
form.append(nameLabel);
form.append(nameInput);
form.append(surnameLabel);
form.append(surnameInput);
form.append(checkbox);
form.append(radiobox1);
form.append(radiobox2);
form.append(submit);
document.body.append(nexPage);

nameInput.setAttribute("required", null);
surnameInput.setAttribute("required", null);
checkbox.setAttribute("required", null);
checkbox.setAttribute("type", "checkbox");
radiobox1.setAttribute("required", null);
radiobox1.setAttribute("type", "radio");
radiobox1.setAttribute("name", "radiobox");
radiobox2.setAttribute("required", null);
radiobox2.setAttribute("type", "radio");
radiobox2.setAttribute("name", "radiobox");
submit.setAttribute("disabled", null);
nexPage.setAttribute("disabled", null);

nameLabel.innerText = "Name";
surnameLabel.innerText = "Surname";
letsStart.innerText = "Let's start...";
submit.innerText = "Submit";
nexPage.innerText = "Next page";
timer.innerText = "00:15";
///Css

form.style.height = "80vh";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
form.style.gap = "10px";
form.style.border = "1px dashed #000";

checkbox.style.accentColor = "red";
radiobox1.style.accentColor = "blue";
radiobox2.style.accentColor = "blue";

nameLabel.style.fontWeight = "bold";
surnameLabel.style.fontWeight = "bold";

timer.style.display = "inline-block";
timer.style.padding = "5px";
timer.style.border = "1px solid #000";

///Js

letsStart.addEventListener("click", function () {
  this.setAttribute("disabled", null);
  submit.removeAttribute("disabled");
  let count = 15;
  let timmerInterval = setInterval(function () {
    timer.innerText = `00:${count--}`;
    timer.style.color = "blue";
    timer.style.borderColor = "blue";
    if (count < 10) {
      timer.style.color = "red";
      timer.style.borderColor = "red";
    }
    if (count < 0) {
      clearInterval(timmerInterval);
      timer.innerText = "You missed ):";
      submit.setAttribute("disabled", null);
      letsStart.removeAttribute("disabled");
    }
  }, 1000);
});
submit.addEventListener("click", function () {
  nexPage.removeAttribute("disabled");
});
nexPage.addEventListener("click", function () {
  window.alert("Finish");
  location.reload();
});
