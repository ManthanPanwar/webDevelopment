function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y; // returning a function
}
var z = x();
console.log(z); // value of z is entire code of function y.

/* *************************************************************** */

// another way(cool way) of writing above code
function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
}
var z = x();
console.log(z); // value of z is entire code of function y.
