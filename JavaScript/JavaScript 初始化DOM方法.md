#### JavaScript 初始化 DOM 方法

使用 window.addEventListener（更靈活、推薦）

```js
window.addEventListener('load', () => {
  console.log('All resources have been loaded.');
});
```

在 DOM 加載完成後觸發的選項（僅限 DOM，而不是所有資源）

```js
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is fully loaded and parsed.');
});
```

- 如果要等所有資源加載完畢：使用 window.onload 或 window.addEventListener('load', ...)。
- 如果只需等 DOM 構建完畢即可操作：使用 DOMContentLoaded（特別適合 SPA 或現代前端框架）。
