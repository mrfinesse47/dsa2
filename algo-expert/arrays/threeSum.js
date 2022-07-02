function threeNumberSum(array, targetSum) {
  const result = [];
  if (array.length < 3) {
    return [];
  }
  array = array.sort((m, n) => m - n);
  for (let i = 0; i < array.length - 2; i++) {
    let left = 1 + i;
    let right = array.length - 1;
    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum > targetSum) {
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        result.push([array[i], array[left], array[right]]);
        right--;
        left++;
      }
    }
  }
  return result;
}

console.log(threeNumberSum([1, 2, 3], 6));

//sum hash
//total:[num1,num2]
//then do 2 sum
