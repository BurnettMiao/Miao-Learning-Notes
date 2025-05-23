## Counting Duplicates

Description:
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

- 解法二

```js
function duplicateCount(text) {
  const map = new Map();
  for (let c of text.toLowerCase()) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  return [...map.values()].filter((v) => v > 1).length;
}

// duplicateCount("") // -> 0
duplicateCount('abcde'); // -> 0
duplicateCount('aabbcde'); // -> 2
// duplicateCount("aabBcde") // -> 2
// duplicateCount("Indivisibility") // -> 1
// duplicateCount("Indivisibilities") // -> 2
```

- 解法一

```js
function duplicateCount(text) {
  const charMap = {};
  const cleanText = text.toLowerCase();
  for (let letter of cleanText) {
    charMap[letter] = (charMap[letter] || 0) + 1;
  }

  let maxChar = 0;
  for (let key in charMap) {
    if (charMap[key] > 1) {
      maxChar += 1;
    }
  }

  return maxChar;
}

duplicateCount(''); // -> 0
duplicateCount('abcde'); // -> 0
duplicateCount('aabbcde'); // -> 2
// duplicateCount("aabBcde") // -> 2
// duplicateCount("Indivisibility") // -> 1
// duplicateCount("Indivisibilities") // -> 2
```
