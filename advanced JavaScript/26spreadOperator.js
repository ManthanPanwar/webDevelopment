const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = obj1; // (deep copy) it passes the reference of obj1 to obj2(data is not passed, reference is passed)

obj2.key1 = "value100";

console.log(obj1);

// spread operator(creates similar thing but new)
const obj3 = { ...obj1 }; //new object is passed which was exactly same as obj1
obj3.key1 = "value300";
console.log(obj1);

// and you can change the new object
const obj4 = { ...obj1, key1: "value400", key3: "value500" };
console.log(obj4);

// ***********************************************************************
// for array
const arr1 = [1, 2, 4, 6];
const arr2 = [7, 9, 0];
const obj5 = { a: 1 };
const arr3 = [...arr1, ...arr2, { ...obj5 }]; // union of two arrays
console.log(arr3.length);
console.log(arr3);
