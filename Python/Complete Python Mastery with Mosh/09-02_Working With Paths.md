```python
from pathlib import Path

# ----- 基本用法 -----
# raw string
Path(r"c:\Program Files\Microsoft")
# 如果在 Mac 的話
Path("/usr/local/bin")
# current folder
Path()
Path("ecommerce/__init__.py")
Path() / Path("ecommerce")
# combine string
Path() / "ecommerce" / "__init__.py"
# get the home directory of current user
Path.home()
# ----- 基本用法 -----



# ----- 實際運用 -----
path = Path("ecommerce/__init__.py")
# 檢查是否存在
path.exists()
# 檢查是否為檔案
path.is_file()
# 檢查是否為資料夾
path.is_dir()

print(path.name) # __init__.py
print(path.stem) # __init__
print(path.suffix) # .py
print(path.parent) # ecommerce

path = path.with_name("file.txt")
print(path) # ecommerce\file.tex
# 輸出絕對路徑
print(path.absolute())
path = path.with_suffix(".txt")
print(path)
# ----- 實際運用 -----
```
