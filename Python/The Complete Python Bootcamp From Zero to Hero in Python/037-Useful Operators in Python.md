### 37. Useful Operators in Python

**range()**
print 0-9

```python
for num in range(10):
    print(num)
```

不包含 10

```python
for num in range(3, 10):
    print(num)
```

不包含 10 隔 2 print(num)

```python
for num in range(0, 10, 2):
    print(num)
```

創造出一個 list

```python
list(range(0, 11, 2))
```

**enumerate()**

```python
index_count = 0

for letter in 'abcde':
    print(f'At index {index_count} the letter is {letter}')
    index_count += 1

# 等同
index_count = 0
word = 'abcde'

for letter in word:
    print(word[index_count])
    index_count += 1

```

```python
word = 'abcde'

for item in enumerate(word):
    print(item)

#變成 tuples
# (0, 'a')
# (1, 'b')
# (2, 'c')
# (3, 'd')
# (4, 'e')
```

```python
word = 'abcde'

for index, letter in enumerate(word):
    print(index)
    print(letter)
    print('\n')
```

**zip()**

```python
mylist1 = [1, 2, 3]
mylist2 = ['a', 'b', 'c']

for item in zip(mylist1, mylist2):
    print(item)
```

```python
mylist1 = [1, 2, 3, 4, 5, 6]
mylist2 = ['a', 'b', 'c']
mylist3 = [100, 200, 300]

for item in zip(mylist1, mylist2, mylist3):
    print(item)
```

```python
mylist1 = [1, 2, 3]
mylist2 = ['a', 'b', 'c']

list(zip(mylist1, mylist2))
```

```python
mylist1 = [1, 2, 3 ]
mylist2 = ['a', 'b', 'c']
mylist3 = [100, 200, 300]

for a,b,c in zip(mylist1, mylist2, mylist3):
    print(a)
    print(b)
    print(c)
```

**in**

```python
'x' in [1, 2, 3]
# False

'x' in ['x', 'y', 'z']
# True

'x' in 'a world'
# True

'mykey' in {'mykey': 345}
# True

d = {'mykey': 345}

345 in d.values()
# True
345 in d.keys()
# False
```

**min(), max()**

```python
mylist = [10, 20, 30, 40, 100]
min(mylist)
max(mylist)
```

**random**
shuffle()

```python
from random import shuffle
# shuffle 不會 return 任何東西

mylist = [1,2,3,4,5,6,7,8,9,10]
shuffle(mylist)
print(mylist)
```

randint()

```python
from random import randint
# randint 隨機回傳區間內整數

randint(0, 100)
```

**input()**

```python
input('Enter a number here: ')
# input 回傳的都是str，所以要變成其他類型需要做轉型的動作
```
