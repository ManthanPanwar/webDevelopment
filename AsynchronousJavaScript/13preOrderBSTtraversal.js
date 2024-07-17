class Node {
  constructor(data = undefined) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Stack {
  constructor() {
    this.arr = [];
  }

  push(x) {
    this.arr.push(x);
  }

  isEmpty() {
    if (this.arr.length === 0) return true;
    else return false;
  }

  pop() {
    if (!this.isEmpty()) {
      return this.arr.pop();
    } else return -1;
  }

  top() {
    return this.arr[this.arr.length - 1];
  }
}

class BST {
  constructor() {
    this.root = new Node();
  }

  insert(x) {
    if (this.root.data === undefined) {
      this.root.data = x;
    } else {
      let temp = this.root;
      while (true) {
        if (x <= temp.data) {
          if (temp.left != null) {
            temp = temp.left;
          } else {
            let newNode = new Node(x);
            temp.left = newNode;
            break;
          }
        } else if (x > temp.data) {
          if (temp.right != null) temp = temp.right;
          else {
            let newNode = new Node(x);
            temp.right = newNode;
            break;
          }
        }
      }
    }
  }

  search(x) {
    if (this.root.data === undefined) return -1;

    let temp = this.root;
    while (true) {
      if (temp.data === x) return 1;
      if (x <= temp.data) {
        if (temp.left != null) temp = temp.left;
        else return -1;
      } else if (x > temp.data) {
        if (temp.right != null) temp = temp.right;
        else return -1;
      }
    }
  }

  preOrderRecursive(temp = this.root) {
    if (temp === null || temp.data === undefined) return;

    console.log(temp.data);
    this.preOrderRecursive(temp.left);
    this.preOrderRecursive(temp.right);
  }

  preOrderIterative() {
    let stk = new Stack();
    if (this.root.data === undefined) return;
    stk.push(this.root);
    while (!stk.isEmpty()) {
      let temp = stk.pop();
      console.log(temp.data);
      if (temp.right) stk.push(temp.right);
      if (temp.left) stk.push(temp.left);
    }
  }
}

let bst1 = new BST();
bst1.insert(1);
bst1.insert(2);
bst1.insert(5);
bst1.insert(71);
bst1.insert(61);
bst1.insert(36);
bst1.insert(13);
bst1.insert(5);
bst1.insert(75);
bst1.insert(11);
bst1.preOrderRecursive();
console.log("***********************************");
bst1.preOrderIterative();
