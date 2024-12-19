## Docker 語法指令

- docker logs [容器 ID 或 容器名稱]
  嘗試運行 docker logs 命令來查看容器內應用程式的日誌輸出，這可能會提供有關錯誤原因的更多細節。你也可以使用 docker inspect 指令來查看容器的詳細信息，包括其配置和狀態。

- docker exec -it <container_name_or_id> /bin/bash
  使用以上指令進入 Docker 即可在 Docker 容器中查看具體目錄，進入容器後，你可以像在普通的 Linux 系統中一樣使用命令來查看檔，比如 ls、cd、cat 等。

- exit
  使用以上指令即可退出 Docker

- docker-compose logs app
  查看容器日志以了解服務器是否啟動成功以及是否存在錯誤。

- docker-compose down
  這個指令會停止並移除由 docker-compose 管理的容器、網絡和關聯的資源。換句話說，它會關閉並清理所有在 docker-compose 文件中定義的服務。

- docker-compose up --build
  這個指令會啟動 docker-compose 文件中定義的所有服務。如果加上 --build 選項，它會在啟動容器之前重新構建所有的 Docker 映像。這對於你在 Dockerfile 或上下文中做了更改後，確保最新的更改被應用非常有用。

- 簡單來說：
  docker-compose down 會關閉和移除所有服務。
  docker-compose up --build 會重新構建映像並啟動所有服務。

---

- docker image ls
  列出現在所有的 image

- docker ps
  使用以上指令即可列出當前正在運行的容器，以獲取你想查看的容器的名稱或 ID

- docker ps -a
  使用以上指令即可列出當前正的容器，包含停止的

---

**如何執行 docker image**

- docker run -d -p 80:80 nginx
  啟動一個 Nginx 容器

  - -d: 後台執行
  - -p 80:80: 將容器的 80 端口映射到主機的 80 端口
  - nginx: 使用 nginx 映像

- docker run -p 80:80 -d --name my-nginx nginx

  - docker run：這是 Docker 用來啟動一個新容器的基本指令。
  - -p 80:80：這部分指定了端口映射。
  - 80:80 左邊的 80 代表的是 本機 (host) 的端口。也就是說，當你在瀏覽器輸入 http://localhost 的時候，實際上是對應到容器內的服務。80:80 右邊的 80 代表的是 容器 (container) 內的端口。Nginx 這個容器通常會監聽 80 端口，也就是標準的 HTTP 端口。
  - -d：這個參數表示在後台運行容器。也就是說，執行完這個指令後，容器會在背景繼續運行，而你可以在終端中繼續執行其他指令。
  - --name my-nginx：這個參數給容器命名為 my-nginx。這樣一來，你就可以用這個名字來管理這個容器，例如停止、啟動或刪除它。
  - nginx：這指定了要使用的映像名稱。nginx 是一個官方的 Nginx 映像，包含了一個預先配置好的 Nginx 伺服器。

  - docker run --name myapp_c2 -p 4000:4000 -d myapp
    其中 -d 可以放在任意位置這樣也是可以的

**如何執行帶有版本的 docer image**
docker run --name myapp_c -p 4000:4000 myapp:v1

---

當你下載了 Node.js 的 Docker 映像並嘗試運行後容器卻立即停止，通常是因為 Docker 容器的預設行為：如果容器內的主進程結束，容器就會停止。這是由於 Node.js 映像中沒有啟動持續運行的進程，而容器的生命週期與主進程綁定。

1. 容器啟動後，沒有主進程持續運行
   如果你只是執行以下命令：
   ```bash
   docker run node
   ```
   默認情況下，node 進入一個 REPL（交互式命令行），但如果沒有任何輸入，REPL 就會關閉，容器也會停止。
   - 解決方法：
     運行容器時加上交互模式（-it），這樣可以進入 Node.js 的 REPL 並保持容器運行：
     ```bash
     docker run -it node
     ```
     這會讓你進入 Node.js 的命令行環境，可以直接執行 JavaScript。

---

**Docker 的 Digest 是什麼**

在 Docker 中，Digest 是映像的唯一標識符。它是一種基於內容的哈希值（通常是 SHA256），用於確保 Docker 映像的完整性和唯一性。Digest 是由映像的內容計算出的，因此相同內容的映像會有相同的 Digest，不管它們的標籤（tag）如何。

