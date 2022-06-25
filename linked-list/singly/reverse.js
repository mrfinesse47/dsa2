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
  reverse() {
    if (this.length === 0) {
      return null;
    }
    let currentNode = this.head;
    let next;
    let prev = null;
    while (currentNode) {
      //or a for loop using length works,
      //a for loop can be less confusing to me
      next = currentNode.next;
      currentNode.next = prev; //when u set a param using . you are setting a value on the linked list,
      //the rest of the variables are references
      prev = currentNode;
      currentNode = next;
    }
    let head = this.head; //ref
    this.head = this.tail; //setting
    this.tail = head;
    return this;
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

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
console.log(list.reverse());
list.printAllVal();
