// Here also we are using 'elements' for selecting all similar tags.

const listItem = document.getElementsByTagName("li"); // returns the html collection

// listItem[2].style.color = "orange";
// listItem[2].style.fontWeight = "bold";

// for (let i = 0; i < listItem.length; i++) {
//   listItem[i].style.fontStyle = "italic";
// }

listItem[4].style.color = "blue";
for (let i = 0; i < listItem.length; i++) {
  listItem[i].style.fontStyle = "italic";
}
