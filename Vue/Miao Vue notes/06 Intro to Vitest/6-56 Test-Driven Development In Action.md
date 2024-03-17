## 6-56 Test-Driven Development In Action

1. 根目錄下建立 **test** folder -> **unit** folder，創建 playground.test.js

2. 於 **src** folder 下建立 playground.js 輸入以下程式碼

```javascript
// 5-54 之前的測試碼
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

  // 5-54 之前的測試碼
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

  // 6-56 增加 multiply
  describe('multiple', () => {
    it('multiplies two numbers together', () => {
      expect(multiply(2, 3)).toBe(6);
    });
  });
});
```

3. 於 vscode 另開一個 Terminal 輸入 npm run test:unit 即可單元測試

4. 此時會出現 error **TypeError: multiply is not a function**

5. 再於 playground.js 輸入以下程式碼

```javascript
// 5-54 之前的測試碼
export const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
};

// 6-56 增加 multiply
export const multiply = (num1, num2) => {
  return num1 * num2;
};
```

6. Terminal 輸入 npm run test:unit 即可單元測試(成功 pass)
