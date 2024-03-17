## 6-58 Setup Vitest Globals

1. 根目錄打開 vite.config.js 新增以下程式碼

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
  // 6-58 新增的程式碼
  test: {
    globals: true,
  },
});
```

2. 回到 playground.test.js 刪除以下程式碼，則會出現錯誤

```javascript
import { describe, it, expect } from 'vitest';
```

3. 於 Terminal 裡 ctrl + c 關閉，並打入 npm install --save-dev eslint-plugin-vitest-globals

4. 於 Terminal 裡打入 npm audit fix

5. 根目錄 .eslintrc.cjs 新增以下程式碼

```javascript
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    // 'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    // 6-58 新增
    'plugin:vitest-globals/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // 6-58 新增
  env: {
    'vitest-globals/env': true,
  },
};
```

6. 重新打入 npm run test:unit 即可
