const crudcrud = "https://crudcrud.com/api/a1076c577e65430da184acb51a1808a6";

const form = document.querySelector("#inventoryForm");
const ul = document.querySelector("#itemDetails");
const itemName = document.querySelector("#itemName");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const myObj = {
    itemName: itemName.value,
    description: description.value,
    price: price.value,
    quantity: quantity.value,
  };

  addItemDetails(myObj).then((id) => showItem(myObj, id));
  form.reset();
});

async function addItemDetails(obj) {
  let id;
  axios.post(`${crudcrud}/inventoryData`, obj).then((res) => {
    id = res.data._id;
  });
  return Promise.resolve(id);
}

function displayItem() {
  axios
    .get(`${crudcrud}/inventoryData`)
    .then((res) => {
      res.data.forEach((obj) => {
        showItem(obj, obj._id);
      });
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", displayItem);

function showItem(obj, id) {
  // check(obj.email);
  const newLi = document.createElement("li");
  newLi.innerHTML = `${obj.itemName} - ${obj.description} - ${obj.price} - ${obj.quantity} 
  <button class="buy-one" onclick=buyOne('${id}')>BUY 1</button> 
  <button class="buy-two" onclick=buyTwo('${id}')>BUY 2</button>
  <button class="buy-three" onclick=buyThree('${id}')>BUY 3</button>`;
  ul.appendChild(newLi);
}

function buyOne(id) {
  axios
    .patch(`${crudcrud}/inventoryData/${id}`, { quantity: quantity - 1 })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
