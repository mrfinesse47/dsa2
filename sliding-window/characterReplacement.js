const characterReplacement = (s, k) => {
  const charCounter = {};
  let total = 0;
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let maxChar = 0;

  while (right < s.length) {
    if (charCounter[s[right]] === undefined) {
      charCounter[s[right]] = 1;
    } else {
      charCounter[s[right]]++;
    }
    maxChar = Math.max(maxChar, charCounter[s[right]]);
    total++;

    while (k < total - maxChar) {
      charCounter[s[left]]--;
      total--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }
  return maxLen;
};

function determineMaxChar(obj) {
  let max = 0;
  for (const key in obj) {
    max = Math.max(max, obj[key]);
  }
  return max;
}

console.log(characterReplacement("AABABBA", 2));
