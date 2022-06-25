//15. 3Sum slow running solution
const threeSum = (nums) => {
  let arr = nums.sort((m, n) => m - n);
  let result = [];
  const hash = {};
  const checkedNums = {};

  if (nums.length < 3) {
    return [];
  }

  for (let tgtIdx = arr.length - 1; tgtIdx >= 0; tgtIdx--) {
    let target = arr[tgtIdx];

    let right = arr.length - 1;
    let left = 0;

    if (!checkedNums[target]) {
      checkedNums[target] = true;
      while (left < right) {
        if (arr[left] + arr[right] === target * -1) {
          const triplet = [arr[left], arr[right], target].sort((m, n) => m - n);

          if (
            hash[triplet] === undefined &&
            left !== tgtIdx &&
            right !== tgtIdx
          ) {
            hash[triplet] = true;
            result.push(triplet);
          }
          right--;
        } else if (arr[left] + arr[right] < target * -1) {
          left++;
        } else {
          right--;
        }
      }
    }

    right = arr.length - 1;
    left = 0;
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
