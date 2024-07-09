const posts = [
  {
    title: "post one",
    body: "this is post one",
  },
  {
    title: "post two",
    body: "this is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output = output + `<li> ${post.title}</li>`;
    });
    document.querySelector("body").innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("something went wrong");
      }
    }, 2000);
  });
}

// createPost({
//   title: "post three",
//   body: "this is post three",
// })
//   .then(getPosts)
//   .catch((err) => {
//     console.log(err);
//   });

// Async Await
// async function init() {
//   await createPost({
//     title: "post three",
//     body: "this is post three",
//   });
//   getPosts();
// }

// init();

// Async Await Fetch
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  const data = await res.json();
  console.log(data);
}
fetchUsers();
// promise.all
// const promise1 = Promise.resolve("hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
//   (res) => res.json()
// );
// Promise.all([promise1, promise2, promise3, promise4]).then((value) =>
//   console.log(value)
// );

// async await is a different way to handle responses
