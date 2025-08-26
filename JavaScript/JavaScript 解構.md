在 JavaScript 裡，function 只能 return 一個東西，但這個「東西」可以是 陣列 或 物件，裡面就可以包多個值。

✅ 方法 1：回傳陣列

```js
function getValues() {
  let a = 10;
  let b = 20;
  return [a, b];
}

const [x, y] = getValues(); // 解構賦值
console.log(x, y); // 10 20
```

✅ 方法 2：回傳物件（比較常見，因為有名稱）

```js
function getValues() {
  let a = 10;
  let b = 20;
  return { a, b };
}

const { a, b } = getValues();
console.log(a, b); // 10 20
```

✅ 方法 3：回傳複合結構（更靈活）

```js
function getValues() {
  return {
    sum: 30,
    data: [1, 2, 3],
  };
}

const result = getValues();
console.log(result.sum); // 30
console.log(result.data); // [1, 2, 3]
```

👉 建議：如果你要回傳多個值，用物件最清楚，因為 key 有名字，讀起來更直觀。
