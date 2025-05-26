## Duplicate Encoder

Description:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din" => "((("
"recede" => "()()()"
"Success" => ")())())"
"(( @" => "))(("
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

- 解法二

```js
function duplicateEncode(word) {
  const lowerWord = word.toLowerCase();
  const charMap = {};

  for (let char of lowerWord) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  let newStr = '';
  for (let char of lowerWord) {
    newStr += charMap[char] > 1 ? ')' : '(';
  }

  return newStr;
}

duplicateEncode('din'); // -> "((("
duplicateEncode('recede'); // -> "()()()"
// duplicateEncode("Success") // -> ")())())"
// duplicateEncode("(( @") // -> "))(("
```

- 解法一(自己想的)

```js
function duplicateEncode(word) {
  let newStr = '';
  const charMap = {};
  for (let char of word.toLowerCase()) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  console.log(charMap);

  const arrWord = word.toLowerCase().split('');
  const newNum = arrWord.map((char, index) => {
    for (let key in charMap) {
      if (key === char) {
        return charMap[key];
      }
    }
  });

  for (let num of newNum) {
    if (num > 1) {
      newStr += ')';
    } else {
      newStr += '(';
    }
  }

  return newStr;
}

duplicateEncode('din'); // -> "((("
duplicateEncode('recede'); // -> "()()()"
duplicateEncode('Success'); // -> ")())())"
duplicateEncode('(( @'); // -> "))(("
```
