const arr = [1, 2, 3, 6, 3, 7];

const secondMax = (arr) => {
  let max = arr[0];
  let secMax = -1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    }
    if (arr[i] < max && secMax < arr[i]) secMax = arr[i];
  }
  return secMax;
};

console.log(`Second Max is: ${secondMax(arr)}`);
