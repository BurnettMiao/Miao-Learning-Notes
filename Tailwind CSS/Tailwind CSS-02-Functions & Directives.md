## Functions & Directives

- [Tailwind CSS Functions & Directives](https://tailwindcss.com/docs/functions-and-directives) Tailwind CSS 官方文件

- 在 input.css 調整，關鍵字 **base** **@layer**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
}
```

- 以現有的 tailwind class 在 input.css 調整，關鍵字 **base** **@layer** **@apply**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-3xl;
  }
  h2 {
    @apply text-xl;
  }
}
```

- components 用於製作重複的元件在 input.css 調整，關鍵字 **components** **@layer** **@apply**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-blue {
    @apply bg-blue-500 py-2 px-4 rounded-xl font-bold text-white hover:bg-blue-700;
  }
}
```

```html
<button class="btn-blue">Click</button>
```

- components 用於製作重複的元件在 tailwind.config.js 與 input.css 調整

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [],
};
```

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.content-area {
  @apply bg-green-200;
  height: theme('spacing.128');
}
```

```html
<div class="content-area">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
</div>
```

- @media 在 input.css 調整

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@media screen(xl) {
  body {
    @apply bg-black text-white;
  }
}
```
