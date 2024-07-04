class Queue {
  constructor() {
    this.arr = [];
    this.front = -1;
    this.rear = -1;
  }

  enqueuee(value) {
    if (this.front == -1 && this.rear == -1) {
      this.front++;
      this.rear++;
      this.arr[this.rear] = value;
    } else {
      this.rear++;
      this.arr[this.rear] = value;
    }
  }

  dequeuee() {
    if (this.front == -1) return -1;
    else {
      let temp = this.arr[this.front];
      this.arr[this.front] = undefined;
      this.front++;
      return temp;
    }
  }

  frontt() {
    return this.arr[this.front];
  }

  rearr() {
    return this.arr[this.rear];
  }

  isEmpty() {
    if (rear == -1) return "Empty";
    else return "Not Empty";
  }

  sizee() {
    return this.rear - this.front + 1;
  }

  displayQueue() {
    return this.arr;
  }
}

let q1 = new Queue();
q1.enqueuee(3);
q1.enqueuee(4);
q1.enqueuee(1);
q1.enqueuee(7);
q1.enqueuee(9);
console.log(q1.displayQueue());
console.log("size:" + q1.sizee());
console.log(q1.dequeuee());
console.log(q1.displayQueue());
console.log("size:" + q1.sizee());
console.log(q1.dequeuee());
console.log(q1.displayQueue());
console.log(q1.frontt());
console.log(q1.rearr());
console.log("size:" + q1.sizee());
