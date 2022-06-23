const lengthOfLongestSubstring = function (str) {
  let left = 0;
  let right = 0;
  let hash = {};
  let max = 0;

  while (right < str.length) {
    if (!hash[str[right]]) {
      hash[str[right]] = 1;
    } else {
      hash[str[right]]++;
      while (hash[str[right]] > 1) {
        hash[str[left]]--;
        max = Math.max(max, right - left);
        left++;
      }
    }
    right++;
  }
  max = Math.max(max, right - left);
  return max;
};

console.log(lengthOfLongestSubstring("pwwkew"));
