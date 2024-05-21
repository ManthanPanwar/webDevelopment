let s = "({}{[]}[]";

let balancedParenthesis = function (s) {
  const stack = [];
  const legend = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else if (legend[stack.pop()] !== s[i]) {
      return false;
    }
  }
  return stack.length ? 0 : 1;
};

console.log(balancedParenthesis(s));
