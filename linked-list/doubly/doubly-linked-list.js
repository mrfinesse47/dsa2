class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return node;
    }
    const prev = this.tail.prev;
    const oldNode = this.tail;
    oldNode.prev = null;
    oldNode.next = null;
    this.tail = prev;
    prev.next = null;
    this.length--;
    return oldNode;
  }
  shift() {
    if (this.length === 0) {
      return;
    }
    const oldNode = this.head;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;

      if (this.length === 1) {
        this.tail = this.head;
      }
    }
    oldNode.next = null;
    return oldNode;
  }
  unShift(num) {
    const node = new Node(num);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }
    const oldHead = this.head;
    oldHead.prev = node;
    node.next = oldHead;
    this.head = node;
    this.length++;
    return true;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  printAllVal() {
    let node = this.head;
    let index = 0;
    if (this.length === 0) {
      return;
    }
    while (node.next) {
      console.log(`index:${index}:`, node.val);
      node = node.next;
      index++;
    }
    console.log(`index: ${index}:`, node.val);
    console.log("total length:", this.length);
  }
}

const list = new DoublyLinkedList();

list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);

list.printAllVal();
