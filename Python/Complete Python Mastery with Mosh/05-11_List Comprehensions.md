```python
items = [
    ("Product1", 10),
    ("Product2", 9),
    ("Product3", 12),
]

price = list(map(lambda item: item[1], items))
# list comprehensions寫法
price = [item[1] for item in items]

filtered = list(filter(lambda item: item[1] >= 10, items))
# list comprehensions寫法
filtered = [item for item in items if item[1] >= 10]
```
