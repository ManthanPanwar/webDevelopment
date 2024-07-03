class Stack {
  constructor() {
    this.top = -1;
    this.arr = [];
  }

  pushIntoStack(value) {
    this.top++;
    this.arr[this.top] = value;
  }

  popFromStack() {
    if (this.top === -1) return -1;
    else {
      let temp = this.arr[this.top];
      this.top--;
      return temp;
    }
  }

  topp() {
    return this.arr[this.top];
  }

  sizee() {
    return this.top + 1;
  }
}

let stk = new Stack();

stk.pushIntoStack(1);
console.log(stk.popFromStack());
console.log(stk.popFromStack());
console.log(stk.popFromStack());
stk.pushIntoStack(12);
stk.pushIntoStack(16);
stk.pushIntoStack(9);
console.log(stk.topp());
console.log(stk.sizee());
