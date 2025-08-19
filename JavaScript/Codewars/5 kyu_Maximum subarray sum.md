## 5 kyu Maximum subarray sum

Description:
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

- 解法二

```js
function maxSequence(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let num of arr) {
    currentSum = Math.max(0, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// --> should be 6: [4, -1, 2, 1]
```

- 解法一

```js
function maxSequence(arr) {
  let max = 0;
  let maxArr = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let curArr = [];

    for (let j = i; j < arr.length; j++) {
      curArr = arr.slice(i, j + 1);
      sum = curArr.reduce((sum, crr) => sum + crr, 0);
      if (sum > max) {
        max = sum;
        maxArr = curArr;
      }
    }
  }

  return max;
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// --> should be 6: [4, -1, 2, 1]
```

**重點紀錄**
使用 Kadane's Algorithm
Math.max()
