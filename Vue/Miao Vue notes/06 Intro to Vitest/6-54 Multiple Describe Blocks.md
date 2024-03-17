## 6-54 Multiple Describe Blocks

unit test 進階測試練習

1. 根目錄下建立 **test** folder -> **unit** folder，創建 playground.test.js

2. 於 **src** folder 下建立 playground.js 輸入以下程式碼

```javascript
export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};
```

3. 根目錄下建立 **test** folder -> **unit** folder，創建 playground.test.js 輸入以下程式碼

```javascript
import { describe, it, expect } from 'vitest';

import { evenOrOdd } from '@/playground';

describe('basic math', () => {
  it('adds two numbers', () => {
    expect(1 + 1).toBe(2);
  });

  describe('evenOrOdd', () => {
    describe('when number is even', () => {
      it('indicates the number is even'),
        () => {
          expect(evenOrOdd(4).toBe('Even'));
        };
    });

    describe('when number is odd', () => {
      it('indicates the number is odd'),
        () => {
          expect(evenOrOdd(3).toBe('Odd'));
        };
    });
  });
});
```

3. 於 vscode 另開一個 Terminal 輸入 npm run test:unit 即可單元測試
