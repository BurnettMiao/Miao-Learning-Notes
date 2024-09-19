## Get the Middle Character

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

**Examples:**

```javascript
Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
```

**我的解法**

```javascript
const str = 'Abdbllo';

function getMiddle(str) {
  const length = str.length;
  const middleNum = Math.round(length / 2);
  if (length === 1) {
    console.log(str);
  } else if (length % 2 === 0) {
    console.log('This is even');
    console.log(str.substring(middleNum - 1, middleNum + 1));
  } else {
    console.log('This is odd');
    console.log(str.substring(middleNum - 1, middleNum));
  }
}

getMiddle(str);
```

**其他解法**

```javascript
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
```

```javascript
function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
```
