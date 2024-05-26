const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fruitToAdd = document.querySelector("#fruit-to-add");

  // create element
  const newLi = document.createElement("li");

  // inner HTML should be used when you have inline css or add the css later to the element
  // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'; // single quotes only working

  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = "fruit";

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

fruits.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  } // select all elements whose class name is delete-btn
});
