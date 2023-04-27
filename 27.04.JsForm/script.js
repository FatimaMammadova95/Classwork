let username = document.querySelector("#username");
let surname = document.querySelector("#surname");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let checked = document.querySelector("#checked");
let radio = document.querySelectorAll('[type = "radio"]');
let submit = document.querySelector("#submit");

username.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
});
username.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
surname.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "green";
});
surname.addEventListener("mouseout", function () {
  this.style.backgroundColor = "transparent";
});
email.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
password.addEventListener("focus", function (event) {
  event.target.value = "mypassword";
});
checkbox.addEventListener("click", function () {
  checked.classList.toggle("checked");
  checked.classList.toggle("notchecked");
});
radio.forEach((item) =>
  item.addEventListener("click", function () {
    setTimeout(() => {
      window.alert("Thanks!!!");
    }, 1000);
  })
);
username.addEventListener("input", function () {
  if (username.value && surname.value && checkbox.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.setAttribute("disabled", null);
  }
});
surname.addEventListener("input", function () {
  if (username.value && surname.value && checkbox.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.setAttribute("disabled", null);
  }
});
checkbox.addEventListener("click", function () {
  if (username.value && surname.value && checkbox.checked) {
    submit.removeAttribute("disabled");
  } else {
    submit.setAttribute("disabled", null);
  }
});
