## Add Tailwind CSS to Project

Setting up Tailwind CSS in a Vite project.

- [Instructions for setting up Tailwind with a Vite project](https://tailwindcss.com/docs/guides/vite)

1. 在 vscode Terminal 輸入 npm install --save-dev tailwindcss postcss autoprefixer

2. 接著輸入 npx tailwindcss init -p 會產生出

   - Created Tailwind CSS config file: tailwind.config.js
   - Created PostCSS config file: postcss.config.js

3. 然後在 tailwind.config.js 中修改以下配置

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. 然後在 src file 底下創建 index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. 在 main.js 裡 import index.css

```javascript
import { createApp } from 'vue';
import '@/index.css';
import App from '@/App.vue';

createApp(App).mount('#app');
```

使用@的原因是在 vite.config.js 中有以下設定

```javascript
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
```
