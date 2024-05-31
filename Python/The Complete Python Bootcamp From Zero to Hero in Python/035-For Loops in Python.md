### 35. For Loops in Python

```python
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

for item in mylist:
    print(item)

for num in mylist:
    # Check for even
    if num % 2 == 0:
        print(f'Even Number {num}')
    else:
        print(f'Odd Number {num}')
```

數字加總

```python
mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

list_sum = 0

for num in mylist:
    list_sum = list_sum + num

print(list_sum)
```

文字 Loop

```python
mystring = 'Hello World'

for letter in mystring:
    print(letter)
```

tuple Loop

```pyton
tup = (1, 2, 3)

for item in tup:
    print(item)
```

tuple unpacking

```python
mylist = [(1,2), (3,4), (5,6), (7,8)]

len(mylist)

for (a, b) in mylist:
    print(a)
    print(b)
```

```python
mylist = [(1,2,3), (4,5,6), (7,8,9)]

for a,b,c in mylist:
    print(b)
```

**Dictionaries Loop**
只會出現 key 值

```python
d = {'k1': 1, 'k2': 2, 'k3': 3}

for item in d:
    print(item)
```

會變成 tuple 成對出現

```python
d = {'k1': 1, 'k2': 2, 'k3': 3}

for item in d.items():
    print(item)
```

只取值 (tuple unpacking)

```python
d = {'k1': 1, 'k2': 2, 'k3': 3}

for key,value in d.items():
    print(value)

# 或是

for value in d.values():
    print(value)
```
