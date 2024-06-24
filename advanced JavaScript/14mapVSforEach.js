// Example of illegal shadowning
const a = 50;
{
  // var a = 30;  // illegal shadowing(coz var a tries to change the value of a in the global scope)
  let b = 20;
  let c = 30;
}

console.log(a);

// forEach always returns undefined
var arr = [1, 2, 3, 5];

var newArr = arr.forEach((item, i) => {
  console.log(item + "index" + i);
});

console.log(newArr); // undefined

// *************************************************************************

// map returns new array(if nothing is returned then undefined is returned)
var arr = [1, 2, 3, 5];

var newArr = arr.map((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);

// **************************************************************************

function map(arr, func) {
  let return_ans = [];

  for (let i = 0; i < arr.length; i++) {
    return_ans[i] = func(arr[i]);
  }

  return return_ans;
}
// very important implementation
let ar = [1, 2, 3, 4];

const ans = map(ar, function (x) {
  return x * 2;
});

console.log(ans);
