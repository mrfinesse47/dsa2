const flatten = (head) => {
  const nextArr = [];
  let currentNode = head;
  let prev = null;
  while (currentNode || nextArr.length > 0) {
    if (!currentNode) {
      currentNode = nextArr.pop();

      prev.next = currentNode;
      currentNode.prev = prev;
      prev = currentNode;

      currentNode = currentNode.next;
    } else if (currentNode.child) {
      if (currentNode.next) {
        nextArr.push(currentNode.next);
      }
      prev = currentNode;
      currentNode.next = currentNode.child;
      currentNode = currentNode.child;
      prev.child = null;
      currentNode.prev = prev;
    } else {
      prev = currentNode;
      currentNode = currentNode.next;
    }
  }
  return head;
};
