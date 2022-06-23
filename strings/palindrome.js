// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right && left !== right) {
    const isLeftValid = isValidChar(s[left]);
    const isRightValid = isValidChar(s[right]);

    if (isLeftValid && isRightValid) {
      if (!isEqualChar(s[left], s[right])) {
        return false;
      }
      left++;
      right--;
    } else if (!isLeftValid) {
      left++;
    } else if (!isRightValid) {
      right--;
    }
  }
  return true;
};

function isEqualChar(char1, char2) {
  let charCode1 = char1.charCodeAt(0);
  let charCode2 = char2.charCodeAt(0);

  if (charCode1 < 97) {
    charCode1 += 32;
  }
  if (charCode2 < 97) {
    charCode2 += 32;
  }
  if (charCode1 === charCode2) {
    return true;
  }
  return false;
}

function isValidChar(char) {
  let charCode = char.charCodeAt(0);

  if (
    (charCode >= 97 && charCode <= 122) ||
    (charCode >= 65 && charCode <= 90) ||
    (charCode >= 48 && charCode <= 57)
  ) {
    return true;
  }
  return false;
}

console.log(isPalindrome("0P"));
