```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p1 = Point(x=1, y=2)
p2 = Point(x=1, y=2)
print(p1 == p2)

# -----
# class Point:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

#     def __eq__(self, other):
#         return self.x == other.x and self.y == other.y

# p1 = Point(1, 2)
# p2 = Point(1, 2)
# print(p1 == p2) # False 因為存在記憶體的不同地方(加了 __eq__ 則會變成True)
# print(id(p1))
# print(id(p2))

# # 加了 __eq__
# print(p1 == p2) # True
```
