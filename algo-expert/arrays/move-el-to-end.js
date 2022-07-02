function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let tmp;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] === toMove) {
      right--;
    } else if (array[left] !== toMove) {
      left++;
    } else {
      tmp = array[right];
      array[right] = array[left];
      array[left] = tmp;
      right--;
      left++;
    }
  }
  return array;
}

console.log(moveElementToEnd([1, 2, 3], 2));
