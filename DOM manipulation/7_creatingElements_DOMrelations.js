// // createElement
const para = document.createElement("p");
// // createTextNode
const paraText = document.createTextNode("Total fruits: 4");
// // appendChild
para.appendChild(paraText);

// //this will insert the para as a third child(last child) of div2

const divs = document.getElementsByTagName("div");
const div2 = divs[1];

// // this will insert the para as a third child(last child) of div2
div2.appendChild(para);

// // insertBefore
// const ul = document.querySelector(".Types");
// // div2.insertBefore(para, ul); // insert before the unordered list
// // setAttribute
// para.setAttribute("title", "fruitsInBasket");
// // className
// para.className = "fruitCount";

// // id
// para.id = "fruitTotal";

// console.log(para);

// ..
// ..
// ..
// ..
// ..
// ..

// DOM relations
const ul = document.querySelector(".Types");

// parent  => parentElement
ul.parentElement.style.backgroundColor = "pink"; // makes the whole div element pink
ul.parentElement.parentElement.style.color = "green"; // Grandparent of ul (in this case whole body)
ul.parentElement.style.width = "50%";

// children  => children(return HTML collection), firstElementChild, lastElementChild

ul.children[1].style.backgroundColor = "yellow"; // children returns HTML collection(so specify which child)
ul.children[1].style.width = "50%";
ul.firstElementChild.style.color = "blue"; // selects first child
// siblings

ul.nextElementSibling.style.fontWeight = "bold"; // selects next sibling
ul.nextElementSibling.style.backgroundColor = "darkred";

ul.previousElementSibling.style.backgroundColor = "black";
ul.previousElementSibling.style.padding = "20px";
