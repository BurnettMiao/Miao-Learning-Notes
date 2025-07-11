## 6 kyu Playing with digits

Description:
Some numbers have funny properties. For example:

Description:
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 _ 1
695 --> 6² + 9³ + 5⁴= 1390 = 695 _ 2
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 \* 51

Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k \* n.

If it is the case we will return k, if not return -1.

Note: n and p will always be strictly positive integers.

Examples:
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 \* 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 \* k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 \* 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 \* 51

- 解法二

```js
function digPow(n, p) {
  const sum = n
    .toString()
    .split('')
    .reduce((acc, digit, idx) => acc + Math.pow(Number(digit), p + idx), 0);

  return sum % n === 0 ? sum / n : -1;
}

digPow(89, 1); // -> 1
digPow(92, 1); // -> -1
digPow(46288, 3); // -> 51
```

- 解法一

```js
function digPow(n, p) {
  const arr = n.toString().split('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(Number(arr[i]), p + i);
  }
  if (Number.isInteger(sum / n)) {
    return sum / n;
  } else {
    return -1;
  }
}

digPow(89, 1); // -> 1
digPow(92, 1); // -> -1
digPow(46288, 3); // -> 51
```
