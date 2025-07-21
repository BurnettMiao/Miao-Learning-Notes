## 6 kyu Find the missing letter

Description:
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

- 解法三

```js
function findMissingLetter(array) {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1].charCodeAt(0);
    const curr = array[i].charCodeAt(0);

    if (curr - prev !== 1) {
      return String.fromCharCode(prev + 1);
    }
  }
}

findMissingLetter(['a', 'b', 'c', 'd', 'f']); // -> 'e'
findMissingLetter(['O', 'Q', 'R', 'S']); // -> 'P'
```

- 解法二

```js
function findMissingLetter(array) {
  for (let i = 1; i < array.length; i++) {
    const diff = array[i].charCodeAt(0) - array[i - 1].charCodeAt(0);
    if (diff !== 1) {
      return String.fromCharCode(array[i - 1].charCodeAt(0) + 1);
    }
  }
}

findMissingLetter(['a', 'b', 'c', 'd', 'f']); // -> 'e'
findMissingLetter(['O', 'Q', 'R', 'S']); // -> 'P'
```

- 解法一

```js
function findMissingLetter(array) {
  const converStr = array.join('');
  for (let i = 1; i < converStr.length; i++) {
    const number = converStr.charCodeAt(i) - converStr.charCodeAt(i - 1);
    if (number !== 1) {
      return String.fromCharCode(converStr.charCodeAt(i) - 1);
    }
  }
}

findMissingLetter(['a', 'b', 'c', 'd', 'f']); // -> 'e'
findMissingLetter(['O', 'Q', 'R', 'S']); // -> 'P'
```
