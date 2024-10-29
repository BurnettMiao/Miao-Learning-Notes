```python
# 在 Python 中，with open 是一種用來安全地處理文件的寫法，確保文件在處理完成後會自動關閉，不會佔用資源。
# 如果用 with open 就不用有 .close()

try:
    with open('app.py') as file:
        print("File opened.")
    age = int(input("Age: "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError):
    print("You didn't enter a valid age.")
else:
    print("No exceptions were thrown.")
```
