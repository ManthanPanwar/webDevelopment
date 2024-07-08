// callBacks
const posts = [
  {
    title: "post one",
    body: "this is post one",
    createdAt: new Date().getTime(),
  },
  {
    title: "post two",
    body: "this is post two",
    createdAt: new Date().getTime(),
  },
];

// mimicing the server
// getPosts method will take some in getting the posts

// clear Interval
// let intervalID = 0;
// function getPosts() {
//   clearInterval(intervalID);
//   intervalID = setInterval(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output =
//         output +
//         `<li> ${post.title} - last updated ${
//           (new Date().getTime() - post.createdAt) / 1000
//         }</li>`;
//     });
//     document.querySelector("body").innerHTML = output;
//   }, 1000);
// }

// to know how many intervals are running
function getPosts() {
  const timerId = setInterval(() => {
    let output = "";
    posts.forEach((post) => {
      output =
        output +
        `<li> ${post.title} - last updated ${
          (new Date().getTime() - post.createdAt) / 1000
        }</li>`;
    });
    console.log("TimerId = ", timerId);
    document.querySelector("body").innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() }); // until the response from callback is recieved createPost will not end
    callback();
  }, 2000);
}

// // get the post and then create the post
// getPosts();
// createPost({
//   title: "post three",
//   body: "this is post three",
// });

// but we have to call getPosts right after createPost is called
// so we will use callback function.

// here createPost will be called and then it will wait 2 sec and then it will execute and will call callback function.
// after 2 sec createPost will be called and then it will call getPosts and it will again take 1 sec and then final output is given.

// function create4thPost(callback) {
//   let post = {
//     title: "post four",
//     body: "this is post four",
//   };
//   callback(post, () => {});
// }

function create4thPost(post, callback) {
  setTimeout(() => {
    posts.push({ ...post, createdAt: new Date().getTime() });
    callback();
  }, 3000);
}

createPost(
  {
    title: "post three",
    body: "this is post three",
  },
  getPosts
);

create4thPost(
  {
    title: "post four",
    body: "this is post four",
  },
  getPosts
);

// memory leak problems
// new setInterval will be created every time when getPosts is called.
// so there extra setIntervals running in the background
// you have to clear the old setInterval
