import { API } from "./api.js";
function fetchData() {
  fetch(`${API}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => error);
}
fetchData();

function fetchDataComplated() {
  fetch(`${API}`)
    .then((response) => response.json())
    .then((data) => console.log(data.filter((item) => item.completed)))
    .catch((error) => error);
}

fetchDataComplated();

function fetchDataUserId() {
  fetch(`${API}`)
    .then((response) => response.json())
    .then((data) => console.log(data.filter((item) => item.userId == 2)))
    .catch((error) => error);
}
fetchDataUserId();

function fetchDataId(id) {
  fetch(`${API}/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => error);
}
fetchDataId(3);
