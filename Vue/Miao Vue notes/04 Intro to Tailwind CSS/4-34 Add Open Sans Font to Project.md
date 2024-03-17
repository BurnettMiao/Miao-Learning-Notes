## Add Open Sans Font to Project

以下為新增所需要的字體且不破壞原有 Tailwindcss 所自帶字體的方式

1. 首先先至 [google fonts](https://fonts.google.com/) 選擇所要的字體並使用 link 的方式添加至 index.html

2. 到 [tailwindcss](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js#L301) github 連結找到 fontFamily -> sans 此陣列為 tailwind 自帶的字體

3. 到 tailwind.config.js 更改以下配置

- 設定 const defaultTheme = require('tailwindcss/defaultTheme')
- 到 extend 新增 fontFamily -> fontFamily -> sans 陣列裡 新增 'Open Sans' 且把原本的 defaultTheme 使用 ...(Spread) 至 sans 陣列中，則系統會優先搜尋我們所設定的 'Open Sans' 如果沒有則會換到 原本 tailwindcss 所設定的字體

```javascript
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
```
