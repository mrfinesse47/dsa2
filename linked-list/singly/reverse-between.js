// 92. Reverse Linked List II

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  printAllVal() {
    if (this.length === 0) {
      return null;
    }
    let node = this.head;
    let index = 0;
    while (node.next) {
      console.log(`${index}:`, node.val);
      node = node.next;
      index++;
    }
    console.log(`${index}:`, node.val);
    console.log("total length:", this.length);
  }
}

var reverseBetween = function (head, left, right) {
  let currentNode = head;
  let oneLeft = null;
  let oneRight = null;
  let localHead = null;
  let localTail = null;
  let next;
  let prev = null;

  if (left >= right) {
    return head;
  }

  for (let i = 1; currentNode; i++) {
    if (i === left - 1) {
      oneLeft = currentNode;
    }
    if (i === right + 1) {
      oneRight = currentNode;
    }
    if (i >= left && i <= right && right !== left) {
      if (i === left) {
        localTail = currentNode; //the first becomes the local tail
      }
      if (i === right) {
        localHead = currentNode; //the right becomes the local head
      }
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    } else {
      currentNode = currentNode.next;
    }
  }
  if (oneLeft) {
    oneLeft.next = localHead;
  } else {
    head = localHead;
  }
  if (oneRight) {
    localTail.next = oneRight;
  } else {
    localTail.next = null;
  }

  return head;
};

var list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

list.head = reverseBetween(list.head, 1, 3);

console.log(list.printAllVal());
