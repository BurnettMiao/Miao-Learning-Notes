#### typescript 安裝與使用

1. 在全域安裝 npm install -g typescript
2. 在專案裡面安裝 npm init -y
3. 在專案裡面安裝 npm install typescript --save-dev
4. 在專案裡面安裝 npx tsc --init 建立一個 typescript configuration file
5. 在專案裡面將 ts 檔案編譯成 js 檔案則是打入 tsc 則會出現同檔名的 js 檔案
6. 在專案裡面執行編譯出來的 js 檔案則是打入 node test.js (test.js 則為編譯出來的 js 檔案)

---

另一中方便的方法則是在專案下的 package.json 檔案中將原本的

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

變成

```json
"scripts": {
  "dev": "tsc && node test.js"
},
```

之後就變成 npm run dev 即可

---

需要更方便則可以打入以下指令，則會建立一個完整的 ts 資料夾

```bash
npm init vite@latest project -- --template vanilla-ts
```

| 部分                    | 意思與功能                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------- |
| `npm`                   | 使用 Node.js 的套件管理工具 npm                                                       |
| `init`                  | 初始化一個新專案（通常會下載 template 並建立目錄）                                    |
| `vite@latest`           | 指定要初始化的是 `vite` 這個套件，且使用最新版（`@latest`）                           |
| `project`               | 專案資料夾的名稱。建立後會產生一個 `project/` 資料夾                                  |
| `--`                    | 分隔符號，**告訴 npm：後面的參數不是 npm 自己的，而是傳給 `vite` 用的**               |
| `--template vanilla-ts` | 傳給 Vite 的參數，意思是：用 `vanilla-ts` 模板建立（純 JavaScript + TypeScript 模板） |
