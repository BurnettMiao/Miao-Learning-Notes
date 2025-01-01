#### 匯出單一模組寫法

**寫法一(ES Modules)**

- html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ES Modules Example</title>
    </head>
    <body>
      <h1>Check the console for output!</h1>
      <!-- 使用 type="module" 加載主模組 -->
      <script src="main.js" type="module"></script>
    </body>
  </html>
  ```

- main.js

  ```js
  // 從 utils.js 匯入 sayHello 函數
  import { sayHello } from './utils.js';

  // 執行 sayHello 函數
  sayHello();
  ```

- utils.js
  ```js
  // 匯出 sayHello 函數
  export function sayHello() {
    console.log('Hello, ES Modules!');
  }
  ```

**寫法二(CommonJS 模組系統)**
使用的不是 ES Modules (ESM)，而是 CommonJS (CJS) 模組格式，這是 Node.js 的模組系統。

- helloWorld-module.js

  ```js
  function greed() {
    return 'Hello World';
  }

  module.exports = greed;
  ```

- run-helloWorld.js

  ```js
  const greed = require('./helloWorld-module');

  const result = greed();

  console.log(result);
  ```

---

#### 匯出多個模組寫法

**寫法一(ES Modules)**

- html

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ES Modules Example</title>
    </head>
    <body>
      <h1>Check the console for output!</h1>
      <!-- 使用 type="module" 加載主模組 -->
      <script src="main.js" type="module"></script>
    </body>
  </html>
  ```

1. 使用命名匯出 (Named Exports)

   - utils.js

     ```js
     // 定義兩個函數
     export function sayHello() {
       console.log('Hello!');
     }

     export function sayGoodbye() {
       console.log('Goodbye!');
     }
     ```

   - main.js

     ```js
     // 從 utils.js 匯入兩個函數
     import { sayHello, sayGoodbye } from './utils.js';

     sayHello(); // 輸出: Hello!
     sayGoodbye(); // 輸出: Goodbye!
     ```

2. 匯出時使用物件寫法

   - utils.js

     ```js
     // 定義函數
     function sayHello() {
       console.log('Hello!');
     }

     function sayGoodbye() {
       console.log('Goodbye!');
     }

     // 匯出為物件
     export { sayHello, sayGoodbye };
     ```

   - main.js

     ```js
     // 與直接命名匯出類似
     import { sayHello, sayGoodbye } from './utils.js';

     sayHello(); // 輸出: Hello!
     sayGoodbye(); // 輸出: Goodbye!
     ```

**寫法二(CommonJS 模組系統)**

- helloWorld-module.js

  ```js
  function greed() {
    return 'Hello World';
  }

  function farewell() {
    return 'Goodbye World';
  }

  // 匯出多個模組
  module.exports = { greed, farewell };
  ```

- run-helloWorld.js

  ```js
  const { greed, farewell } = require('./helloWorld-module');

  console.log(greed());
  console.log(farewell());
  ```
