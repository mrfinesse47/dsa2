//150. Evaluate Reverse Polish Notation

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

const evalRPN = (tokens) => {
  let stack = [];
  let num1;
  let num2;
  for (let i = 0; i < tokens.length; i++) {
    let c = tokens[i];
    if (c === "+" || c === "*" || c === "-" || c === "/") {
      num1 = Number(stack.pop());
      num2 = Number(stack.pop());
      switch (tokens[i]) {
        case "+":
          stack.push(num2 + num1);
          break;
        case "-":
          stack.push(num2 - num1);
          break;
        case "*":
          stack.push(num2 * num1);
          break;
        case "/":
          stack.push(Math.trunc(num2 / num1));
          break;
      }
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
