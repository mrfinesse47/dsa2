var maxArea = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;
  let maxChamp = 0;

  if (arr.length < 2) {
    return 0;
  }

  while (left !== right) {
    const minHeight = Math.min(arr[left], arr[right]);
    max = (right - left) * minHeight;
    maxChamp = Math.max(maxChamp, max);

    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxChamp;
};

console.log(maxArea([2, 1]));
