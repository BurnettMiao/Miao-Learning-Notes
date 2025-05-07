## Mumbling

Description:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

- 解法二

```js
function accum(str) {
  return str
    .split('')
    .map((char, index) => {
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join('-');
}

accum('abcd'); // -> 'A-Bb-Ccc-Dddd'
accum('jdick'); // -> 'J-Dd-Iii-Cccc-Kkkkk'
```

- 解法一(自己想的)

```js
function accum(str) {
  const arrStr = str.toLowerCase().split('');
  const result = [];
  for (let index of arrStr.keys()) {
    let strRepeat = '';
    for (let i = 0; i <= index; i++) {
      if (i === 0) {
        strRepeat = strRepeat + arrStr[index].toUpperCase();
      } else {
        strRepeat = strRepeat + arrStr[index];
      }
    }
    result.push(strRepeat);
  }

  return result.join('-');
}

accum('abcd'); // -> 'A-Bb-Ccc-Dddd'
```
