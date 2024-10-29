```python
numbers = [1, 2, 3]
print(*numbers)

values = list(range(5))
print(values)
values = [*range(5), *"Hello"]
print(values)

first = [1, 2]
second = [3]
value = [*first, "a", *second, "Hello"]
print(value)

# 如果有相同的key則會以最新key的value為主
first = {"x": 1}
second = {"x": 10, "y": 2}
combine = {**first, **second, "z": 1}
print(combine)
```
