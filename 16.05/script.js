const BASE_URL = "https://restcountries.com/v2/all";

let row = document.querySelector(".row");
let search = document.querySelector("#search");
let select = document.querySelector("#select");
let load = document.querySelector("#spinner");

function createCards(arr) {
  row.innerHTML = "";
  arr.forEach((element) => {
    row.innerHTML += `
        <div class="col col-lg-3 my-3">
              <a href="details.html?name=${element.name}">
                <div class="card" style="width: 16.5rem">
                  <img class="card-img-top" src="${element.flags.svg}" alt="Card image cap" />
                  <div class="card-body">
                    <h4 class="country">${element.name}</h4>
                    <p class="population"><b>Population:</b> ${element.population}</p>
                    <p class="region"><b>Region:</b>${element.region}</p>
                    <p class="capital"><b>Capital:</b>${element.capital}</p>
                  </div>
                </div>
              </a>
            </div>
        `;
  });
}

async function getData() {
  row.innerHTML = "";
  load.style.display = "flex";
  await axios(BASE_URL).then((res) => {
    load.style.display = "none";
    return createCards(res.data);
  });
}
getData();

search.addEventListener("input", async function (e) {
  row.innerHTML = "";
  load.style.display = "flex";
  await axios(BASE_URL)
    .then((res) => res.data)
    .then((data) => {
      let filtered = data.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      load.style.display = "none";
      return createCards(filtered);
    });
});

select.addEventListener("change", async function (e) {
  row.innerHTML = "";
  load.style.display = "flex";
  await axios(BASE_URL)
    .then((res) => res.data)
    .then((data) => {
      let filtered = data.filter(
        (item) =>
          item.region.toLocaleLowerCase() == e.target.value.toLocaleLowerCase()
      );
      load.style.display = "none";
      return createCards(filtered);
    });
});
