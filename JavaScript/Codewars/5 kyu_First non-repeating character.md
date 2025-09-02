## 5 kyu First non-repeating character

Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

- 解法二

```js
function firstNonRepeatingLetter(str) {
  const countMap = new Map();

  for (let ch of str) {
    const lower = ch.toLowerCase();
    countMap.set(lower, (countMap.get(lower) || 0) + 1);
  }

  for (let ch of str) {
    if (countMap.get(ch.toLowerCase()) === 1) return ch;
  }
}

firstNonRepeatingLetter('a'); // -> 'a'
firstNonRepeatingLetter('stress'); // -> 't'
firstNonRepeatingLetter('moonmen'); // -> 'e'
```

- 解法一

```js
function firstNonRepeatingLetter(str) {
  const lowerStr = str.toLowerCase();
  const letterMap = {};
  for (let ch of lowerStr) {
    letterMap[ch] = (letterMap[ch] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (letterMap[lowerStr[i]] === 1) return str[i];
  }

  return '';
}

firstNonRepeatingLetter('a'); // -> 'a'
firstNonRepeatingLetter('stress'); // -> 't'
firstNonRepeatingLetter('moonmen'); // -> 'e'
```
