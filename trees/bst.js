class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(num) {
    if (this.root === null) {
      this.root = new Node(num);
      return this;
    }
    let node = this.root;

    while (1) {
      if (num === node.value) return undefined;
      if (num > node.value) {
        if (node.right) {
          node = node.right;
        } else {
          return (node.right = new Node(num));
        }
      }
      if (num < node.value) {
        if (node.left) {
          node = node.left;
        } else {
          return (node.left = new Node(num));
        }
      }
    }
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree.insert(9));

console.log(tree);
