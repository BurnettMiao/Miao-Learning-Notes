## 創建 josn-server 步驟

- 本地安裝（推薦，保持專案獨立性）：
  ```bash
    cd your-vue-project
    npm install json-server --save-dev
  ```
- 建立 fakedb 資料夾和 db.json

  將 fakedb 放在根目錄（與 src 同級）是一個常見做法，因為它與專案核心程式碼分離，易於管理。

  ```text
  your-vue-project/
  ├── fakedb/
  ├── src/
  │   ├── assets/
  │   │   ├── img/
  │   │   ├── css/
  │   ├── components/
  │   ├── App.vue
  ├── package.json
  ```

- 創建 db.json：
  在 fakedb 資料夾中建立 db.json，並定義你的假數據。例如，模擬天氣 App 的數據：

  ```json
  {
    "weather": [
      {
        "id": 1,
        "city": "Taipei",
        "temperature": 25,
        "condition": "Sunny",
        "icon": "/images/sunny.png"
      },
      {
        "id": 2,
        "city": "Kaohsiung",
        "temperature": 28,
        "condition": "Rainy",
        "icon": "/images/rainy.png"
      },
      {
        "id": 3,
        "city": "Taichung",
        "temperature": 22,
        "condition": "Cloudy",
        "icon": "/images/cloudy.png"
      }
    ]
  }
  ```

  說明：

  - 每個物件需要一個唯一的 id，因為 json-server 會根據 id 處理 CRUD 操作。
  - icon 欄位使用相對路徑 /images/sunny.png，表示圖片位於 fakedb/images。
  - 路徑以 /images/ 開頭，因為 json-server 會將 fakedb/images 映射到 /images 端點（稍後配置）。

- 啟動 json-server
  1. 添加啟動腳本：
     - 打開 package.json，在 scripts 區塊中添加啟動 json-server 的命令：
       ```json
       {
         "scripts": {
           "serve": "vue-cli-service serve",
           "build": "vue-cli-service build",
           "json:server": "json-server --watch fakedb/db.json --port 3000"
         }
       }
       ```
     - 說明
       - --watch 監控 db.json 的變化，修改後自動更新 API。
       - --port 3000 指定伺服器運行在 localhost:3000（可改為其他端口，避免與 Vue 的預設端口 8080 衝突）。
  2. 啟動伺服器：
     - 在終端運行：
       ```bash
       npm run json:server
       ```
     - 你應該看到類似以下輸出：
       ```text
       \{^_^}/ hi!
       Loading fakedb/db.json
       Done
       Resources
       http://localhost:3000/weather
       Home
       http://localhost:3000
       ```
  3. 測試 API
     - json-server 自動生成以下 REST 端點：
       - GET /weather：取得所有天氣數據。
       - GET /weather/:id：取得特定 ID 的天氣數據（例如 http://localhost:3000/weather/1）。
       - POST /weather：新增天氣數據。
       - PUT /weather/:id：更新特定 ID 的數據。
       - DELETE /weather/:id：刪除特定 ID 的數據。
     - 你可以用 Postman 或瀏覽器測試，例如：
       ```bash
       curl http://localhost:3000/weather
       ```
