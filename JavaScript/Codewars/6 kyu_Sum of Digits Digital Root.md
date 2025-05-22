## Sum of Digits / Digital Root

Description:
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2

- 解法二

```js
function digitalRoot(n) {
  while (n >= 10) {
    n = n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return n;
}

// digitalRoot(16) // -> 7
digitalRoot(942); // -> 6
// digitalRoot(132189) // -> 6
// digitalRoot(493193) // -> 2
```

- 解法一

```js
function digitalRoot(n) {
  let strNum = n.toString();

  while (strNum.length > 1) {
    let sum = 0;
    for (let num of strNum) {
      sum += Number(num);
    }
    strNum = sum.toString();
  }

  return Number(strNum);
}

// digitalRoot(16) // -> 7
// digitalRoot(942) // -> 6
digitalRoot(132189); // -> 6
// digitalRoot(493193) // -> 2
```
