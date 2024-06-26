/*
Object1{properties and methods}
                      
Object2{properties and methods}
 */

/*
Object1{properties}:
                      call, apply or bind{methods}
Object2{properties}:

// you can write common methods
 */

const obj1 = {
  num: 2,
};

const obj2 = {
  num: 5,
};

const addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

// using call function(call attaches the function to the object)
console.log(addToThis.call(obj1, 1, 2, 3)); // functionName.call(Object, functionArgument)

// apply
const arr = [1, 2, 3];
console.log(addToThis.apply(obj1, arr));
console.log(addToThis.apply(obj2, arr));

// bind(returns newFunction with the function binded to it)
const bound = addToThis.bind(obj1);
console.log(bound(1, 2, 3));

let add = function (c) {
  console.log(this.a + this.b + c);
};

let obj3 = {
  a: 1,
  b: 2,
};

add.call(obj3, 3);

let argsToArray = function () {
  console.log(arguments); // array like
};

let argsToArray1 = function () {
  console.log([].slice.call(arguments)); // array
};

argsToArray(1, 2, 3);

let mammal = function (legs) {
  this.legs = legs;
};

let cat = function (legs, isDomesticated) {
  mammal.call(this, legs);
  this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);
console.log(lion);

let numArray = [12, 3, 5, 6, 2];
console.log(Math.min.apply(null, numArray));

let button = function (content) {
  this.content = content;
};

button.prototype.click = function () {
  console.log(`${this.button} clicked`);
};

let newButton = new button("add");
let boundButton = newButton.click.bind(newButton);

boundButton();

let myObj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log("parse called");
  },
  render() {
    this.asyncGet(
      function () {
        this.parse();
      }.bind(this)
    );
  },
};

myObj.render();
