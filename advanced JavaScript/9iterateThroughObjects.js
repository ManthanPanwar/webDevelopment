const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
// to iterate through the object you have to somehow figure out the keys and you will be done.
// and it can be done using Object class in which we have Object.keys(pass the object)

const arrOfKeys = Object.keys(obj);

// now you know all the keys and now you can simply iterate through the array of keys and find its value.

arrOfKeys.forEach((key) => {
  console.log(obj[key]);
});

// other way

Object.keys(obj).forEach((key) => {
  console.log(obj[key]);
});