- Digest 的作用

  - 唯一性：Digest 保證了映像的內容是唯一的。任何微小的改動（如配置或文件變動）都會導致 Digest 改變。
  - 版本控制：即使標籤改變（如 latest），Digest 依然保持一致，因此能準確指向特定的映像版本。
  - 安全性：使用 Digest 可以防止映像被篡改，因為 Digest 是基於內容生成的，改變內容會導致哈希值不同。

- 如何使用 Docker Digest？

  - 獲取映像的 Digest
    當你拉取或查看 Docker 映像時，可以使用以下方式取得 Digest：

    ```bash
    <!-- 拉取映像並查看 Digest： -->
    docker pull <image_name>:<tag>
    docker inspect --format='{{index .RepoDigests 0}}' <image_name>

    <!-- 實際例子 -->
    docker pull nginx:latest
    docker inspect --format='{{index .RepoDigests 0}}' nginx

    <!-- 列出所有映像的 Digest： -->
    docker images --digests
    ```

  - 使用 Digest 拉取特定映像版本
    Digest 確保你拉取的映像與預期一致，避免因標籤（tag）變動導致的版本不匹配。

    ```bash
    <!-- 命令格式： -->
    docker pull <image_name>@<digest>

    <!-- 實際例子 -->
    docker pull nginx@sha256:3b9c70b01134f9654bcf308fb4cabe6ab4e1d58e26ef17dd0bfed7b8ef113d27
    ```

  - 使用 Digest 在 Dockerfile 中指定映像
    在 Dockerfile 中，可以使用 Digest 來確保基礎映像的版本不變：

    ```bash
    FROM nginx@sha256:3b9c70b01134f9654bcf308fb4cabe6ab4e1d58e26ef17dd0bfed7b8ef113d27
    ```

  - 驗證 Digest
    如果你需要檢查一個本地映像的 Digest，可以使用：

    ```bash
    docker inspect --format='{{.Id}}' <image_name>
    ```

---

**如何建立 docker image**

- docker build -t myapp .
  這段命令是用來構建一個 Docker 映像，並將其命名為 myapp。下面是詳細的解析：

  - docker build
    Docker 用於構建映像的命令，根據 Dockerfile 和相關資源構建一個新的映像。
  - -t myapp
    這裡的 -t 是標籤（tag）的縮寫，用來為映像指定名稱和可選的標籤（默認是 latest）。
    在這個例子中：
    - myapp 是映像的名稱（name）。
    - 如果未指定標籤，Docker 默認標籤為 latest，所以實際上等價於 myapp:latest。
  - .（點）
    表示構建上下文（build context），即 Docker 構建過程中可用的文件和目錄範圍。
    - . 代表當前目錄，Docker 會使用當前目錄下的 Dockerfile 和其他相關文件進行構建。

- docker build -t myapp:v1 .
  這是帶有 tag 版本的寫法

---

忽略某些資料夾不用複製如 node_modules
則可以使用 .dockerignore

```bash
node_modules/
```

則 node_modules 就不會被複製進 container 裡面

---

**如何停止 container**

```bash
docker stop myapp_c1(container 的名字)
docker stop a722cab96aef(container id)
```

---

**如何開始 container**

```bash
docker start myapp_c2(container 的名字)
```

---

**如何移除 image**

```bash
docker image rm myapp

# 強制刪除的話加上 -f
docker image rm myapp5 -f
```

---

**如何移除 container**

```bash
docker container rm myapp_c2
```

---

**移除所有 image container**

```bash
docker system prune -a
```

- 功能說明

  - 移除未使用的容器：
    - 刪除所有處於 已停止（exited）狀態的容器。
  - 移除未使用的映像（image）：

    - 移除所有 未被任何容器使用的映像，包括中間層映像（intermediate layers）。

  - 移除未使用的網路（network）：
    - 刪除所有未被使用的 Docker 自定義網路（但不影響默認網路 bridge、host 或 none）。
  - 不移除 Volume：
    - 默認不會刪除 Volume，因為它們可能包含重要的數據。

- 總結
  docker system prune -a 用於清理未使用的 container、image 和 network，但不會刪除 volume。如果需要清理 volume，需額外執行 docker volume prune。

---

**如何與 container 做交互**

```bash
docker start -i myapp_c
```

