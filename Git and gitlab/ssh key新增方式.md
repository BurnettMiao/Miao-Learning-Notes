當你在 Windows 系統 上使用 SSH 密鑰與 GitHub 進行安全的 Git 操作時，以下是完整的步驟流程：

1.  安裝 Git 和 OpenSSH
    首先確保你的系統安裝了 Git 和 OpenSSH 來支持 SSH 連接。

        安裝 Git
        1. 下載並安裝 Git for Windows。
        2. 安裝過程中，選擇 "Git Bash Here" 和 "Use Git from the Windows Command Prompt"。

        檢查 OpenSSH 是否安裝
         1. 在 開始菜單 中搜尋「設定」，然後進入 應用程式 > 可選功能。
         2. 滾動並檢查是否安裝了 OpenSSH 客戶端 和 OpenSSH 伺服器。
         3. 若未安裝，可以點選 "添加功能"，搜尋並安裝 OpenSSH 客戶端。

2.  創建 SSH 密鑰

    1. 打開 Git Bash。
    2. 創建一個新的 SSH 密鑰對：

       ```bash
       ssh-keygen -t ed25519 -C "your_email@example.com"
       ```

       - -t ed25519：選擇加密類型（ED25519 是較新的和更安全的加密方式）。
       - -C "your_email@example.com"：為密鑰添加註釋，通常是你的電子郵件。

    3. 系統會要求你指定文件位置來保存密鑰：

       ```bash
       Enter file in which to save the key (C:\Users\your_username/.ssh/id_ed25519):
       ```

       你可以按 Enter 使用默認位置（C:\Users\your_username\.ssh\id_ed25519）來保存密鑰。

    4. 接下來，你可以選擇是否為密鑰設置密碼。若設置密碼，每次使用密鑰時都需要輸入密碼。若不設置密碼，直接按 Enter。

    5. 完成後，你應該會看到以下輸出：

       ```bash
       Your identification has been saved in /c/Users/your_username/.ssh/id_ed25519.
       Your public key has been saved in /c/Users/your_username/.ssh/id_ed25519.pub.
       ```

3.  將公鑰添加到 GitHub

    1. 查看公鑰內容： 在 Git Bash 中，輸入以下命令查看公鑰：

       ```bash
       cat ~/.ssh/id_ed25519.pub
       ```

       複製顯示的整個公鑰（包括 ssh-ed25519 開頭）。

    2. 將公鑰添加到 GitHub：
       - 登錄 GitHub。
       - 進入 Settings > SSH and GPG keys > New SSH key。
       - 在 Title 中填寫描述（例如 "My Laptop"）。
       - 在 Key 中粘貼剛才複製的公鑰，然後點擊 Add SSH key。

4.  確保 SSH Agent 正常運行

    1. 啟動 SSH Agent： 打開 Git Bash 並輸入以下命令：

       ```bash
        eval $(ssh-agent -s)
        `
       這會啟動 SSH Agent 並顯示 Agent pid。

       ```

    2. 添加私鑰到 SSH Agent： 執行以下命令將私鑰加載到 SSH Agent：

       ```bash
       ssh-add ~/.ssh/id_ed25519
       ```

5.  測試 SSH 連接

    1. 在 Git Bash 中執行以下命令，測試與 GitHub 的連接：

       ```bash
       ssh -T git@github.com
       ```

    2. 如果設置成功，應該會顯示以下信息：

       ```bash
       Hi username! You've successfully authenticated, but GitHub does not provide shell access.
       ```

       這表示你已經成功使用 SSH 密鑰認證，並且可以進行 Git 操作。

6.  使用 SSH 進行 Git 操作

    1. 檢查並設定遠端儲存庫的 URL 為 SSH 格式：

       ```bash
       git remote -v
       ```

       確保它顯示的是 git@github.com:username/repo.git 格式。

    2. 若需要切換為 SSH 格式：

       ```bash
       git remote set-url origin git@github.com:username/repo.git
       ```

       現在，你可以使用 Git 命令（如 git push 和 git pull）來操作 GitHub 儲存庫。

---

總結

1. 安裝 Git 和 OpenSSH 客戶端。
2. 創建 SSH 密鑰並將公鑰添加到 GitHub。
3. 啟動 SSH Agent 並添加私鑰。
4. 測試與 GitHub 的連接。

這樣，你就完成了 Windows 上 SSH 密鑰的設置並能順利與 GitHub 交互。如果還有任何問題，隨時告訴我！😊
