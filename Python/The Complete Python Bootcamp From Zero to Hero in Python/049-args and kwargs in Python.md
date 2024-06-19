### 49. \*args and \*\*kwargs in Python

無法預期有多少個 arguments 時可以使用這個方式

```python
def myfunc(*args):
    return sum(args) * 0.05

myfunc(40,60,100,1,34)


def loop_item(*args):
  for item in args:
    print(item)
```
