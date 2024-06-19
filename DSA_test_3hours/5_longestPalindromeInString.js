const printString = (str, start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(str[i]);
  }
};

const longestPalindrome = (str) => {
  let l, h;
  let start = 0;
  let end = 1;

  for (let i = 1; i < str.length; i++) {
    // even part
    l = i - 1;
    h = i;
    while (l >= 0 && h < str.length && str[l] == str[h]) {
      if (h - l + 1 > end) {
        start = l;
        end = h - l + 1;
      }
      l--;
      h++;
    }

    // odd part
    l = i - 1;
    h = i + 1;
    while (l >= 0 && h < str.length && str[l] == str[h]) {
      if (h - l + 1 > end) {
        start = l;
        end = h - l + 1;
      }
      l--;
      h++;
    }
  }
  printString(str, start, start + end - 1);
};

let str = "dodsaasdok";
longestPalindrome(str);
