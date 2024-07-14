const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Manthan Panwar");
  }, 1000);
});

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Sanket Panwar");
//   }, 5000);
// });

// async function handlePromise() {
//   console.log("king");
//   const val = await p;
//   console.log(val);
//   console.log("Namaste ");

//   const val2 = await p2;
//   console.log(val2);
// }
//handlePromise();
//console.log("don");

//

// async function handlePromiseFetch() {
//   const data = await fetch("https://api.github.com/users/ManthanPanwar");

//   const jsonData = await data.json();

//   console.log(jsonData);
// }
// handlePromiseFetch();

// other way
fetch("https://api.github.com/users/ManthanPanwar")
  .then((res) => res.json())
  .then((jsonData) => console.log(jsonData));

//

// callStack: {handlePromise}

// normal execution
// p.then((res) => console.log(res));
