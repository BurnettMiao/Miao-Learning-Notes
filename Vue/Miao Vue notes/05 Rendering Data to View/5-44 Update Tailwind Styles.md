## 2-44 Update Tailwind Styles

客製化想要的顏色

1. 在 tailwind.config.js 的 **extend** 中新增 **colos** object 並且打入所想要新增的色碼

2. 則 tailwind 會自動生成客製化的 brand-gray-1 字尾的 class，如 text-brand-gray-1，即可到處使用
   > text-black -> text-brand-gray-1
   > bg-white -> bg-brand-gray-1

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
      colors: {
        'brand-gray-1': '#dadce0',
        'brand-blue-1': '#1967d2',
        'brand-green-1': '#137333',
      },
    },
  },
  plugins: [],
};
```
