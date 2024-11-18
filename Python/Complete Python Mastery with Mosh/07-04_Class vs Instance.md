```python
class Point:
    default_color = 'red'

    def __init__(self, x, y):
        self.x = x
        self.y = y

    def draw(self):
        print(f"Point ({self.x}, {self.y})")

# class level attributers are shared across all instances of a class. If we change their value, the change is visible to all object of that type.

# 更改 class 的 default_color 從 red 到 yellow
Point.default_color = 'yellow'

point = Point(1, 2)
print(point.default_color)
print(Point.default_color)
point.draw()

another = Point(3, 4)
print(another.default_color)
another.draw()
```
