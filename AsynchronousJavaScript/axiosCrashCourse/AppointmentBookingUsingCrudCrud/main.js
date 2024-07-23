const crudcrud = "https://crudcrud.com/api/298939be6aae4d7487299faef7337d8e";

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
    addUserDetails(myObj).then((id) => showUser(myObj, id));
  }
  form.reset();
});

async function addUserDetails(obj) {
  let id;
  await axios
    .post(`${crudcrud}/appointmentData`, obj)
    .then((res) => {
      id = res.data._id;
    })
    .catch((err) => console.log(err));
  return Promise.resolve(id);
}

function displayUser() {
  axios
    .get(`${crudcrud}/appointmentData`)
    .then((res) => {
      res.data.forEach((obj) => {
        showUser(obj, obj._id);
      });
    })
    .catch((err) => console.log(err));
}

window.addEventListener("DOMContentLoaded", displayUser);

function showUser(obj, id) {
  // check(obj.email);
  const newLi = document.createElement("li");
  newLi.innerHTML = `${obj.username} - ${obj.email} - ${obj.phone} 
  <button class="delete-btn" onclick=deleteUser('${id}')>Delete</button> 
  <button class="edit-btn" onclick=editUser('${id}')>Edit</button>`;
  ul.appendChild(newLi);
}

// function check(email) {
//   const ul = document.getElementById("users");
//   for (let i = 0; i < ul.children.length; i++) {
//     if (ul.children[i].textContent.indexOf(email) != -1)
//       ul.removeChild(ul.children[i]);
//   }
// }

function deleteUser(id) {
  ul.removeChild(event.target.parentElement);
  axios
    .delete(`${crudcrud}/appointmentData/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

function editUser(id) {
  ul.removeChild(event.target.parentElement);

  axios.get(`${crudcrud}/appointmentData/${id}`).then((res) => {
    username.value = res.data.username;
    email.value = res.data.email;
    phone.value = res.data.phone;
    axios
      .delete(`${crudcrud}/appointmentData/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  });
}
