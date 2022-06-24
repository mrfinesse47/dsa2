// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

const minSubArrayLen = (target, arr) => {
  let sum = 0;
  let left = 0;
  let minLength = Infinity;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] >= target) {
      return 1;
    }
    sum += arr[right];
    while (sum >= target) {
      minLength = Math.min(right - left + 1, minLength);
      sum -= arr[left];
      left++;
    }
  }
  if (minLength === Infinity) {
    minLength = 0;
  }
  return minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
