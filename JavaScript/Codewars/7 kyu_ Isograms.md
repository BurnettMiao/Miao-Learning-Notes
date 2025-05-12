## Isograms

Description:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)

- 解法二

```js
function isIsograms(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

isIsograms('Dermatoglyphics'); // -> true
// isIsograms('aba') // -> false
// isIsograms('moOse') // -> false
```

- 解法一 (自己想的)

```js
function isIsograms(str) {
  const charMap = {};
  const cleanStr = str.toLowerCase().split('');

  for (let char of cleanStr) {
    if (charMap[char]) {
      return false;
    } else {
      charMap[char] = 1;
    }
  }
  return true;
}

isIsograms('Dermatoglyphics'); // -> true
// isIsograms('aba') // -> false
// isIsograms('moOse') // -> false
```
