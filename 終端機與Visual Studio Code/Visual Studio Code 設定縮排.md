在 VS Code 中，要全域設定 Python 使用 4 個空格，其他語言使用 2 個空格，你可以直接修改 VS Code 的設定檔案 settings.json。以下是方法：

1. 開啟 settings.json
   你可以按 Ctrl + , （或 Cmd + , 在 macOS 上）來打開設定頁面。
   在設定頁面右上角點擊「打開設定（JSON）」按鈕，這樣你就可以編輯全域的 settings.json 檔案了。

2. 修改 settings.json
   在 settings.json 中加入以下設定：

```json
{
  // 這是全域的設定，適用於所有檔案
  "editor.tabSize": 2,

  // 這是針對 Python 檔案的特定設定
  "[python]": {
    "editor.tabSize": 4
  }
}
```

說明：

"editor.tabSize": 2 ->設定所有檔案預設使用 2 個空格。

"editor.tabSize": 4 ->在 [python] 區塊內：這是針對 Python 檔案的特定設定，Python 會使用 4 個空格。