1. 指令結構
   - docker start：
     用於啟動已停止的容器。
     容器必須已存在並處於 stopped（已停止） 狀態。
   - -i（交互模式）：
     表示啟動容器後，將把當前的終端連接到容器內部，允許你與容器內的進程進行交互。
     如果容器的啟動指令（如 CMD 或 ENTRYPOINT）需要用戶輸入，這個選項非常有用。
   - myapp_c：
     容器的名稱（或 ID），用於指定需要啟動的容器。
2. 實際效果
   - 執行後：
     - 容器 myapp_c 被啟動。
     - 如果容器內的進程（如 bash 或 node）支持交互，終端會被附加到容器內部，允許用戶輸入命令。
     - 按下 Ctrl + C 或進程結束時，容器可能會停止（視容器設置而定）。
3. 使用場景
   - 調試和測試： 進入容器，手動測試應用程序的啟動流程或檢查內部狀態。
   - 需要交互式進程： 如果容器的主進程（如 shell）需要用戶輸入，-i 讓終端可以與進程交互。

---

**當停止 container 時，整個 container 都會被移除**

```bash
docker run --name myapp_c_nodemon -p 4000:4000 --rm myapp:nodemon
```

- docker run: 這是 Docker 的命令，用來創建並啟動一個新的容器。

- --name myapp_c_nodemon: 為容器指定一個名稱，這裡是 myapp_c_nodemon。這樣可以更容易地引用這個容器，而不需要使用容器的 ID。

- -p 4000:4000: 這個選項將本機的 4000 端口映射到容器內的 4000 端口。這意味著您可以通過本機的 4000 端口訪問容器內的應用程序，通常用於開發模式下測試 Web 應用。

- --rm: 當容器停止運行時，自動刪除容器。這樣可以避免容器在停止後留在本地系統中，佔用不必要的空間。

- myapp:nodemon: 這是容器使用的映像檔名稱和標籤。在這個例子中，myapp 是映像檔名稱，而 nodemon 是標籤，通常用於指示這個映像檔中包含了 nodemon（一個用於自動重啟 Node.js 應用的工具）。

這條命令的目的是啟動一個基於 myapp:nodemon 映像的容器，並將本機的 4000 端口映射到容器的 4000 端口，同時運行一個 Node.js 應用程序（假設應用程序已經配置為使用 nodemon）。容器停止後會被自動刪除。

---

**指令掛載 volume 的方法**

```bash
docker run --name myapp_c_nodemon -p 4000:4000 --rm -v C:\Users\burnett\Desktop\docker_course\api\:/app -v /app/node_modules myapp:nodemon
```

- docker run: 這是 Docker 的基本命令，用來創建並啟動一個新的容器。

- --name myapp_c_nodemon: 為容器指定一個名稱 myapp_c_nodemon。這使得你在需要時可以更方便地引用這個容器，而不是使用容器 ID。

- -p 4000:4000: 這個選項將本地端的端口 4000 映射到容器內的端口 4000。這意味著你可以通過本機的 4000 端口來訪問容器中的應用（通常是 Web 應用）。

- --rm: 這個選項表示當容器停止時，它會自動被刪除，避免容器在停止後佔用磁碟空間。

- -v C:\Users\burnett\Desktop\docker_course\api\:/app: 這是 volume 映射，用於將本地機的 C:\Users\burnett\Desktop\docker_course\api\ 資料夾映射到容器內的 /app 資料夾。這樣一來，容器內部 /app 資料夾的內容會即時同步為本地資料夾的內容，這對開發來說非常有用，可以實現文件的即時更新。

- -v /app/node_modules: 這表示將容器內的 /app/node_modules 目錄掛載為一個 volume。這個操作的目的是為了防止本地端的 node_modules 目錄和容器內的 node_modules 目錄被同步，從而避免在本地和容器間出現不必要的依賴版本衝突。這樣可以確保 node_modules 目錄只存在於容器內，並且不會被映射到本地。

- myapp:nodemon: 這是 Docker 映像的名稱和標籤，myapp 是映像名稱，nodemon 是標籤。這表明容器將基於 myapp:nodemon 映像來啟動，並且這個映像應該包含 nodemon，這是一個用來在文件改動時自動重啟 Node.js 應用的工具。

這條命令的目的是使用 myapp:nodemon 映像創建並啟動一個容器，並將本地端的應用程序資料夾 (C:\Users\burnett\Desktop\docker_course\api\) 映射到容器內的 /app 資料夾，同時確保 node_modules 資料夾只存在於容器內。容器啟動後，本地端的 4000 端口將映射到容器內的 4000 端口，方便用戶訪問應用程序。此外，容器停止後會自動刪除。

