```python
class Point:
    def draw(self):
        print("draw")


point = Point()
print(type(point))

# 確認 point 是不是 Point 的實例
print(isinstance(point, Point))
```
