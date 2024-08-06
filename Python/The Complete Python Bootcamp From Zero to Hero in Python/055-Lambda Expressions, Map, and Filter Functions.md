### 55. Lambda Expressions, Map, and Filter Functions

map function

```python
# 練習一
def square(num):
    return num**2

my_nums = [1,2,3,4,5]

for item in map(square, my_nums):
    print(item)
# 需轉換為list
print(list(map(square, my_nums)))

# 練習二
def splicer(mystring):
    if len(mystring)%2 == 0:
        return 'EVEN'
    else:
        return mystring[0]

names=['Andy', 'Eve', 'Sally']
# 需轉換為list
print(list(map(splicer, names)))
```

filter function

```python
def check_even(num):
    return num%2 == 0

mynums = [1,2,3,4,5,6]
# 需轉換為list
print(list(filter(check_even, mynums)))
# 或是 iterate through the result on that
for n in filter(check_even,mynums):
    print(n)
```

lambda expressions

```python
def square(num):
    result = num ** 2
    return result
print(square(3))

# 使用 lambda expression
square = lambda num: num ** 2
print(square(5))

mynums = [1,2,3,4,5,6]
x = list(map(lambda num:num**2, mynums))
print(x)

y = list(filter(lambda num:num%2 == 0, mynums))
print(y)

names=['Andy', 'Eve', 'Sally']
letter = list(map(lambda name:name[0], names))
print(letter)
```
