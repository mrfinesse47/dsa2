function subarraySort(array) {
  // Write your code here.
  let left = 1;
  let right = array.length - 2;
  let searchRight = false;
  let searchRightMin;
  let searchRightMax;
  let searchLeft = false;

  while (left < array.length) {
    if (array[left - 1] > array[left] && !searchRight) {
      searchRightMin = array[left];
      searchRight = true;
    }
    if (searchRight) {
      searchRightMin = Math.min(searchRightMin, array[left]);
    }
    if (array[right + 1] < array[right] && !searchLeft) {
      searchRightMax = array[right];
      searchLeft = true;
    }
    if (searchLeft) {
      searchRightMax = Math.max(searchRightMax, array[right]);
    }
    left++;
    right--;
  }

  let indexOne = -1;
  let indexTwo = -1;
  if (searchRightMax && searchRightMin) {
    for (let i = 0; i < array.length; i++) {
      if (searchRightMin < array[i] && indexOne === -1) {
        indexOne = i;
      }
      if (searchRightMax < array[i] && indexTwo === -1) {
        indexTwo = i - 1;
      }
    }
    if (indexTwo === -1) {
      indexTwo = array.length - 1;
    }
  }

  return [indexOne, indexTwo];
}

console.log(subarraySort([5, 4, 3, 2, 1]));
