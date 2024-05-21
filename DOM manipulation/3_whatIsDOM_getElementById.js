/*
What is DOM?
{
  DOM: Document Object Model(Tree representation of HTML)

  Global window object of the browser has a property(key) called document and this document is also a object.

  -> grabbing the element and then manipulating or changing it, is called DOM manipulation
}
*/

// const header = document.getElementById("header");
// header.style.backgroundColor = "blue"; // changes background color
// header.style.color = "white"; // changes the color of text
// // header.style.border = "6px solid orange"; // add the border

// header.style.borderBottom = "6px solid orange"; // adds border only at the bottom

// const mainHeader = document.getElementById("mainHeader");
// mainHeader.textContent = "Fresh Fruits Shop"; // CHANGES THE TEXT

// const fruits = document.getElementById("fruits");
// fruits.style.fontStyle = "italic";

// const thanks = document.getElementById("thanks");
// thanks.innerHTML = "<p> Thank you for visting us.</p>";
// thanks.style.fontWeight = "bold";

// Assignment exercise

const mainHeader = document.getElementById("mainHeader");
mainHeader.textContent = "Fruit World";
mainHeader.style.color = "orange";

const header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "6px solid orange";

const fruits = document.getElementById("fruits");
fruits.style.color = "green";

const thanks = document.getElementById("thanks");
thanks.innerHTML = "<p>Please visit us again</p>";
