## 7-64~65 Setup Vue Testing Library

1. 在 Terminal 輸入 npm install --save-dev @testing-library/vue @testing-library/jest-dom @testing-library/user-event

2. 根目錄創建 **tests** folder -> setup.js 裡輸入以下程式碼

```javascript
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/vue';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});
```

3. 根目錄裡的 vite.config.js 輸入以下程式碼

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
  test: {
    globals: true,
    // 7-64 新增
    setupFiles: ['./tests/setup.js'],
  },
});
```

4. 根目錄創建 **tests** folder -> **unit** folder -> **components** folder -> MainNav.test.js (測試 MainNav 這個 component)，輸入以下程式碼

```javascript
import { render, screen } from '@testing-library/vue';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('displays compony name', () => {
    render(MainNav);
    screen.debug();
  });
});
```
