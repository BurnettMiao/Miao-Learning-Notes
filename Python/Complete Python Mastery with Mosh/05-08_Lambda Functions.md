```python
# 練習 1
items = [
    ('Product1', 10),
    ('Product2', 9),
    ('Product3', 12),
]

# 之前方法
# def sort_item(item):
#     return item[1]

## sort() 方法內部會自動迭代（或 loop）列表中的每個元素，根據 key 函數的返回值來進行比較和排序。
# items.sort(key=sort_item)
# print(items)


# 使用 Lambda Functions
# items.sort(key=lambda parameters:expression)
items.sort(key=lambda item:item[1])
print(items)
```
