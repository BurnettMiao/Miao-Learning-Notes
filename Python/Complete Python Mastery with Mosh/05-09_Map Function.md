```python
items = [
    ("Product1", 10),
    ("Product2", 9),
    ("Product3", 12),
]

# 方法一
# price = []
# for item in items:
#     price.append(item[1])
# print(price)

# 方法二
prices = list(map(lambda item: item[1], items))
print(prices)
for item in prices:
    print(item)
```
