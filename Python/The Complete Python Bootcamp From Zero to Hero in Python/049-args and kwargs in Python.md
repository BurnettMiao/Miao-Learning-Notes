### 49. \*args and \*\*kwargs in Python

無法預期有多少個 arguments 時可以使用這個方式

**args return tuple**

```python
# def myfunc(a, b):
#     return sum((a, b)) * 0.05

# def myfunc(*args):
#     print(args)
#     return sum(args) * 0.05

# value = myfunc(40, 60, 100)
# print(value)

def myfunc(*args):
    for item in args:
        print(item)

myfunc(40, 60, 100, 1, 34)
```

**kwargs return dictionary**

```python
def myfunc(**kwargs):
    print(kwargs)
    if 'fruit' in kwargs:
        print('My fruit of choice is {}'.format(kwargs['fruit']))
    else:
        print('I did not find any fruit here')

myfunc(fruit='apple')
myfunc(fruit='apple', veggie='lettuce')
```

**如果並存時須先 args 再 kwargs**

```python
def myfunc(*args, **kwargs):
    print(args)
    print(kwargs)
    print('I would like {} {}'.format(args[0], kwargs['food']))

myfunc(10,20,30,fruit='orange',food='eggs',animal='dog')
```
