// here it is 'elements' coz we are selecting all html elements with same class name.

const fruitType = document.getElementsByClassName("type"); // returns the collection of elements with same class

// console.log(fruitType[2]);
// fruitType[1].textContent = "Pineapple";
// fruitType[1].style.fontWeight = "bold";

// for (let i = 0; i < fruitType.length; i++) {
//   if (i == 1) continue;
//   fruitType[i].style.backgroundColor = "grey";
// }

fruitType[2].style.backgroundColor = "yellow";

for (let i = 0; i < fruitType.length; i++) {
  fruitType[i].style.fontWeight = "bold";
}
