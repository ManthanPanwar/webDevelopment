// querySelector is used to grab single element

const mainHeading = document.querySelector("#mainHeader"); // grabbing id
mainHeading.style.textAlign = "center";

const types = document.querySelector(".Types");
types.style.backgroundColor = "grey";
types.style.padding = "30px"; // applying padding
types.style.margin = "30px"; // applying margin
types.style.width = "50%"; // applying width
types.style.borderRadius = "6px"; // applying corner curve
types.style.listStyleType = "none"; // removing bullet points from ul

const heading = document.querySelector("h2");
heading.style.marginLeft = "30px"; // applying margin from the left side only

// const fruitItems = document.querySelector(".type"); // selects the 1st class item by default
// fruitItems.style.backgroundColor = "white";

// const fruitItemsLast = document.querySelector(".type:last-child"); // selects the last class item
// fruitItemsLast.style.backgroundColor = "blue";

// const fruitItemsNth = document.querySelector(".type:nth-child(2)"); // selects nth item (1-based indexing)
// fruitItemsNth.style.backgroundColor = "green";

// .
// .
// .
// .
// .
// .

// querySelectorAll is used to grab all the elements with same class or tag

// The collection returned here is a nodeList and not the HTML collection.
// The difference between HTML collection and nodeList is that you can't apply array methods on it whereas on nodeList array methods are applicable
// array methods: pop, push, filter, forEach, split, sort, etc.

const fruitItems = document.querySelectorAll(".type");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = "white";
  fruitItems[i].style.padding = "30px";
  fruitItems[i].style.margin = "30px";
  fruitItems[i].style.width = "50%";
  fruitItems[i].style.borderRadius = "6px";
}

// targeting odd items

const oddFruitItems = document.querySelectorAll(".type:nth-child(odd)");
for (let i = 0; i < oddFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = "lightgrey";
}

const fruitsHeading = document.querySelector("#fruits");
fruitsHeading.style.color = "brown";

const evenFruitItems = document.querySelectorAll(".type:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "darkred";
  evenFruitItems[i].style.color = "white";
}
