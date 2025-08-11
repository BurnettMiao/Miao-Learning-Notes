## Moving Zeros To The End

Description:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

- 解法二

```js
function moveZeros(arr) {
  const noneZero = arr.filter((char) => char !== 0);
  const isZero = arr.filter((char) => char === 0);
  const result = noneZero.concat(isZero);
  return result;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
```

- 解法一

```js
function moveZeros(arr) {
  const result = [];
  let countZero = 0;

  for (let char of arr) {
    if (char === 0) {
      countZero++;
    } else {
      result.push(char);
    }
  }

  for (let i = 0; i < countZero; i++) {
    result.push(0);
  }

  return result;
}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
```
