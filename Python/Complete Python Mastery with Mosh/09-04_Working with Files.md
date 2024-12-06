```python
from pathlib import Path
from time import ctime

path = Path("ecommerce/__init__.py")
# path.exists()
# path.rename("init.txt")
# path.unlink()
# print(path.stat())
# print(ctime(path.stat().st_ctime))

# path.read_bytes()

# print(path.read_text())
# path.write_text('....')
# path.write_bytes()

# ----- 推薦使用
import shutil
source = Path("ecommerce/__init__.py")
target = Path() / "__init__.py"

shutil.copy(source, target)
```
