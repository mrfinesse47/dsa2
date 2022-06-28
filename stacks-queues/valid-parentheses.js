// 20. Valid Parentheses
//Runtime: 76 ms, faster than 70.85% of JavaScript online submissions for Valid Parentheses.

const isValid = (s) => {
  const stack = [];
  let poppedChar;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "(" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      poppedChar = stack.pop();

      if (s[i] === "]") {
        if (poppedChar !== "[") {
          return false;
        }
      }
      if (s[i] === ")") {
        if (poppedChar !== "(") {
          return false;
        }
      }
      if (s[i] === "}") {
        if (poppedChar !== "{") {
          return false;
        }
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

console.log(isValid("([]){}[[]]"));

// "([]){}[[]]"--true

// stack
// ([
//  ]
// pop [
