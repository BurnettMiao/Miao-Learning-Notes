#### JavaScript 表單提交

假設有一個表單：

```html
<form id="myForm">
  <input type="text" name="username" value="Alice" />
  <input type="password" name="password" value="1234" />
  <input type="submit" />
</form>
```

你可以用 FormData 來抓資料：

```js
const form = document.getElementById('myForm');
const formData = new FormData(form);

console.log(formData.get('username')); // "Alice"
console.log(formData.get('password')); // "1234"
```

可以用在 fetch 送資料

```js
fetch('/login', {
  method: 'POST',
  body: new FormData(form),
});
```

**範例整合**

```html
<form id="myForm">
  <input type="text" name="price" />
  <button type="submit">計算價格</button>
</form>

<script>
  const form = document.getElementById('myForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const price = fd.get('price'); // 直接抓 input 的值
    console.log(price);
  });
</script>
```

**其他特性**

- formData.append(name, value) → 手動加入欄位
- formData.delete(name) → 刪除欄位
- formData.has(name) → 判斷欄位是否存在
- formData.forEach((value, key) => { ... }) → 遍歷欄位

**重點**

- new FormData() 可以 自動抓 form 的資料，不用一個一個 input.value
- 生成的 FormData 物件可以直接給 fetch 或 XMLHttpRequest 當作 POST body
- 如果沒有傳入 form 元素，它會生成一個空的 FormData，你可以用 append 自己加資料
