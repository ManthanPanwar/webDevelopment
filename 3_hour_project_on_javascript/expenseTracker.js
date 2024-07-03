const ul = document.querySelector("#detailAdded");
const form = document.querySelector("form");
const amount = document.querySelector("#amount");
const description = document.querySelector("#description");
const category = document.querySelector("#dropdown_id");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (amount.value == "" || description.value == "") {
    const msg = document.querySelector("#msg");
    msg.innerHTML = "Enter ALL Fields";
    msg.style.color = "red";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    const obj = {
      amount: amount.value,
      category: category.value,
      description: description.value,
      id: `${Math.max(...Object.keys(localStorage)) + 1}`,
    };
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(
      `${amount.value} - ${category.value} - ${description.value}  `
    );
    newLi.appendChild(newLiText);
    newLi.className = "detail";

    // delete expense
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete Expense"));
    deleteBtn.className = "delete-btn";
    deleteBtn.id = `${obj.id}`;
    deleteBtn.style.marginLeft = "20px";
    deleteBtn.style.background = "#ff4444";
    newLi.appendChild(deleteBtn);

    // edit expense
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit Expense"));
    editBtn.className = "edit-btn";
    editBtn.id = `${obj.id}`;
    editBtn.style.background = "green";
    editBtn.style.marginLeft = "10px";
    newLi.appendChild(editBtn);
    ul.appendChild(newLi);
    form.reset();
    addToLS(obj);
  }
});

function addToLS(obj) {
  localStorage.setItem(obj.id, JSON.stringify(obj));
}

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const expenseToDelete = event.target.parentElement;
    ul.removeChild(expenseToDelete);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const toBeEdited = event.target.id;
    const toBeEditedObj = JSON.parse(localStorage.getItem(toBeEdited));
    localStorage.removeItem(toBeEdited);
    amount.value = toBeEditedObj.amount;
    category.value = toBeEditedObj.category;
    description.value = toBeEditedObj.description;
    ul.removeChild(event.target.parentElement);
    console.log(event.target.parentElement);
  }
});
