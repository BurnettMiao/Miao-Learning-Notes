## 如何使用 CLI 安裝 Tailwind CSS

- **如在網路上 clone 別人已經使用 tailwind css 的配置的話，在本機只要在 terminal 輸入 npm install 本機就會根據 package.json 的配置安裝對應版本的軟體**

- [**Tailwind CSS CLI**](https://tailwindcss.com/docs/installation) Tailwind CSS 官方 CLI 安裝指示文件

1. **Init json file:** 在 VS code terminal 輸入 npm init -y 會產生 package.json
2. **Install Tailwind CSS:** 在 VS code terminal 輸入 npm install -D tailwindcss
3. 在 VS code terminal 輸入 npx tailwindcss init 會產生一個 tailwind.config.js
4. **Configure your template paths:** 下列程式碼表示根目錄下的所有.html 都會受到 tailwind css 的 watch，如想改路徑也可以自己選擇

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

5. **Add the Tailwind directives to your CSS:** 建立一個 input.css 並且把以下程式碼加入

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. **Start the Tailwind CLI build process:** 為了每次都能自行編譯 tailwind css 到正常的 css 須先到 package.json 設定以下程式碼 (路徑需自行設定)

```javascript
 "scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/style.css",
    "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
  },
```

7. 在 terminal 輸入 npm run build 會產生 css folder 並且有 style.css file
8. 在 terminal 輸入 npm run watch 則會持續編譯 index.html 裡的 Tailwind CSS 到 style.css file

- 要終止 watch 編譯則在 terminal 輸入 ctrl+c
