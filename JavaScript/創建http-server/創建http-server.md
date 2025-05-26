## 創建 http-server

1. 打開終端機 輸入 npm install http-server -g
   (系統環境安裝 http-server 只需輸入一次就好，之後直接看 2. 步驟)

2. 在所要開啟的專案資料夾，上方的路徑 輸入 cmd 即可以開啟終端機，開啟後輸入 http-server 即可以用 server 的方式開啟 index.html

3. 指定其他端口 (選擇性)：如果你想要在不同的端口上運行伺服器，可以使用 -p 參數來指定端口
   ```bash
   http-server -p 3000
   ```

---

如果你想為 http-server 指定特定的埠號（port），可以直接在 package.json 文件中設置一個腳本，而不需要用其他 JSON 文件來指定。

1. 建立或打開 package.json：在專案根目錄中找到 package.json 文件。如果沒有這個文件，可以用以下指令生成：
   ```bash
   npm init -y
   ```
2. 新增 npm 腳本：在 package.json 的 "scripts" 區塊中，加入一行腳本指定埠號。例如：

   ```bash
   {
      "name": "my-project",
      "version": "1.0.0",
      "scripts": {
         "start": "http-server -p 3000"
      },
      "dependencies": {
         "http-server": "^14.0.0"
      }
   }
   ```

   這裡的 -p 3000 指定伺服器在 3000 埠上運行。

3. 啟動伺服器：執行以下指令啟動伺服器。
   ```bash
   npm run start
   ```
   這樣一來，每次執行 npm run start 時，http-server 會自動在指定的埠上運行。如果需要更換埠號，只需修改 package.json 中的 -p 參數即可。
