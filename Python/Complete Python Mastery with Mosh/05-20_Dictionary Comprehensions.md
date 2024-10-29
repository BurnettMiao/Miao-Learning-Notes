```python
# values = []
# for x in range(5):
#     values.append(x * 2)

# 可使用 list comprehensions 語法代替上述程式碼也比較簡潔
# [expression for item in items]
# value = [x * 2 for x in range(5)]

# list comprehensions用於set，但要使用{}
values = {x * 2 for x in range(5)}
print(values)

# dictionary comprehensions
values = {x: x * 2 for x in range(5)}
print(values)
```
