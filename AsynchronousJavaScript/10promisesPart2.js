const posts = [
  { title: "post one", body: "this is post one" },
  { title: "post two", body: "this is post two" },
];

function getPost() {
  const output = "";
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li> ${post.title} </li>`;
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
        resolve(posts);
      } else {
        reject("something went wrong");
      }
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let val = posts.pop();

      if (val !== undefined) {
        resolve(val.title);
      } else {
        reject("Error : Array is Empty");
      }
    }, 1000);
  });
}

// createPost({ title: "post three", body: "this is post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

// deletePost()
//   .then(getPosts)
//   .catch((err) => console.log(err));
// deletePost()
//   .then(getPost)
//   .catch((err) => console.log(err));
// deletePost()
//   .then(getPost)
//   .catch((err) => console.log(err));
// deletePost()
//   .then(getPost)
//   .catch((err) => console.log(err));

let postThree = {
  title: "Post Three",
  body: "This is post three",
};

let lastActivityTime = new Date();
function upadateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}
deletePost().then((values) => console.log(values));
Promise.all([createPost(postThree), upadateLastActivityTime()])
  .then(deletePost)
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
deletePost().then((values) => console.log(values));
deletePost().then((values) => console.log(values));
