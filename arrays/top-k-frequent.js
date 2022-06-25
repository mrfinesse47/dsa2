//347. Top K Frequent Elements

// Runtime: 86 ms, faster than 88.52% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 43.1 MB, less than 99.56% of JavaScript online submissions for Top K Frequent Elements.
// lol

const topKFrequent = (nums, k) => {
  const hash = {};
  const rev = {};
  let result = [];

  if (k > nums.length) {
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let key in hash) {
    if (rev[hash[key]]) {
      rev[hash[key]].push(key);
    } else {
      rev[hash[key]] = [key];
    }
  }

  while (k > 0) {
    let maxVal = Math.max(...Object.keys(rev));
    let values = rev[maxVal];
    result = result.concat(values);
    delete rev[maxVal];
    k -= values.length;
  }

  return result;
};

console.log(topKFrequent([1], 1));
