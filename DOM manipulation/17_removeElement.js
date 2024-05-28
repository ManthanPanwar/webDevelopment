class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;

      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
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

  size() {
    let current = this.head;
    let sz = 0;
    while (current !== null) {
      current = current.next;
      sz++;
    }
    return sz;
  }

  removeElement(position) {
    let current = this.head;
    let previous = null;
    let currentPosition = 0;
    while (current !== null && currentPosition < position) {
      previous = current;
      current = current.next;
      currentPosition++;
    }
    previous.next = current.next;
  }
}

let ll = new LinkedList();
ll.append(1);
ll.append(3);
ll.append(2);
ll.append(5);
ll.append(1);
ll.append(9);
ll.printList();
ll.removeElement(ll.size() - 3);
ll.printList();
