// 167. Two Sum II - Input Array Is Sorted

const twoSum = (arr, target) => {
  let left = 0;
  let sum;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(twoSum([-1, 0], -1));
