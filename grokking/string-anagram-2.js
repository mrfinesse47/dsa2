// Input: String="ppqp", Pattern="pq"
// Output: [1, 2]
// Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".

// Input: String="abbcabc", Pattern="abc"
// Output: [2, 3, 4]
// Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".

function stringAnagrams(str, pattern) {
  const hash = {};
  const result = [];

  for (let i = 0; i < pattern.length; i++) {
    if (hash[pattern[i]] === undefined) {
      hash[pattern[i]] = 1;
    } else {
      hash[pattern[i]]++;
    }
  }
  let matches = Object.keys(hash).length;

  for (
    let right = 0, left = pattern.length * -1;
    //the left pointer starts out negative and will trail the window by 1
    //adding back characters as it goes
    right < str.length;
    left++, right++
  ) {
    if (str[right] in hash) {
      hash[str[right]]--; //remove them once you find them
      //dont be afraid to go negative, it will make up for it as ot goes
      if (hash[str[right]] === 0) {
        //once we cross zero decrement total matches
        matches--;
      }
    }

    if (left >= 0) {
      //the left pointer trails behind the window putting things back
      if (str[left] in hash) {
        hash[str[left]]++; //put it back

        if (hash[str[left]] === 1) {
          matches++;
        }
      }
    }
    if (matches === 0) {
      result.push(left + 1);
    }
  }
  return result;
}

console.log(stringAnagrams("ppqpppqp", "pppp"));
