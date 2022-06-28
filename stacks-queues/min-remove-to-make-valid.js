// 1249. Minimum Remove to Make Valid Parentheses

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

const minRemoveToMakeValid = (s) => {
  const sArr = s.split("");
  const leftStack = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === ")") {
      if (leftStack.length === 0) {
        sArr[i] = " ";
      } else {
        leftStack.pop();
      }
    }
    if (sArr[i] === "(") {
      leftStack.push(i);
    }
  }

  for (let i = 0; i < leftStack.length; i++) {
    sArr[leftStack[i]] = " ";
  }

  return sArr.join("").replace(/\s+/g, "");
};

console.log(minRemoveToMakeValid("))(("));
