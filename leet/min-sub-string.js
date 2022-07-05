// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".
// The testcases will be generated such that the answer is unique.
// A substring is a contiguous sequence of characters within the string.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

//time limit exceded -- need a faster way

const minWindow = (str, pattern) => {
  const hash = {};
  let left = 0;
  let right = 0;
  let matches = 0;
  let indicies = [];
  let minLen = Infinity;

  if (str === pattern) {
    return pattern;
  }
  if (str.length < pattern.length) {
    return "";
  }

  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] === undefined) {
      hash[pattern[i]] = 1;
      matches++;
    } else {
      hash[pattern[i]]++;
    }
  }

  while (right < str.length) {
    if (str[right] in hash) {
      hash[str[right]]--;
      if (hash[str[right]] === 0) {
        matches--;
      }
    }
    while (!matches) {
      if (str[left] in hash) {
        let oldmin = minLen;

        minLen = Math.min(minLen, right - left);
        if (minLen < oldmin) {
          indicies = [left, right];
        }
        hash[str[left]]++;
        if (hash[str[left]] === 1) {
          matches++;
        }
      }
      left++;
    }
    right++;
  }

  return str.substr(indicies[0], indicies[1] - indicies[0] + 1);
};

console.log(minWindow("abc", "b"));
