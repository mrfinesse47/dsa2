class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let minDiff = Infinity;
  let closest = null;
  traverse(tree);
  return closest;
  function traverse(node) {
    let difference = Math.abs(target - node.value);
    let oldMinDiff = minDiff;
    minDiff = Math.min(difference, minDiff);
    if (oldMinDiff !== minDiff) {
      closest = node.value;
    }
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
}

const tree = new BST(10);
tree.left = new BST(5);
tree.left.left = new BST(5);
tree.left.left.left = new BST(1);
tree.left.right = new BST(5);
tree.right = new BST(15);
tree.right.left = new BST(13);
tree.right.right = new BST(22);
tree.right.left.right = new BST(14);

console.log(findClosestValueInBst(tree, 25));
