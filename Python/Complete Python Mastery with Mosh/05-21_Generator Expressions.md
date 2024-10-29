```python
from sys import getsizeof

values = (x * 2 for x in range(10))
print(values)
for x in values:
    print(x)

# generator expression 可以維持輕量大小又可以loop
# generator expression 無法使用len()
values = (x * 2 for x in range(1000))
print("gen: ", getsizeof(values))
values = (x * 2 for x in range(100000))
print("gen: ", getsizeof(values))
print(len(values))

```
