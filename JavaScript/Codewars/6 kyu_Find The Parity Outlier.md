## Find The Parity Outlier

Description:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36] --> 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

- 解法二

```js
function findOutlier(integers) {
  const even = integers.filter((a) => a % 2 == 0);
  const odd = integers.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // -> 11 (the only odd number)
// findOutlier([160, 3, 1719, 19, 11, 13, -21]) // -> 160 (the only even number)
```

- 解法一

```js
function findOutlier(integers) {
  //your code here
  let even = [];
  let odd = [];
  for (let num of integers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  if (even.length === 1) {
    return even[0];
  }
  return odd[0];
}

findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]); // -> 11 (the only odd number)
// findOutlier([160, 3, 1719, 19, 11, 13, -21]) // -> 160 (the only even number)
```
