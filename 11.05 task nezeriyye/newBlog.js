const BASE_API = "http://localhost:8000/blogs";
let id = new URLSearchParams(window.location.search).get("id");

const form = document.querySelector("form");
const title = document.querySelector("#title");
const blogTitle = document.querySelector("#blogTitle");
const blogBody = document.querySelector("#blogBody");
const blogAuthor = document.querySelector("#blogAuthor");
const submit = document.querySelector("#submit");

let author;

async function edit() {
  if (id) {
    title.innerHTML = "Edit a Blog";
    submit.innerHTML = "Edit";
    let res = await axios(`${BASE_API}/${id}`);
    let data = await res.data;
    blogTitle.value = data.title;
    blogBody.value = data.body;
    blogAuthor.value = data.author;
  }
}

edit();

blogAuthor.addEventListener("change", function (e) {
  author = e.target.value;
});

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    title: blogTitle.value,
    body: blogBody.value,
    author: blogAuthor.value || "Lorem",
  };
  if (id) {
    axios.patch(`${BASE_API}/${id}`, obj).then((window.location = "home.html"));
  } else {
    await axios.post(BASE_API, obj).then((window.location = "home.html"));
  }
});
