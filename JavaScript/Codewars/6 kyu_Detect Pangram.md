## 6 kyu Detect Pangram

Description:
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

- 解法一

```js
function isPangram(string) {
  const lower = string.toLowerCase();
  const onlyLetters = lower.replace(/[^a-z]/g, '');
  const uniqueLetters = new Set(onlyLetters);
  return uniqueLetters.size === 26;
}

isPangram('The quick brown fox jumps over the lazy dog.'); // -> true
isPangram('This is not a pangram.'); // -> true
```
