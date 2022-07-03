//forgot to not traverse total tree in previous
//and i can try to implement without closure

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function findClosestValueInBst(tree, target) {
  // Write your code here.

  return traverse(tree, target, tree.value);

  function traverse(node, target, closest) {
    let oldMinDiff = Math.abs(target - closest);
    let difference = Math.abs(target - node.value);
    minDiff = Math.min(difference, oldMinDiff);
    // console.log("visiting:", node.value);
    if (oldMinDiff > minDiff) {
      closest = node.value;
    }
    if (target < node.value && node.left) {
      return traverse(node.left, target, closest);
    }
    if (target > node.value && node.right) {
      return traverse(node.right, target, closest);
    }
    //if equal or no node.right or node.left
    return closest;
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

console.log(findClosestValueInBst(tree, 10));
