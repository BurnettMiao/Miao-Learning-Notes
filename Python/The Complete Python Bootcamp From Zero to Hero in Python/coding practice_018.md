### 編碼練習 18： Functions #9: pick evens

Define a function called myfunc that takes in an arbitrary number of arguments, and returns a list containing only those arguments that are even.

Remember, don't run the function, simply provide the definition.

To give an idea what the function would look like when tested:

```python
myfunc(5,6,7,8)
# Output: [6, 8]
```

Added note: this exercise requires that the function return a list. Print statements will not work here.

```python
def myfunc(*args):
    result = []
    for i in args:
        if i % 2 == 0:
            result.append(i)
    return result

testValue = myfunc(12, 4, 8, 33, 36)
print(testValue)
```
