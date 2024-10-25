```python
numbers = [1, 2, 3]

# 沒有效率的方式
first = numbers[0]
second = numbers[1]
third = numbers[2]

# list unpacking
first, second, third = numbers


numbers = [1, 2, 3, 4, 4, 4, 4, 9]
first, second, *other, last= numbers
print(first)
print(second)
print(other)
print(last)
```
