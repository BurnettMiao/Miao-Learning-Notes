## 6 kyu Sort the odd

Description:
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1] => [1, 7]
[5, 8, 6, 3, 4] => [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

- 解法二

```js
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((elem) => (elem % 2 === 0 ? elem : odd.shift()));
}

sortArray([5, 3, 2, 8, 1, 4]); // -> [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]); // -> [1, 3, 5, 8, 0]
```

- 解法一

```js
function sortArray(array) {
  const odd = [];
  const indexs = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
      indexs.push(i);
    }
  }
  const sortOdd = odd.sort((x, y) => x - y);
  const result = [];
  let indexCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(sortOdd[indexCount]);
      indexCount += 1;
    } else {
      result.push(array[i]);
    }
  }

  return result;
}

sortArray([5, 3, 2, 8, 1, 4]); // -> [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]); // -> [1, 3, 5, 8, 0]
```
