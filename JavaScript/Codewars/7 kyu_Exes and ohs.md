## Exes and Ohs

Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

- 解法二

```js
function isXO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let char of str.toLowerCase()) {
    if (char === 'x') xCount++;
    if (char === 'o') oCount++;
  }

  return xCount === oCount;
}

isXO('ooxx'); // -> true
// isXO("xooxx") // -> false
// isXO("ooxXm") // -> true
// isXO("zpzpzpp") // -> true // when no 'x' and 'o' is present should return true
// isXO("zzoo") // -> false
```

- 解法一

```js
function isXO(str) {
  const charMap = {};
  const cleanStr = str.toLowerCase().split('');

  for (let char of cleanStr) {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
    } else {
      charMap[char] = 1;
    }
  }

  const xCount = charMap['x'] || 0;
  const oCount = charMap['o'] || 0;

  return xCount === oCount;
}

isXO('ooxx'); // -> true
// isXO("xooxx") // -> false
// isXO("ooxXm") // -> true
// isXO("zpzpzpp") // -> true // when no 'x' and 'o' is present should return true
```
