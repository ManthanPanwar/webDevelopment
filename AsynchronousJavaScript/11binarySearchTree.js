// class Node {
//   constructor(data = 0, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(data) {
//     const newNode = new Node(data);

//     if ((this.root = null)) this.root = newNode;
//     else {
//       this.insertNode(this.root, newNode);
//     }
//   }

//   insertNode(bst, node) {
//     if (node.data < bst.data) {
//       if (bst.left === null) {
//         bst.left = node;
//       } else {
//         this.insertNode(bst.left, node);
//       }
//     } else {
//       if (bst.right === null) {
//         bst.right = node;
//       } else {
//         this.insertNode(bst.right, node);
//       }
//     }
//   }

//   searchNode(bst, data) {
//     if ((bst.data = null)) return false;
//     if (data < bst.data) {
//       return this.searchNode(bst.left, data);
//     } else if (data > bst.data) {
//       return this.searchNode(bst.right, data);
//     } else return true;
//   }
// }

// const bst = new BST();
// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(3);
// bst.insert(7);
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // Insert a data into the BST
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Search for a data in the BST
  search(data) {
    return this.searchNode(this.root, data);
  }

  searchNode(node, data) {
    if (node === null) {
      return false;
    }

    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return true;
    }
  }
}

// Example usage:
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(7)); // Output: true
console.log(bst.search(20)); // Output: false
