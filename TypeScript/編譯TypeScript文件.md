#### 如何編譯 TypeScript 文件

**將 TypeScript 編譯為 JavaScript(方法一)**
要執行 TypeScript 代碼，必須先用 TypeScript 編譯器將其轉換為 JavaScript。可以按照以下步驟進行：

1. 安裝 TypeScript： 如果你還沒有安裝 TypeScript，請使用 npm 安裝：

   ```bash
   npm install -g typescript
   ```

2. 編譯 TypeScript 文件： 使用 tsc 命令來將 .ts 文件編譯為 .js 文件。
   例如，如果你有一個 completeOrder.ts 文件，執行以下命令來編譯：

   ```bash
   tsc completeOrder.ts
   ```

   或者直接執行也可以編譯:

   ```bash
   tsc
   ```

3. 執行編譯後的 JavaScript 文件： 編譯後會生成一個同名的 .js 文件，然後你可以在 Node.js 中執行它：

   ```bash
   node completeOrder.js
   ```

<br />

**將 TypeScript 編譯為 JavaScript(方法二)**
如果你想省去編譯步驟，直接在開發過程中運行 TypeScript，可以使用 ts-node 這個工具。它允許你直接運行 TypeScript 代碼，而無需手動編譯。

1. 安裝 ts-node：

   ```bash
   npm install -g ts-node
   ```

2. 直接運行 .ts 文件：

   ```bash
   ts-node completeOrder.ts
   ```

<br />

**初始化 typescript**
此步驟會產生出一個 tsconfig.json

```bash
tsc --init
```
