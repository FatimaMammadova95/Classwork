const BASE_URL = "http://universities.hipolabs.com/search?country=Azerbaijan";

let tBody = document.querySelector("tbody");
let search = document.querySelector("#search");
let loading = document.querySelector(".loading");

async function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
        <tr>
            <td>${element.name}</td>
            <td>${element.country}</td>
            <td>${element.domains[0]}</td>
            <td><a href="${element.web_pages}" target="_blank">${element.web_pages}</a></td>
        </tr>
        `;
  });
}

async function getData() {
  tBody.innerHTML = "";
  loading.style.display = "flex";
  await axios(BASE_URL).then((res) => {
    loading.style.display = "none";
    return drawTable(res.data);
  });
}
getData();

search.addEventListener("input", async function (e) {
  tBody.innerHTML = "";
  loading.style.display = "flex";
  await axios(`${BASE_URL}&name=${e.target.value}`).then((res) => {
    loading.style.display = "none";
    return drawTable(res.data);
  });
});


