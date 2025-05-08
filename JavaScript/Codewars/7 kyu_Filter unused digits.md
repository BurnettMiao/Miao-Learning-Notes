## Filter unused digits

Description:
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:
[12, 34, 56, 78] => "09"
[2015, 8, 26] => "3479"
Note: the digits in the resulting string should be sorted.

解法二

```js
function unusedDigits(...digits) {
  const usedSet = new Set(digits.join('').split(''));
  const allDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const unused = allDigits.filter((d) => {
    return !usedSet.has(d);
  });

  return unused.join('');
}

unusedDigits(12, 34, 56, 78);
// unusedDigits(2015, 8, 26)
```

解法一

```js
function unusedDigits(...digits) {
  const usedDigits = digits.join('').split('');
  const allDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const unusedDigits = allDigits.filter((d) => !usedDigits.includes(String(d)));

  return unusedDigits.join('');
}

// unusedDigits(12, 34, 56, 78)
unusedDigits(2015, 8, 26);
```
