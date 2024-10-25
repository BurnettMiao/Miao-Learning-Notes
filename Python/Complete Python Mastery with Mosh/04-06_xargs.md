```python
def multiply(*numbers):
    print(numbers) # 會變成tuples可以iterable
    total = 1
    for number in numbers:
        total *= number
    return total

print(multiply(2,3,4,5))
```
