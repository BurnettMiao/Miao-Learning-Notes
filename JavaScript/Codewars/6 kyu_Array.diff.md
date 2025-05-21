## Array.diff

Description:
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

- 解法二

```js
function arrayDiff(a, b) {
  const bSet = new Set(b);

  return a.filter((num) => !bSet.has(num));
}

arrayDiff([1, 2], [1]); // -> [2]
arrayDiff([1, 2, 2, 2, 3], [2]); // -> [1, 3]
```

- 解法一

```js
function arrayDiff(a, b) {
  const result = a.filter((num) => {
    return !b.includes(num);
  });
  console.log(result);
}

arrayDiff([1, 2], [1]); // -> [2]
arrayDiff([1, 2, 2, 2, 3], [2]); // -> [1, 3]
```
