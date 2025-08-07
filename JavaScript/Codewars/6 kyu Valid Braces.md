## 6 kyu Valid Braces

Description:
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

- 解法二

```js
function validBraces(braces) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (let ch of braces) {
    if (map[ch]) {
      stack.push(map[ch]);
    } else {
      if (stack.pop() !== ch) return false;
    }
  }

  return stack.length === 0;
}

validBraces('(){}[]'); // -> True
validBraces('([{}])'); // -> True
validBraces('(}'); // -> False
validBraces('[(])'); // -> False
validBraces('[({})](]'); // -> False
```

- 解法一

```js
function validBraces(braces) {
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let char of braces) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

validBraces('(){}[]'); // -> True
validBraces('([{}])'); // -> True
validBraces('(}'); // -> False
validBraces('[(])'); // -> False
validBraces('[({})](]'); // -> False
```
