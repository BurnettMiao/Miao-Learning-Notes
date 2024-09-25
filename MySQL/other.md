### 其他參考用

Python 需要安裝

❯ pip install mysql-connector-python

❯ pip install pymysql

[Python 連線 MySQL 方法說明](https://suyenting.github.io/post/python-connect-to-mysql/)

---

使用 Python 取得 db 資料

```sql
# 設定資料庫連線
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='Miao751021'
)
cursor = conn.cursor()
# 使用指定的資料庫
cursor.execute("USE gj_accounts_db;")
# 查詢 gj_accounts 資料表
cursor.execute("SELECT * FROM gj_accounts")
# 獲取查詢結果
result = cursor.fetchall()

for x in result:
    print(x)

conn.close()
```

使用 Python 取得 db 資料並回傳 json 給前端

```sql
@app.route('/get_gj_courses_db', methods=['POST'])
def get_gj_courses():
    # 設定資料庫連線
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Miao751021'
    )
    # 使用 dictionary=True 以便返回字典形式的結果
    cursor = conn.cursor(dictionary=True)
    try:
        # 使用指定的資料庫
        cursor.execute("USE gj_courses_db;")
        # 查詢 gj_courses 資料表
        cursor.execute("SELECT * FROM gj_courses")
        # 獲取查詢結果
        result = cursor.fetchall()
        return jsonify(result)
    except Exception as e:
        return jsonify({"message": str(e)})
    finally:
        cursor.close()
        conn.close()
```
