## Find the odd int

Description:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

- 解法四

```js
function findOdd(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}

findOdd([7]); // should return 7, because it occurs 1 time (which is odd).
findOdd([0]); // should return 0, because it occurs 1 time (which is odd).
findOdd([1, 1, 2]); // should return 2, because it occurs 1 time (which is odd).
findOdd([0, 1, 0, 1, 0]); // should return 0, because it occurs 3 times (which is odd).
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // should return 4, because it appears 1 time (which is odd).
```

- 解法三

```js
function findOdd(arr) {
  return arr.reduce((a, b) => a ^ b);
}

findOdd([7]); // should return 7, because it occurs 1 time (which is odd).
findOdd([0]); // should return 0, because it occurs 1 time (which is odd).
findOdd([1, 1, 2]); // should return 2, because it occurs 1 time (which is odd).
findOdd([0, 1, 0, 1, 0]); // should return 0, because it occurs 3 times (which is odd).
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // should return 4, because it appears 1 time (which is odd).
```

- 解法二

```js
function findOdd(arr) {
  const numMap = {};

  for (let num of arr) {
    numMap[num] = (numMap[num] || 0) + 1;
  }

  for (let key in numMap) {
    if (numMap[key] % 2 === 1) {
      return Number(key); // 回傳數字不是字串
    }
  }

  return 0; // 沒找到奇數次的數字
}

findOdd([7]); // should return 7, because it occurs 1 time (which is odd).
findOdd([0]); // should return 0, because it occurs 1 time (which is odd).
findOdd([1, 1, 2]); // should return 2, because it occurs 1 time (which is odd).
findOdd([0, 1, 0, 1, 0]); // should return 0, because it occurs 3 times (which is odd).
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // should return 4, because it appears 1 time (which is odd).
```

- 解法一

```js
function findOdd(arr) {
  const numMap = {};
  let min = 0;
  let keyNum = '';

  for (let num of arr) {
    if (numMap[num]) {
      numMap[num] = numMap[num] + 1;
    } else {
      numMap[num] = 1;
    }
  }

  for (let key in numMap) {
    if (numMap[key] % 2 === 1) {
      return Number(key);
    }
  }

  return 0;
}

findOdd([7]); // should return 7, because it occurs 1 time (which is odd).
findOdd([0]); // should return 0, because it occurs 1 time (which is odd).
findOdd([1, 1, 2]); // should return 2, because it occurs 1 time (which is odd).
findOdd([0, 1, 0, 1, 0]); // should return 0, because it occurs 3 times (which is odd).
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // should return 4, because it appears 1 time (which is odd).
```
