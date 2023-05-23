const BASE_API = "http://localhost:8000/blogs";

const cardSection = document.querySelector(".cardSection");
const search = document.querySelector("#search");

async function writeCard(arr) {
  cardSection.innerHTML = "";
  arr.forEach((data) => {
    cardSection.innerHTML += `
        <div class="card my-3">
        <h3>${data.title}</h3>
        <p class="body">${data.body.slice(
          0,
          200
        )}... <a href="details.html?id=${
      data.id
    }" id="readMore">Read More</a></p>    
        <p id="author">written by ${data.author}</p>
        <div>
          <button id="delete" onclick="delFun(${data.id})">Delete</button>
          <a href="newBlog.html?id=${data.id}" id="edit">Edit</a>
        </div>
      </div>
        `;
  });
}

async function getData() {
  let res = await axios(BASE_API);
  let data = await res.data;
  writeCard(data);
}
getData();

async function delFun(id) {
  await axios.delete(`${BASE_API}/${id}`);
}

search.addEventListener("input", async function (e) {
  let res = await axios(BASE_API);
  let data = res.data;
  let filtered = data.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  writeCard(filtered);
});
