function isPalindrome(S) {
  let size = S.length;
  for (let i = 0, j = size - 1; i < j; i++, j--) {
    if (S[i] !== S[j]) return 0;
  }
  return 1;
}
