這幾行 Git 命令的目的是將本地的 Git 儲存庫與遠端的 GitHub 儲存庫連結起來，並推送本地的 main 分支到遠端儲存庫。讓我們逐行來解析這段程式碼的意思：

1. git remote add origin https://github.com/BurnettMiao/Python-Projects-for-Beginners-with-Mosh.git<br>
   這行命令用來添加一個遠端儲存庫並命名為 origin。

   - git remote add: 用來添加一個遠端儲存庫。
   - origin: 這是遠端儲存庫的名稱，一般默認會用 origin 來代表第一個遠端儲存庫的名稱。
   - https://github.com/BurnettMiao/Python-Projects-for-Beginners-with-Mosh.git: 這是遠端儲存庫的 URL，表示這個儲存庫的位址在 GitHub 上。<br>
     總結：這行指令把一個遠端 GitHub 儲存庫（該 URL）添加到本地 Git 儲存庫中，並命名為 origin。

2. git branch -M main <br>
   這行命令用來將當前分支重命名為 main。

   - git branch: 管理分支的命令，這裡用來操作本地分支。
   - -M: 表示"強制重命名"分支。如果分支已經存在，這個參數會覆蓋它。
   - main: 是新分支名稱，這裡是將當前的分支（無論是 master 或其他名稱）重命名為 main。<br>
     總結：這行命令將當前的分支重命名為 main，因為 GitHub 從 2020 年開始，默認將主分支命名為 main，取代了傳統的 master。

3. git push -u origin main <br>
   這行命令用來將本地的 main 分支推送到遠端儲存庫的 main 分支，並且設置追蹤分支。

   - git push: 將本地分支推送到遠端儲存庫。
   - -u 或 --set-upstream: 設置當前本地分支與遠端分支的關聯，也就是說，未來使用 git push 時不需要再指定遠端和分支名稱，直接執行 git push 即可。
   - origin: 遠端儲存庫的名稱（在第一步中我們設置的 origin）。
   - main: 本地的 main 分支將會推送到遠端的 main 分支。<br>
     總結：這行命令將本地的 main 分支推送到遠端的 origin 儲存庫中的 main 分支，並將其設置為默認的追蹤分支，以後可以直接使用 git push 推送更新。

---

如果你想一次將所有更改加入 Git，包含已修改、已刪除和未跟蹤的檔案，可以使用以下的指令：

git add -A

這個指令會：將所有已修改 (modified)、已刪除 (deleted) 和未跟蹤 (untracked) 的檔案加入到暫存區（staging area）。

---

使用 git log 之後再使用 q 則可以跳出。<br>
使用 git log --oneline 簡短顯示每個提交，只有提交哈希值和提交訊息。<br>
使用 git log --graph --oneline 顯示提交歷史的圖形化表示，用來表示分支和合併。<br>
使用 git cherry-pick (commit-hash) 是 Git 中的一個命令，允許你從一個分支中挑選特定的提交並應用到當前的分支，而不需要合併整個分支。這在你只需要某些變更，而不是整個分支的所有提交時非常有用。

---

在 Git 中，如果你想解除對某個資料夾的追蹤，你可以按照以下步驟進行操作：

1. 更新 .gitignore

```bash
/folder_name/
```

2. 將資料夾從 Git 的索引中移除

```bash
git rm -r --cached <資料夾名稱>
```

3. 提交變更

```bash
git add .gitignore
git commit -m "Stop tracking folder_name"
```

這樣，該資料夾將不再被 Git 追蹤。注意，這個操作不會刪除本地的檔案或資料夾，只是解除其在 Git 中的追蹤。

---

1. 使用 git remote 指令
   - 查看所有遠端
     ```bash
     git remote
     ```
   - 查看遠端詳細資訊
     ```bash
     git remote -v
     ```

---

1. 要更改 Git 的作者名稱和電子郵件，你可以使用以下命令來更新 全局設置 或 特定倉庫 設置。

   **更改 Git 作者名稱**

   ```bash
   git config --global user.name "新名字"
   ```

   **更改 Git email**

   ```bash
   git config --global user.email "新的郵箱@example.com"
   ```

2. 查看全局設置

   ```bash
   git config --global user.name
   git config --global user.email
   ```
