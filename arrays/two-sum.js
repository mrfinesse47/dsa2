// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

var twoSum = function (nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let huntFor = target - nums[i];
    if (hashMap[huntFor]) {
      if (i !== hashMap[huntFor]) return [i, hashMap[huntFor]];
    }
  }
};

console.log(twoSum([1, 3, 4, 2], 6));
