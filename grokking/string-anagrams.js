//Problem Challenge 2: String Anagrams (hard)

// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

//a sliding window problem

function stringAnagrams(str, pattern) {
  const hash = {};
  const windowHash = {};
  let hasMatched = false;
  const result = [];
  let idealMatchCount = 0;
  let runningMatchCount = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] === undefined) {
      idealMatchCount++;
      hash[pattern[i]] = 1;
    } else {
      hash[pattern[i]]++;
    }
  }

  for (
    let right = 0, left = pattern.length * -1;
    right < str.length;
    left++, right++
  ) {
    if (windowHash[str[right]] === undefined) {
      windowHash[str[right]] = 1;
    } else {
      windowHash[str[right]]++;
    }
    if (left >= 0) {
      if (windowHash[str[left]] > 0) {
        windowHash[str[left]]--;
        if (windowHash[str[left]] === 0) {
          delete windowHash[str[left]];
        }
      } else {
        delete windowHash[str[left]];
      }
    }

    if (windowHash[str[right]] === hash[str[right]] && hash[str[right]]) {
      if (compareTwoObjects(hash, windowHash)) {
        hasMatched = true;
        result.push(left + 1);
        idealMatchCount = Object.keys(hash).length;
      }
    }
  }
  return result;
}

function compareTwoObjects(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(stringAnagrams("abbcabc", "abc"));

// {p:1,q:1}
// idealmatchcount=2
