//226. Invert Binary Tree

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function BFS(root) {
  let node = root;
  const data = [];
  const queue = [];

  //make use if a queue, fifo

  queue.push(node);

  while (queue.length > 0) {
    node = queue.shift();
    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
    data.push(node.val);
  }

  return data;
}

const invertTree = (root) => {
  if (root === null) {
    return root; //so stupid
  }
  let node = root;
  traverse(node);

  function traverse(node) {
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  return root;
};

let tree = new TreeNode(10);
tree.left = new TreeNode(2);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right = new TreeNode(7);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);

console.log("before", BFS(tree));
tree = invertTree(tree);
console.log("after", BFS(tree));
