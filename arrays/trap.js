// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

var trap = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let currentLevel = 0;
  let totalScore = 0;
  let leftMax = 0;
  let rightMax = 0;

  if (arr.length < 3) {
    return 0;
  }

  while (left !== right) {
    leftMax = Math.max(arr[left], leftMax);
    rightMax = Math.max(arr[right], rightMax);
    if (arr[left] <= rightMax) {
      if (currentLevel > arr[left]) {
        totalScore += currentLevel - arr[left];
      }
      left++;
    } else if (arr[right] < leftMax) {
      if (currentLevel > arr[right]) {
        totalScore += currentLevel - arr[right];
      }
      right--;
    } else {
      right--;
      left++;
    }

    currentLevel = Math.min(rightMax, leftMax);
  }
  return totalScore;
};

console.log(
  trap([
    10000, 0, 0, 0, 4, 2, 0, 3, 2, 5, 0, 0, 100, 0, 10000, 125, 23, 1, 32, 3, 3,
    3, 3, 3, 3, 12341,
  ])
);
