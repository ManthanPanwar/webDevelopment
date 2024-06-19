class Solution {
  //Function to return the count of number of elements in union of two arrays.
  doUnion(a, n, b, m) {
    // code here
    let sett = new Set();

    for (let i = 0; i < n; i++) {
      sett.add(a[i]);
    }
    for (let i = 0; i < m; i++) {
      sett.add(b[i]);
    }
    return sett.size;
  }
}
