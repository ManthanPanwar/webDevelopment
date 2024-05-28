// const n1 = {
//   value: 10,
// };

// const n2 = {
//   value: 11,
// };                     // you can directly assign next property to an object literal

// n1.next = n2;

// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adding node at the end of linkedList
  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    this.size++;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result = result + current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }

  insertAt(data, position) {
    let newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let previous = null;
    let currentPosition = 0;

    while (current !== null && currentPosition < position) {
      previous = current;
      current = current.next;
      currentPosition++;
    }
    newNode.next = current;
    previous.next = newNode;
  }

  getAt(position) {
    let current = this.head;
    let currentPosition = 0;

    while (currentPosition < position) {
      current = current.next;
      currentPosition++;
    }
    console.log(current.data);
  }

  oddElementSum() {
    let sum = 0;
    let current = this.head;

    while (current !== null) {
      if (current.data % 2 !== 0) {
        sum = sum + current.data;
      }
      current = current.next;
    }
    console.log(sum);
  }
}

let ll = new LinkedList();
ll.append(2);
ll.append(6);
ll.append(4);

ll.oddElementSum();
ll.printList();
