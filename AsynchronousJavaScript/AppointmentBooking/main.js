const form = document.querySelector("#contact-form");
const ul = document.querySelector("#detailAdded");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value == "" || email.value == "" || phone.value == "") {
    const msg = document.querySelector("#msg");
    msg.className = "form-container";
    msg.innerHTML = "Enter All Fields";
    msg.style.color = "red";
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    let myObj = {
      username: username.value,
      email: email.value,
      phone: phone.value,
    };

    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(
      `${username.value} - ${email.value} - ${phone.value}`
    );
    newLi.appendChild(newLiText);
    newLi.className = "detail";

    // delete appointment
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.className = "delete-btn";
    deleteBtn.id = email.value;
    deleteBtn.style.marginLeft = "20px";
    deleteBtn.style.background = "#ff4444";
    newLi.appendChild(deleteBtn);

    // edit appointment
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    editBtn.className = "edit-btn";
    editBtn.id = email.value;
    editBtn.style.marginLeft = "20px";
    editBtn.style.background = "green";
    editBtn.style.paddingLeft = "8px";
    editBtn.style.paddingRight = "8px";
    newLi.appendChild(editBtn);
    newLi.style.marginBottom = "15px";

    ul.appendChild(newLi);

    // Clear input fields after submission
    form.reset();

    // Add to Local Storage
    addToLS(myObj);
  }
});

function addToLS(myObj) {
  localStorage.setItem(myObj.email, JSON.stringify(myObj));
}

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const toBeDeleted = event.target.id;
    const appointmentToDelete = event.target.parentElement;
    localStorage.removeItem(toBeDeleted);
    ul.removeChild(appointmentToDelete);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const toBeEdited = event.target.id;
    const toBeEditedmyObj = JSON.parse(localStorage.getItem(toBeEdited));
    localStorage.removeItem(toBeEdited);
    username.value = toBeEditedmyObj.username;
    email.value = toBeEditedmyObj.email;
    phone.value = toBeEditedmyObj.phone;
    ul.removeChild(event.target.parentElement);
    console.log(event.target.parentElement);
  }
});
// let myObjSerialized = JSON.stringify(myObj);
// localStorage.setItem(username.value, myObjSerialized);

// let myObjDeserialized = JSON.parse(localStorage.getItem("user1"));
// console.log(myObjDeserialized);
