let s = "manthan";

const reverseString = (s) => {
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    rev = s[i] + rev;
  }
  return rev;
};
console.log(`${s} after reversing is: ${reverseString(s)}`);
