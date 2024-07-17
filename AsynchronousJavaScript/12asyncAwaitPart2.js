// callbacks causes callback hell which is solved by promises but it also causes promise hell which is solved by async await.

console.log("person1 ticket");
console.log("person2 ticket");

// const promiseWifeBringsTicket = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Ticket");
//   }, 3000);
// });

// const getPopcorn = promiseWifeBringsTicket.then((t) => {
//   console.log("wife: here is the ticket");
//   console.log("husband: lets go in");
//   console.log("wife: no i am hungry");
//   return new Promise((resolve, reject) => {
//     resolve(`${t} popcorn`);
//   });
// });

// const getButter = getPopcorn.then((m) => {
//   console.log("husband: i got some popcorn");
//   console.log("husband: now lets go in");
//   console.log("wife: i need butter on popcorn");
//   return new Promise((resolve, reject) => {
//     resolve(`${m} butter`);
//   });
// });

// getButter.then((m) => {
//   console.log(m);
// });

const promiseWifeBringsTicket = new Promise((resolve, reject) => {
  setTimeout(() => {
    let bringTicket = false;
    if (bringTicket) {
      resolve("Ticket");
    } else {
      reject("sad face");
    }
  }, 3000);
});

const getPopcorn = new Promise((resolve, reject) => {
  resolve(`popcorn`);
});

const addButter = new Promise((resolve, reject) => {
  resolve("butter");
});

const getColdDrinks = new Promise((resolve, reject) => {
  resolve("cold drinks");
});
const preMovie = async () => {
  let ticket = await promiseWifeBringsTicket;
  // let ticket;
  // try {
  //   ticket = await promiseWifeBringsTicket;
  // } catch (e) {
  //   ticket = "sadFace";
  // }

  // let [popcorn, butter, coke] = await Promise.all([
  //   getPopcorn,
  //   addButter,
  //   getColdDrinks,
  // ]);
  // console.log(`${popcorn}, ${butter}, ${coke}`);

  // console.log(`wife: here is the ${ticket}`);
  // console.log("husband: lets go in");
  // console.log("wife: no i am hungry");

  // let popcorn = await getPopcorn;

  // console.log(`husband: i got some ${popcorn}`);
  // console.log("husband: now lets go in");
  // console.log("wife: i need butter on popcorn");

  // let butter = await addButter;

  // console.log(`husband: i got some ${butter} on popcorn`);
  // console.log(`husband: anything else`);
  // console.log("wife: need cold drinks");

  // let coldDrink = await getColdDrinks;

  // console.log(`husband: i got the ${coldDrink}`);
  // console.log(`husband: anything else`);
  // console.log(`wife: lets go we are getting late`);
  // console.log(`husband: thank you for the reminder *grins*`);

  // it must return the ticket
  return ticket;
};
preMovie()
  .then((m) => console.log(`person3 ${m}`))
  .catch((err) => console.log(err));
console.log("person4 ticket");
console.log("person5 ticket");
