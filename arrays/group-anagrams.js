//49. Group Anagrams

const groupAnagrams = (arr) => {
  const result = [[]];
  const hash = {};
  let arrayPushIndex = 0;

  arr.forEach((str) => {
    const key = determineHashArr(str);
    if (hash[key] === undefined) {
      hash[key] = arrayPushIndex;
      result[arrayPushIndex] = [];
      result[arrayPushIndex].push(str);
      arrayPushIndex++;
    } else {
      result[hash[key]].push(str);
    }
  });
  return result;
};

function determineHashArr(str) {
  const alphaArr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ];
  for (let i = 0; i < str.length; i++) {
    alphaArr[alphaValue(str[i])]++;
  }
  return alphaArr;
}

function alphaValue(c) {
  return c.charCodeAt(0) - 97;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
