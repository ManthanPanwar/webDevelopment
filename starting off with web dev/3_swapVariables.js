let a = 10;
let b = 15;

console.log(`Before: value of a: ${a} and value of b: ${b}`);

let temp = a;
a = b;
b = temp;

console.log(`After: value of a: ${a} and value of b: ${b}`);
