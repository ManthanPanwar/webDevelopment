const arr = [-1, -2, -3, -2, -4];

function maxElement(arr) {
  let maxi = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxi < arr[i]) maxi = arr[i];
  }
  return maxi;
}

console.log(`Max element is: ${maxElement(arr)}`);
