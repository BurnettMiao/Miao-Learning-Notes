## Stop gninnipS My sdroW!

Description:
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors" --> "Hey wollef sroirraw"
"This is a test --> "This is a test"
"This is another test" --> "This is rehtona test"

- 解法二

```js
function spinWords(str) {
  return str
    .split(' ')
    .map((word) =>
      word.length >= 5 ? word.split('').reverse().join('') : word
    )
    .join(' ');
}

spinWords('Hey fellow warriors'); // -> "Hey wollef sroirraw"
// spinWords('This is a test') // -> "This is a test"
// spinWords('This is another test') // -> "This is rehtona test"
```

- 解法一(自己想的)

```js
function spinWords(string) {
  const strArr = string.split(' ');
  const result = [];

  for (let letter of strArr) {
    if (letter.length >= 5) {
      let reversed = '';
      reversed = letter.split('').reverse().join('');
      result.push(reversed);
    } else {
      result.push(letter);
    }
  }

  return result.join(' ');
}

spinWords('Hey fellow warriors'); // -> "Hey wollef sroirraw"
// spinWords('This is a test') // -> "This is a test"
// spinWords('This is another test') // -> "This is rehtona test"
```
