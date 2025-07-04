## 6 kyu Unique In Order

Description:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3]) == [1,2,3]

- 解法二

```js
function uniqueInOrder(iterable) {
  const result = [];
  for (let char of Array.from(iterable)) {
    if (result[result.length - 1] !== char) {
      result.push(char);
    }
  }
  return result;
}

uniqueInOrder('AAAABBBCCDAABBB'); // -> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); // -> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); // -> [1,2,3]
```

- 解法一

```js
function uniqueInOrder(iterable) {
  const result = [];
  for (let char of iterable) {
    if (result[result.length - 1] !== char) {
      result.push(char);
    }
  }
  return result;
}

uniqueInOrder('AAAABBBCCDAABBB'); // -> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD'); // -> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3]); // -> [1,2,3]
```
