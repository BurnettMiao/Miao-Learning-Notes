```python
import json
from pathlib import Path

# 建立 json file
# movies = [
#     {"id": 1, "title": "Terminator", "year": 1989},
#     {"id": 2, "title": "Kindergarten Cop", "year": 1993},
# ]
# data = json.dumps(movies)
# Path("movies.json").write_text(data)

# 讀取 json file
data = Path("movies.json").read_text()
movies = json.loads(data)
print(movies)
print(movies[0]["title"])
```