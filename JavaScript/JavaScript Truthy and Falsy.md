#### JavaScript Truthy and Falsy

在 JavaScript 中，falsy 值是那些在布林運算中被當作 false 的值。這些值在條件判斷或強制轉型為布林值時會被當作 false 處理。以下是所有的 falsy 值：

1. false：布林值 false 本身。
2. 0：數字 0。
3. -0：數字 -0（負零）。
4. 0n：BigInt 中的零。
5. "" 或 '' 或 ``：空字串。
6. null：表示空值，通常表示不存在的值或無效的引用。
7. undefined：表示未定義的值。
8. NaN：非數值（Not-a-Number）。

這些值在條件式中會被視為 false，例如：

```javascript
if (!0) {
  console.log('0 is falsy'); // 會執行這行
}

if (!'') {
  console.log('Empty string is falsy'); // 會執行這行
}

if (!NaN) {
  console.log('NaN is falsy'); // 會執行這行
}
```

除 falsy 值之外，其他值在 JavaScript 中都被視為 truthy，例如 1、"hello"、[]（空陣列）、{}（空物件）等。
