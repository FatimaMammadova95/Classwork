let deleteBtn = document.querySelector(".delete");
let addBtn = document.querySelector(".add");
let updateBtn = document.querySelector(".update");

async function getData() {
  try {
    let resp = await fetch("");
    let data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
async function deleteData() {
  try {
    let resp = await fetch("", { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
}
async function addData(id,obj) {
  try {
    let resp = await fetch("", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    console.log(error);
  }
}
async function updateData() {
  try {
    let resp = await fetch("");
    let data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
