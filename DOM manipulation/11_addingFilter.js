// firstChild -> will give you the first child(all are childs)
// firstElementChild -> will give the first child element(only elements are child)

const form = document.querySelector("form");
const btn = document.querySelector("#btn");
const fruits = document.querySelector(".fruits");

const desc = document.createElement("input");
desc.type = "text";
desc.name = "fruitDesc";
desc.id = "desc";
desc.placeholder = "enter description";

form.insertBefore(desc, btn);

// eventListener will be added to form not the button
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fruitToAdd = document.querySelector("#fruit-to-add");
  const desc = document.querySelector("#desc");
  const newLi = document.createElement("li");
  newLi.className = "fruit";
  const newLiText = document.createTextNode(fruitToAdd.value);
  const newDesc = document.createElement("p");
  newDesc.textContent = desc.value;
  newDesc.style.fontStyle = "italic";
  newLi.appendChild(newLiText);
  newLi.appendChild(newDesc);

  // delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("x"));
  deleteBtn.className = "delete-btn";
  newLi.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  editBtn.className = "edit-btn";
  newLi.appendChild(editBtn);

  fruits.appendChild(newLi);
});

const filter = document.querySelector("#filter");

filter.addEventListener("keyup", (event) => {
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  for (let i = 0; i < fruitItems.length; i++) {
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    const currentFruitDesc =
      fruitItems[i].children[1].textContent.toLowerCase();
    if (
      currentFruitText.indexOf(textEntered) === -1 &&
      currentFruitDesc.indexOf(textEntered) === -1
    ) {
      fruitItems[i].style.display = "none";
    } else {
      fruitItems[i].style.display = "flex";
    }
  }
});
