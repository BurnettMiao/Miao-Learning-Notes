```python
# 以下都被視為tuple
# point = (1, 2)
# point = 1, 2
# point = 1,
# point = ()

# tuple concatenate
# point = (1, 2) + (3, 4)
# point = (1, 2) * 3

# list convert to tuple
point = tuple([1, 2, 3])

print(point)
print(point[0:])
print(point[0:2])

# Unpack Tuples
x, y, z = point

if 10 in point:
    print("sxists")
```
