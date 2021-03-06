//142. Linked List Cycle II
//there is a solution that doesnt use as much memory ie space O(1)
//the tortise and hare algo

const SinglyLinkedList = require("./singly-linked-lists");

const list = new SinglyLinkedList();
list.push(3);
list.push(2);
list.push(0);
list.push(-4);
list.tail.next = list.get(1);

const detectCycle = (node) => {
  //use set
  const nodeTracker = new Set();
  while (node) {
    if (nodeTracker.has(node)) {
      return node;
    }
    nodeTracker.add(node);
    node = node.next;
  }
  return null;
};

console.log(detectCycle(list.head));
