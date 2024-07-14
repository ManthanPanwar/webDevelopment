// promise.all() is used to make parallel api calls
// and you pass an iterable to it
// reject all if one of the promises got failed

// promise.allsettled() is used to get result of all promises even some promises fails

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 success");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("p2 success");
    reject("p2 fail");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 success");
  }, 2000);
});

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => {
    console.error(err);
    console.log(err.errors); // it will form array of errors
  });
