let tbody = document.querySelector("tbody");
function createList() {
  tbody.innerHTML = "";
  fetch("https://northwind.vercel.app/api/orders")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((element) => {
        tbody.innerHTML += `
        <tr>
        <td>${element.id}</td>
        <td>${element.companyName}</td>
        <td>${element.address?.city}</td>
        <td>${element.address?.country}</td>
        <td>${element.address?.phone}</td>
        <td><button id="delete" onclick=deleteFunc(${element.id})>Delete</button></td>
      </tr>`;
      });
    });
}
createList();
function deleteFunc(id) {
  fetch(`https://northwind.vercel.app/api/orders                     /${id}`, {
    method: "DELETE",
  }).then(() => {
    createList();
  });
}
