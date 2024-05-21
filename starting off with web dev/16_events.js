// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   // use mouseover for changing on hover
//   e.preventDefault(); // now the form will not be submitted
//   console.log("click");
//   console.log(e); // shows us the event object
//   console.log(e.target); // shows us the element on which we are on.
//   console.log(e.target.className); // shows the class name of the element.
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark"); // use classList.remove for removing
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1> Hello </h1>";
// });

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onsubmit);

// function onsubmit(e) {
//   e.preventDefault();
//   console.log(nameInput); // on submitting we get the nameInput element
//   console.log(nameInput.value);

//   // form validation
//   if (nameInput.value === "" || emailInput.value === "") {
//     // alert("please enter both fields");
//     // alternate of alert
//     msg.classList.add("error"); // in this it does not require # or . for defining whether it is a class or id
//     msg.innerHTML = "Please enter all fields";

//     setTimeout(() => msg.remove(), 3000); // used to set timeout and takes time in milliseconds
//   } else {
//     const li = document.createElement("li"); // creating list item and inserting it.
//     // appendChild is used to add something inside the list
//     // createTextNode is used to define the text that it will show
//     li.appendChild(
//       document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
//     );
//     // this won't do anything coz we have not append the li to the ul

//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = "";
//     emailInput.value = "";
//   }
// }

const form = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const ul = document.querySelector("#users");

form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    msg.innerHTML = "Enter all fields";

    msg.style.background = "red";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
    ul.appendChild(li);
    console.log(name.value, email.value);
    name.value = "";
    email.value = "";
  }
}

document.querySelector(".btn").addEventListener("mouseover", mouseOver);
function mouseOver(e) {
  e.preventDefault();
  document.querySelector(".btn").style.background = "#cc3e";
}

name.addEventListener("mouseout", mouseOut);
function mouseOut(e) {
  e.preventDefault();
  name.style.background = "#010101";
}