---

## docker-compose 指令

**啟動相關指令**

1. 啟動並建構容器

   ```bash
   docker-compose up --build
   ```

   - 功能：啟動所有服務，並根據 Dockerfile 重新建構映像檔。
   - 常用選項：
     - -d：以後台模式運行。
     - --force-recreate：強制重新建立容器，即使配置沒有變更。

2. 僅啟動容器

   ```bash
   docker-compose up
   ```

   - 功能：啟動服務，但不重新建構映像檔。

**停止相關指令**

3. 停止所有服務

   ```bash
   docker-compose stop
   ```

   - 功能：停止正在運行的容器，但不刪除。

4. 完全移除容器

   ```bash
   docker-compose down
   ```

   - 功能：停止並刪除所有容器、網路和匿名 Volume。
   - 常用選項：

     - -v：同時刪除與服務相關的 Volume。

     ***

   4-1

   ```bash
   docker-compose down --rmi all -v
   ```

   **指令分解**

   - docker-compose down:
     - 停止並刪除所有由 docker-compose 啟動的容器、網路和相關資源。
   - --rmi all:
     - 刪除與 docker-compose 中服務相關的所有映像檔（images）。
     - 包括以下兩類：
       - 由 docker-compose 創建和建構的本地映像檔（基於 build 指令生成）。
       - 拉取的外部映像檔（基於 image 指令下載的）。
   - -v:
     - 刪除與 docker-compose 服務相關的所有 命名 Volume 和 匿名 Volume。
     - 注意：只刪除和 docker-compose 定義的服務相關的 Volume，不影響其他容器使用的 Volume。

   **實際效果**
   執行這段指令會：

   - 停止並刪除 docker-compose 啟動的所有容器。
   - 刪除所有相關的映像檔，無論是本地建構的還是從 Docker Hub 拉取的。
   - 刪除與這些容器相關的 Volume，包括匿名和命名的。

     **使用場景**

   1. 清理開發環境： 如果你正在開發某個專案，並需要重置所有相關的容器、映像檔和數據（Volume），這是非常方便的指令。
   2. 釋放空間： 當 Docker 中積累了大量不再需要的映像檔或 Volume 時，可以通過這個指令釋放存儲空間。
   3. 重建服務環境： 在測試中，若需要清理舊的環境並從頭開始，可以使用這個指令刪除所有相關資源，然後重新啟動。

   **使用場景**

   1. 風險：
      - 執行這個指令會永久刪除所有容器、映像檔和 Volume，數據不可恢復。
      - 如果有重要數據，請提前備份。
   2. 映像檔重新下載： 如果刪除了外部拉取的映像檔，下一次運行 docker-compose up 可能需要重新下載，會耗費額外的時間和網路資源。
   3. 匿名 Volume： 刪除匿名 Volume 可能導致丟失容器中存儲的數據（如資料庫的數據文件）。

**建構相關指令**

5. 建構或重新建構映像檔

   ```bash
   docker-compose build
   ```

   - 功能：從 Dockerfile 重新建構映像檔。
   - 常用選項：
     - --no-cache：建構時不使用快取。

**日誌與監控**

6. 檢視容器日誌

   ```bash
   docker-compose logs
   ```

   - 功能：查看服務的運行日誌。
   - 常用選項：
     - -f：即時追蹤日誌輸出。
     - --tail N：只顯示最近 N 行日誌。

7. 監控容器狀態

   ```bash
   docker-compose ps
   ```

   - 功能：查看所有服務的運行狀態。

**進階操作**

8. 執行特定容器中的指令

   ```bash
   docker-compose exec <service_name> <command>
   ```

   - 功能：在指定服務的容器中執行命令。
   - 示例：

     ```bash
     docker-compose exec api bash
     ```

     進入名為 api 的服務容器內部，啟動 bash。

9. 啟動單個服務

   ```bash
   docker-compose up <service_name>
   ```

   - 功能：僅啟動指定服務。
   - 示例：

     ```bash
     docker-compose up api
     ```

10. 刪除所有匿名 Volume

    ```bash
    docker volume prune
    ```

    - 功能：刪除所有未使用的匿名 Volume。

**配置檢查**

11. 檢查配置文件

    ```bash
    docker-compose config
    ```

    - 功能：檢查 docker-compose.yaml 的語法和配置是否正確。

