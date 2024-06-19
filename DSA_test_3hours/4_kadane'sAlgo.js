class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    let finalSum = -1111111;
    let sum = 0;

    for (let i = 0; i < N; i++) {
      sum = sum + arr[i];

      if (sum > finalSum) finalSum = sum;

      if (sum < 0) sum = 0;
    }
    return finalSum;
  }
}
