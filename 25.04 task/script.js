let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let blog = document.createElement("li");
let contact = document.createElement("li");
let homeSection = document.createElement("section");
let aboutSection = document.createElement("section");
let blogSection = document.createElement("section");
let contactSection = document.createElement("section");

homeSection.setAttribute("id", "sec1");
aboutSection.setAttribute("id", "sec2");
blogSection.setAttribute("id", "sec3");
contactSection.setAttribute("id", "sec4");

home.innerHTML = "<strong> Home </strong>";
about.innerHTML = "<strong> About </strong>";
blog.innerHTML = "<strong> Blog </strong>";
contact.innerHTML = "<strong> Contact </strong>";

homeSection.innerHTML = "<strong> Home </strong>";
aboutSection.innerHTML = "<strong> About </strong>";
blogSection.innerHTML = "<strong> Blog </strong>";
contactSection.innerHTML = "<strong> Contact </strong>";

document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);
document.body.append(homeSection);
document.body.append(aboutSection);
document.body.append(blogSection);
document.body.append(contactSection);

//Style

ul.style.height = "10vh";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.backgroundColor = "#000";
ul.style.alignItems = "center";

home.style.listStyle = "none";
home.style.color = "#fff";
home.style.cursor = "pointer";

about.style.listStyle = "none";
about.style.color = "#fff";
about.style.cursor = "pointer";

blog.style.listStyle = "none";
blog.style.color = "#fff";
blog.style.cursor = "pointer";

contact.style.listStyle = "none";
contact.style.color = "#fff";
contact.style.cursor = "pointer";

homeSection.style.height = "100vh";
homeSection.style.display = "flex";
homeSection.style.alignItems = "center";
homeSection.style.justifyContent = "center";
homeSection.style.fontSize = "20px";
homeSection.style.fontWeight = "bolder";
homeSection.style.border = "1px dashed #000";

aboutSection.style.height = "100vh";
aboutSection.style.display = "flex";
aboutSection.style.alignItems = "center";
aboutSection.style.justifyContent = "center";
aboutSection.style.fontSize = "20px";
aboutSection.style.fontWeight = "bolder";
aboutSection.style.border = "1px dashed #000";

blogSection.style.height = "100vh";
blogSection.style.display = "flex";
blogSection.style.alignItems = "center";
blogSection.style.justifyContent = "center";
blogSection.style.fontSize = "20px";
blogSection.style.fontWeight = "bolder";
blogSection.style.border = "1px dashed #000";

contactSection.style.height = "100vh";
contactSection.style.display = "flex";
contactSection.style.alignItems = "center";
contactSection.style.justifyContent = "center";
contactSection.style.fontSize = "20px";
contactSection.style.fontWeight = "bolder";
contactSection.style.border = "1px dashed #000";

home.addEventListener("click", function () {
  window.location = "#sec1";
});
about.addEventListener("click", function () {
  window.location = "#sec2";
});
blog.addEventListener("click", function () {    
  window.location = "#sec3";
});
contact.addEventListener("click", function () {
  window.location = "#sec4";
});

////
const maxChar = (str) => {
  return str.split("").forEach((element, index, array) => {
    array.indexOf(element) !== index;
  });
};
console.log(maxChar("Namrim"));
