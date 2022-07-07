// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, min = null, max = null) {
  if (max !== null && tree.value >= max) {
    return false;
  }
  if (min !== null && tree.value < min) {
    return false;
  }
  if (tree.left && !validateBst(tree.left, min, tree.value)) {
    return false;
  }
  if (tree.right && !validateBst(tree.right, tree.value, max)) {
    return false;
  }
  return true;
}

const tree = new BST(10);

tree.left = new BST(5);

tree.right = new BST(15);
tree.right.right = new BST(22);

tree.right.left = new BST(13);
tree.right.left.right = new BST(14);

tree.left.left = new BST(2);
tree.left.left.left = new BST(1);

console.log(validateBst(tree));
