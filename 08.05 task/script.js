async function allData() {
  try {
    let res = await fetch("url");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
allData();

async function dataById(id) {
  try {
    let res = await fetch(`url/${id}`);
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
dataById(5);

async function deleteDataById(id) {
  try {
    let res = await fetch(`url/${id}`, { method: "DELETE" });
  } catch (error) {
    console.log(error);
  }
}
deleteDataById(5);


function axiosData(){
    axios("url").then(resp=>console.log(resp.data)).catch(err=>console.log(err))
}