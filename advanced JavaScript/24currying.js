// one function returning another function and you want to call both of them.

function addConstantValue(constant) {
  return (value) => {
    return () => {
      return constant + value;
    };
  };
}

console.log(addConstantValue(11)(20)());

function fun1(a) {
  return (fun2 = (b) => {
    a = a + b;

    console.log(a);
  });
}

fun1(10)(30);

// currying using bind
function divide(a, b) {
  console.log(b / a);
}

const divideByTwo = divide.bind(this, 2);

divideByTwo(10);
