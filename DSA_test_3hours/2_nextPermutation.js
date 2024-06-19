function nextPermutation(arr) {
  const n = arr.length;
  if (n <= 1) return arr;

  // Step 1: Find the largest index i such that arr[i] < arr[i + 1]
  let i = n - 2;
  while (i >= 0 && arr[i] >= arr[i + 1]) {
      i--;
  }

  // If no such index exists, the permutation is the last permutation
  if (i === -1) {
      arr.reverse();
      return arr;
  }

  // Step 2: Find the largest index j greater than i such that arr[i] < arr[j]
  let j = n - 1;
  while (arr[j] <= arr[i]) {
      j--;
  }

  // Step 3: Swap arr[i] and arr[j]
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // Step 4: Reverse the sub-array from i + 1 to end
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
  }

  return arr;
}

let arr = [1,2,3,6,5,4];
for(let i=0;i<arr.length;i++)
  console.log(arr[i]+" ");
arr = nextPermutation(arr);

for(let i=0;i<arr.length;i++)
  console.log(arr[i]+" ");
