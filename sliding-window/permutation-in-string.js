// 567. Permutation in String

const checkInclusion = (s1, s2) => {
  const sOneLength = s1.length;
  const sOneHash = {};
  const sTwoHash = {};
  if (sOneLength > s2.length) {
    return false;
  }

  let i = 0;

  while (i < sOneLength) {
    if (sOneHash[s1[i]] === undefined) {
      sOneHash[s1[i]] = 1;
    } else {
      sOneHash[s1[i]]++;
    }
    i++;
  }

  let left = sOneLength * -1;
  let right = 0;

  while (right < s2.length) {
    if (sTwoHash[s2[right]] === undefined) {
      sTwoHash[s2[right]] = 1;
    } else {
      sTwoHash[s2[right]]++;
    }
    if (left >= 0) {
      sTwoHash[s2[left]]--;
      if (sTwoHash[s2[left]] <= 0) {
        delete sTwoHash[s2[left]];
      }
    }
    if (objEqual(sOneHash, sTwoHash)) {
      return true;
    }
    left++;
    right++;
  }

  return false;
};

function objEqual(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkInclusion("a", "ab"));
