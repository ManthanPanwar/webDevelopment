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

  findMiddle() {
    if (this.head === null) {
      console.log("List is Empty");
      return null;
    }

    let fast = this.head;
    let slow = this.head;

    // if you write 'fast.next != null' first then it will give error
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    console.log(slow.data);
  }
}

let ll = new LinkedList();
ll.append(1);
ll.append(1);
ll.append(2);
ll.append(4);
ll.append(3);
ll.append(9);
ll.append(10);

ll.printList();
ll.findMiddle();
