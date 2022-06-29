//155. Min Stack

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      if (this.minStack[this.minStack.length - 1] > val) {
        this.minStack.push(val);
      } else {
        this.minStack.push(this.minStack[this.minStack.length - 1]);
      }
    }
  }
  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const obj = new MinStack();

console.log(obj.getMin());
