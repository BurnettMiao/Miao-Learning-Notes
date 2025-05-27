## Bit Counting

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

註解：

```text
| 語法                 | 說明          | 範例 (`num = 10`) |
| ------------------ | ----------- | --------------- |
| `num.toString(2)`  | 轉成 **二進位**  | `"1010"`        |
| `num.toString(8)`  | 轉成 **八進位**  | `"12"`          |
| `num.toString(10)` | 轉成 **十進位**  | `"10"`          |
| `num.toString(16)` | 轉成 **十六進位** | `"a"`           |

```

- 解法一

```js
function countBits(num) {
  const convert = num.toString(2);

  let count = 0;
  for (let num of convert) {
    if (Number(num) === 1) count += 1;
  }

  return count;
}

countBits(0); // -> 0
countBits(4); // -> 1
// countBits(7) // -> 3
// countBits(9) // -> 2
// countBits(10) // -> 2
```
