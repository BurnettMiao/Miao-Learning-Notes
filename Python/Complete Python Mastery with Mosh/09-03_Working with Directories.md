```python
from pathlib import Path

path = Path("ecommerce")
# path.exists()
# path.mkdir()
# path.rmdir()
# path.rename("ecommerce2")

# print(path.iterdir())
for p in path.iterdir():
    print(p)

# 使用 list comprehension
paths = [p for p in path.iterdir()]
print(paths)

paths = [p for p in path.iterdir() if p.is_dir()]
print(paths)

# 只搜尋當前資料夾
py_files = [p for p in path.glob("*.py")]
# 搜尋當前資料夾 及所有子資料夾
py_files = [p for p in path.rglob("*.py")]
print(py_files)
```
