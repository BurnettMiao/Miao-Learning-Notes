## 6 kyu Find the unique number

Description:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

- 解法四

```js
function findUniq(arr) {
  const set = new Set(arr);
  set.delete(arr[0]); // 移除第一個數字
  return set.size === 1 ? [...set][0] : arr[0];
}
```

- 解法三

```js
function findUniq(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}
```

- 解法二

```js
function findUniq(arr) {
  const [a, b, c] = arr;
  // 如果 a 和 b 相同，那唯一不同的數字就是不是 a 的那個
  const common = a === b ? a : a === c ? a : b;
  // 找出那個不等於 common 的值
  return arr.find((num) => num !== common);
}

findUniq([1, 0, 0]); // -> 1
findUniq([0, 1, 0]); // -> 1
findUniq([0, 0, 1]); // -> 1
findUniq([1, 1, 1, 2, 1, 1]); // -> 2
findUniq([1, 1, 2, 1, 1]); // -> 2
```

- 解法一

```js
function findUniq(arr) {
  const map = {};
  let key = '';
  let count = 0;
  for (let num of arr) {
    if (map[num]) {
      map[num] = map[num] + 1;
    } else {
      map[num] = 1;
    }
  }

  const [minkey, minValue] = Object.entries(map).reduce(
    (minEntry, currentEntry) => {
      return Number(currentEntry[1]) < Number(minEntry[1])
        ? currentEntry
        : minEntry;
    }
  );

  return Number(minkey);
}

findUniq([1, 0, 0]); // -> 1
findUniq([0, 1, 0]); // -> 1
findUniq([0, 0, 1]); // -> 1
findUniq([1, 1, 1, 2, 1, 1]); // -> 2
findUniq([1, 1, 2, 1, 1]); // -> 2
```
