## 2-53 The Basics of Vitest Syntax

基本 unit test 測試練習

1. 根目錄下建立 **test** folder -> **unit** folder，創建 playground.test.js

2. 輸入以下程式碼

```javascript
import { describe, it, expect } from 'vitest';

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2);
  });
});
```

3. 於 vscode 另開一個 Terminal 輸入 npm run test:unit 即可單元測試