**範例操作**

1. 假設你的 docker-compose.yaml 文件如下：

   ```yaml
   version: '3.8'
   services:
     api:
       build: ./api
       container_name: api_c
       ports:
         - '4000:4000'
       volumes:
         - ./api:/app
         - /app/node_modules
   ```

2. 啟動並進入容器

   ```bash
   docker-compose up -d --build  # 啟動並後台運行
   docker-compose exec api bash  # 進入名為 api 的容器
   ```

3. 停止並刪除容器

   ```bash
   docker-compose down -v  # 停止所有服務並刪除容器與 Volume
   ```

---

**使用 docker-compose.yaml 掛載 volume 的方法**

如果你希望 node_modules 僅由容器管理，而不依賴本地的 node_modules，可以這樣配置：

```yaml
version: '3.8'
services:
  api:
    build: ./api
    container_name: api_c
    ports:
      - '4000:4000'
    volumes:
      # 本地程式碼與容器同步
      - ./api:/app
      # 使用匿名 volume，讓 node_modules 獨立存在於容器內
      - /app/node_modules
```

1. ./api:/app：

   - 映射本地程式碼到容器內的 /app，確保本地開發的變更即時反映到容器中。

2. /app/node_modules：

   - 創建一個匿名 Volume，用於容器內的 node_modules。
   - 不會同步本地的 node_modules，容器內部的 node_modules 會獨立管理，並且只存在於容器內。

**為什麼要獨立管理 node_modules**

1. 避免本地與容器依賴的衝突： 本地和容器可能使用不同的 Node.js 版本或平台，導致 node_modules 的二進位檔案（如 \*.node）不兼容。

2. 提高容器的穩定性和一致性： 讓容器依賴於其內部的 node_modules，確保在任何機器上執行時都保持一致的環境。

3. 本地端清潔性： 如果開發過程中不需要本地安裝的依賴，這樣的方式可以保持本地目錄的簡潔，只需要專注於程式碼。

如果你的需求是不與本地端的 node_modules 做同步，應該使用匿名 Volume，這樣可以保證環境隔離性，避免開發過程中出現依賴衝突。

**路徑不完整情況**

如果在 docker-compose.yaml 中寫 - ./app/node_modules，而沒有指定完整的目標路徑，Docker 會出錯，原因如下：

1. Docker 的 volumes 需要同時指定 本地路徑（source） 和 容器內路徑（target）：

   ```yaml
   - <本地路徑>:<容器內路徑>
   ```

   而單獨寫 - ./app/node_modules，Docker 只會認為你提供了 本地路徑，卻沒有指定容器內要掛載的位置，這導致錯誤。

2. 需要絕對路徑作為目標路徑:
   Docker 的目標路徑（即容器內路徑）必須是絕對路徑，例如 /app/node_modules。寫成 ./app/node_modules 或省略目標路徑是不被接受的。

   ```yaml
   volumes:
     - ./app/node_modules:/app/node_modules
   ```

   這表示：
   本地的 ./app/node_modules 與容器內的 /app/node_modules 建立映射。

3. 特定情況下，可能不應映射 node_modules

   將本地的 node_modules 與容器內的 node_modules 映射，可能引發以下問題：

   - 平台差異：如果開發環境和容器的系統架構不同（例如，本地是 Windows，容器是 Linux），一些二進位模組（如 \*.node 文件）可能無法正確運行。
   - 依賴管理衝突：如果容器內安裝了新的依賴，可能會覆蓋本地 node_modules。

   因此，許多開發者選擇讓容器內的 node_modules 獨立運行，而不與本地的 node_modules 建立映射。

**建議的配置**
如果你希望 node_modules 僅由容器管理，而不依賴本地的 node_modules，可以這樣配置：

```yaml
volumes:
  - ./api:/app # 本地程式碼與容器同步
  - /app/node_modules # 使用匿名 volume，讓 node_modules 獨立存在於容器內
```

這樣，本地的 node_modules 不會干擾容器內的依賴，同時容器內的依賴也不會回寫到本地。

**總結**

- ./app/node_modules 錯誤的原因是目標路徑不完整。正確的方式是明確指定容器內的目標路徑。如果你的需求是不與本地端的 node_modules 做同步，應該使用匿名 Volume，這樣可以保證環境隔離性，避免開發過程中出現依賴衝突。

---
