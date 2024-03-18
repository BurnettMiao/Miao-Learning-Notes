## Python for Beginners – Full Course [Programming Tutorial]-02

[YT 頻道-freeCodeCamp](https://www.youtube.com/watch?v=eWRfhZUzrAc&t=1071s)
[replit 線上編輯器](https://replit.com/@BurnettMiao/day-1-printing-start)
[Python 官方網站](https://www.python.org/)

---

- Data Types
  [Data Types - W3Schools](https://www.w3schools.com/python/python_datatypes.asp)
  [Data Types - GeeksforGeeks](https://www.geeksforgeeks.org/python-data-types/)

  - 使用 type() 即可以確認 variables 類型
  - 使用 isinstance(age, int) 判斷 True or False

  ###### complex for complex numbers

  ###### bool for booleans

  ###### list for lists

  ###### tuple for tuples

  ###### range for ranges

  ###### dict for dictionaries

  ###### set for sets

```python
name = "burnett"
print(type(name)) # 會顯示 <class 'str'>
print(type(name) == str) # 會顯示 True
print(isinstance(name, str)) # 會顯示 True

age = 2
print(isinstance(age, int)) # 會顯示 True
print(isinstance(age, float)) # 會顯示 False

age = float(3) # 強制轉成 float
print(isinstance(age, float)) # 會顯示 True

age = int("20") # 強制轉成 int
print(isinstance(age, int)) # 會顯示 True

number = "20"
age = int(number) # pass variab 也是可行
print(isinstance(age, int)) # 會顯示 True
```

- Operators
  Arithmetic Operators

```python
1 + 1 # 2
2 - 1 # 1
2 * 2 # 4
4 / 2 # 2
4 % 3 # 1
4 ** 2 # 16
4 // 2 # 2

print("Scamp" + " is a good dog.") # + 可以用來連接字串

age = 8
age += 8 # age = age + 8
age -= 8 # age = age - 8
age *= 8 # age = age * 8
age /= 8 # age = age / 8
print(age) # 16
```

Comparison Operators

```python
a = 1
b = 2

a == b # False
a != b # True
a > b # False
a <= b # True
```

Comparison Operators - Boolean Operators

```python
conditional1 = True
conditional2 = False

not conditional1 # False
conditional1 and conditional2 # False
conditional1 or conditional2 # True

print(0 or 1) # 1
print(False or 'hey') # 'hey'
print('hi' or 'hey') # 'hi'
print([] or False) # 'False'
print(False or []) # []

print(0 and 1) ## 0
print(1 and 0) ## 0
print(False and 'hey') # False
print('hi' and 'hey') # 'hey'
print([] and False) # []
print(False and []) # False
```

Comparison Operators - Bitwise Operators

```python
& performs binary AND
| performs binary OR
^ performs a binary XOR operation
~ performs a binary NOT operation
<< shift left operation
>> shift right operation
```

Comparison Operators - is & in Operators

```python
is
in
```

Comparison Operators - Ternary Operator

```python
# 較複雜寫法
def is_adult(age):
  if age > 18:
    return True
  else:
    return False

# 使用 Ternary Operator 簡潔寫法
def is_adult1(age):
  return True if age > 18 else False
```

Strings

```python
name = 'Burnett'
name += ' is my name'
print(name)
```

```python
print(""" Burnett is

37

years old
""")
```

String Methods

isalpha(), isalnum(), isdecimal(), lower(), islower(), upper(), isupper(), title(), startsswitch(), endswitch(), replace(), split(), strip(), join(), find()

```python
print('burnett'.upper()) # BURNETT
print('BURNETT'.lower()) # burnett
print('bEAu person'.title()) # Beau Person
print('bEAu person'.islower()) # False

name = "Beau"
print(name.lower()) # beau 只會影響有下 lower() 的 methods，
print(name) # Beau  # 所以原始的name 不會改變
print('au' in name) # True
print(len(name)) # 4
```

Escaping Characters

```python
name = "Be\"au"
print(name) # Be"au
name = 'Be\nau' # \n 換行意思
```

String Characters & Slicing
[開始, 不包含] 如以下範例

```python
name = 'Beau is cool'
print(name[1]) # e
print(name[1:2]) # e
print(name[1:3]) # ea
print(name[:3]) # Bea
print(name[1:]) # eau is cool
```

Booleans

```python
done = True
# done False

print(type(done) == bool) # True

if done:
  print('yes')
else:
  print('no')
```

```python
book_1_read = True
book_2_read = False
read_any_book = any([book_1_read, book_2_read])
print(read_any_book) # True
```

```python
ingredients_purchased = True
meal_cooked = False
ready_to_serve = all([ingredients_purchased, meal_cooked])
print(ready_to_serve) # False
```

Number Data Types

```python
num1 = 2 + 3j
num2 = complex(2, 3)

print(num2.real, num2.imag)
```

Built-in Functions

```python
print(abs(5.5)) # 5.5
print(abs(-5.5)) # 5.5
print(round(-5.5)) # 6 (round => 四捨五入)
print(round(5.49, 1)) # 5.5
```

Enums

```python
from enum import Enum

class State(Enum):
  INACTIVE = 0
  ACTIVE = 1

print(State.ACTIVE.value) #`1
print(State(1)) # State.ACTIVE
print(State['ACTIVE']) # State.ACTIVE
print(State['ACTIVE'].value) # 1
print(list(State)) # [<State.INACTIVE: 0>, <State.ACTIVE: 1>]
print(len(State)) # 2
```

User Input

```python
age = input('What is your age? ')
print('Your age is ' + age)
```

Control Statements

```python
condition = True

if condition == True:
  print('The condition')
  print('was tue')
else:
  print('The condition')
  print('was false')
```

```python
name = 'Roger'

if name == 'Roger':
  print('Hello Roger')
elif name == 'Syd':
  print('Hello Syd')
elif name == 'Flavio':
  print('Hello Flavio')

```

Lists
也可把 lists 定義成 []

```python
dogs = ['Roger', 1, 'Syd', True]
print('Roger' in dogs) # True
print('Beau' in dogs) # False
print(dos[0]) # 'Roger'

dogs[2] = 'Beau'
print(dogs) # ['Roger', 1, 'Syd', True]
print(dogs[-1]) # True
print(dogs[1:3]) # [1, 'Beau']
print(dogs[1:]) #
print(dogs[:3]) #
print(len(dog)) # 4

# add item to lists
dogs.append("Judah")
dogs.extend(['Judah', 5])
dogs += ['Judah', 5]

# remove item
dogs.remove('Roger')

# pop() 移除最後一個 item
print(dogs.pop())

# insert() add item in middle
items = ['Roger', 1, 'Syd', True, 'Quincy', 7]
items.insert(2, 'Test')
print(items) # ['Roger', 1, 'Test', 'Syd', True, 'Quincy', 7]

# add multiple elements in certain place
items[1:1] = ['Test1', 'Test2']
print(items)

# Sorting Lists
items = ['Roger', 'Syd', 'Beau', 'Quincy']
items.sort()
print(items) # ['Beau', 'Quincy', 'Roger', 'Syd']
```
