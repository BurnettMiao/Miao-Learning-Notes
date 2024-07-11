### 51. Function Practice Exercises - Solutions

```python
# 方法1
# def myfunc(a, b):
#     if a % 2 == 0 and b % 2 == 0:
#         print('兩個都是偶數')
#         if a < b :
#             print(a)
#         else:
#             print(b)
#     else:
#         print('其中一個不是偶數')
#         if a > b:
#             print(a)
#         else:
#             print(b)

# 方法2
def myfunc(a, b):
    if a % 2 == 0 and b % 2 == 0:
        print('兩個都是偶數')
        print(min(a, b))
    else:
        print('其中一個不是偶數')
        print(max(a, b))

myfunc(2, 4)
myfunc(7, 5)
```

```python
def myfunc(text):
    wordlist = text.lower().split()

    first = wordlist[0]
    second = wordlist[1]

    return first[0] == second[0]

value = myfunc('Hello world')
print(value)
```

```python
# 方法1
# def myfunc(n1, n2):
#     if n1 + n2 == 20:
#         return True
#     elif n1 == 20:
#         return True
#     elif n2 == 20:
#         return True
#     else:
#         return False

# 方法2
def myfunc(n1, n2):
    return (n1 + n2) == 20 or n1 == 20 or n2 == 20

value1 = myfunc(20, 10)
value2 = myfunc(12, 8)
value3 = myfunc(2, 3)

print(value1, value2, value3)
```
