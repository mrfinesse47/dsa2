// Input: String="catfoxcat", Words=["cat", "fox"]
// Output: [0, 3]
// Explanation: The two substring containing both the words are "catfox" & "foxcat".

// Input: String="catcatfoxfox", Words=["cat", "fox"]
// Output: [3]
// Explanation: The only substring containing both the words is "catfox".

const wordsConcatenation = (string, wordsArr) => {
  if (words.length === 0 || words[0].length === 0) {
    return [];
  }
  const wordLength = wordsArr[0].length;
  const wordHash = {};
  wordsArr.forEach((word) => {
    if (wordHash[word] === undefined) {
      wordHash[word] = 1;
    } else {
      wordHash[word]++;
    }
  });
  let chars = "";
  for (let right = 0; right < string.length; right++) {
    chars += string[right];
    console.log(chars);
    if (chars.length === wordLength) {
      chars = chars.substring(1, 4);
    }
  }
};

console.log(wordsConcatenation("aacatcatfoxfox", ["cat", "fox"]));
