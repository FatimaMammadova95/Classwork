const BASE_API = "http://localhost:8000/blogs";

const info = document.querySelector(".info");
let id = new URLSearchParams(window.location.search).get("id");

async function createCard() {
  let res = await axios(`${BASE_API}/${id}`);
  let data = await res.data;

  info.innerHTML += `
    <h1>Title: 
    ${data.title}</h1>
    <p>Body: 
    ${data.body}</p>
    <p>Author: 
    ${data.author}</p>
    `;
}
createCard();
