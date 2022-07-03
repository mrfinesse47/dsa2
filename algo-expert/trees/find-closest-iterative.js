class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  let node = tree;
  let closest = tree.value;
  while (node !== null) {
    // console.log("visiting:", node.value);
    let difference = Math.abs(node.value - target);
    let closestDiff = Math.abs(closest - target);
    if (difference < closestDiff) {
      closest = node.value;
    }
    if (node.value < target) {
      node = node.right;
    } else if (node.value > target) {
      node = node.left;
    } else {
      return node.value;
    }
  }
  return closest;
}

const tree = new BST(10);
tree.left = new BST(5);
tree.left.left = new BST(2);
tree.left.left.left = new BST(1);
tree.left.right = new BST(5);
tree.right = new BST(15);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
tree.right.left.right = new BST(14);

console.log(findClosestValueInBst(tree, 0));
