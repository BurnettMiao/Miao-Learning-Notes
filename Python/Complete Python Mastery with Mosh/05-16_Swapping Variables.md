```python
x = 10
y = 11

# 方法一
# z = x
# x = y
# y = z

# print("x", x)
# print("y", y)

# 方法二 Unpack Tuples
x, y = y, x
# 等同於unpacking x, y = (11, 10)
print("x", x)
print("y", y)
```
