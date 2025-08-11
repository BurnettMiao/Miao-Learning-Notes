## Persistent Bugger.

Description:
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

- 解法三 (更簡潔的寫法)

```js
function persistence(num) {
  let times = 0;

  while (num >= 10) {
    num = String(num)
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc * cur);
    times++;
  }

  return times;
}
```

- 解法二

```js
function persistence(num) {
  let times = 0;
  while (num >= 10) {
    const numArr = String(num).split('');
    const mapNum = numArr.map((num) => Number(num));
    num = mapNum.reduce((acc, cur) => acc * cur);
    times++;
  }

  return times;
}

persistence(39); // -> 3
persistence(4); // -> 0
persistence(25); // -> 2
persistence(999); // -> 4
```

- 解法一

```js
function persistence(num) {
  let mutipleTimes = 0;
  let stringNum = String(num);
  if (stringNum.length === 1) return mutipleTimes;

  while (stringNum.length > 1) {
    const numArr = stringNum.split('');
    let mutiple = 1;
    for (let i = 0; i < numArr.length; i++) {
      mutiple *= Number(numArr[i]);
    }
    mutipleTimes++;
    stringNum = String(mutiple);
  }

  return mutipleTimes;
}

persistence(39); // -> 3
persistence(4); // -> 0
persistence(25); // -> 2
persistence(999); // -> 4
```
