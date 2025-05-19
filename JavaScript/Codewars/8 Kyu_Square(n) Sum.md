## Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9

- 解法二

```js
function squareSum(numbers) {
  return numbers.reduce((sum, num) => {
    return sum + num * num;
  }, 0);
}

squareSum([1, 2, 2]); // -> 9
squareSum([0, 3, 4, 5]); // -> 50
squareSum([]); // -> 0
```

- 解法一(自己想的)

```js
function squareSum(numbers) {
  let squareNum = [];
  let squareSum = 0;

  squareNum = numbers.map((num) => {
    return num * num;
  });

  for (let num of squareNum) {
    squareSum = squareSum + num;
  }

  return squareSum;
}

squareSum([1, 2, 2]); // -> 9
squareSum([0, 3, 4, 5]); // -> 50
squareSum([]); // -> 0
```
