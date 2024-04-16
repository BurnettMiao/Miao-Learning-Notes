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
print(dogs[1:]) # [1, 'Syd', True]
print(dogs[:3]) # ['Roger', 1, 'Syd']
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

```

Sorting Lists

```python
# Sorting Lists
items = ['Roger', 'Syd', 'Beau', 'Quincy']
items.sort()
print(items) # ['Beau', 'Quincy', 'Roger', 'Syd']

# 使用大小寫 也會有差異
items = ['Roger', 'beau', 'Beau', 'Quincy']
items.sort()
print(items) # ['Beau', 'Quincy', 'Roger', , 'beau']

# 全部變小寫在 sort
items = ['Roger', 'bob', 'Beau', 'Quincy']
items.sort(key=str.lower)
print(items) # ['Beau', 'bob', 'Quincy', 'Roger']

# 使用 sorted
items = ['Roger', 'bob', 'Beau', 'Quincy']
print(sorted(items, key=str.lower)) # ['Beau', 'bob', 'Quincy', 'Roger']
print(items) # ['Roger', 'bob', 'Beau', 'Quincy']
```

Tuples

```python
names = ('Roger', 'Syd')

print(names[0]) # Roger
print(names.index('Roger')) # 0
print(names[-1]) # Syd
print(len(names)) # 2
print('Roger' in names) # True

names = ('Roger', 'Syd', 'Beau')
print(sorted(names)) # ['Beau', 'Roger', 'Syd']

newTuple = names + ('Tina', 'Quincy')
print(newTuple) # ('Roger', 'Syd', 'Beau', 'Tina', 'Quincy')
```

Dictionaries

```python
# Dictionaries
dog = {'name': 'Roger', 'age': 8}

print(dog['name']) # Roger

dog['name'] = 'Syd'
print(dog) # {'name': 'Syd', 'age': 8}

# 使用 get
print(dog.get('name')) # Syd
print(dog.get('color')) # None
print(dog.get('color', 'brown')) # 如果沒有 'color' return 'brown'

dog = {'name': 'Roger', 'age': 8, 'color': 'green'}
print(dog.get('color', 'brown')) # green (因為 Dictionaries 裡面有 'color': 'green')

# 使用 pop
dog = {'name': 'Roger', 'age': 8, 'color': 'green'}
print(dog.pop('name')) # Roger
print(dog) # {'age': 8, 'color': 'green'}

dog = {'name': 'Roger', 'age': 8, 'color': 'green'}
print(dog.popitem()) # ('color', 'green')
print(dog) # {'name': 'Roger', 'age': 8}

dog = {'name': 'Roger', 'age': 8, 'color': 'green'}
print('color' in dog) # True
print(dog.keys()) # dict_keys(['name', 'age', 'color'])
print(list(dog.keys())) # ['name', 'age', 'color'] (真正的 list 而不是上述的 dict_keys(['name', 'age', 'color']))
print(list(dog.values())) # ['Roger', 8, 'green']
print(list(dog.items())) # [('name', 'Roger'), ('age', 8), ('color', 'green')]
print(len(dog)) # 3

dog['favorite food'] = 'Meat'
print(dog) # {'name': 'Roger', 'age': 8, 'color': 'green', 'favorite food': 'Meat'}

del dog['color']
print(dog) # {'name': 'Roger', 'age': 8, 'favorite food': 'Meat'}

dogCopy = dog.copy()
print(dogCopy) # {'name': 'Roger', 'age': 8, 'favorite food': 'Meat'}
```

Sets

```python
# Sets
set1 = {'Roger', 'Syd'}
set2 = {'Roger'}

intersect = set1 & set2
print(intersect) # {'Roger'}

set1 = {'Roger', 'Syd'}
set2 = {'Luna'}

mod = set1 | set2
print(mod) # {'Luna', 'Roger', 'Syd'}

set1 = {'Roger', 'Syd'}
set2 = {'Roger'}

mod = set1 - set2
print(mod) # {'Syd'}

set1 = {'Roger', 'Syd'}
set2 = {'Roger'}

mod = set1 > set2
print(mod) # True
mod = set1 < set2
print(mod) # False

set1 = {'Roger', 'Syd'}
set2 = {'Roger'}
print(list(set1)) # ['Syd', 'Roger']

set1 = {'Roger', 'Syd', 'Roger'}
set2 = {'Roger'}
print(list(set1)) # ['Syd', 'Roger']
```

Functions

```python
# Functions
def hello(name="my friend"):
    print('Hello ' + name)

hello('Peter')
hello() # 如果沒有pass argument 則會使用預設 my friend

def helloA(name, age):
    print('Hello ' + name + ', you are ' + str(age) + ' years old.')
helloA('Beau', 18)

def change(value):
  value = 2

val = 1
change(val)

print(val) # 1

def change1(value):
  value['name'] = 'Syd'

val = {'name': 'beau'}
change(val)
print(val) # {'name': 'beau'}

def helloB(name):
  if not name:
    return
  print('Hello ' + name + '!')

helloB(False)
helloB("Beau") # Hello Beau!

def helloC(name):
  print('Hello ' + name + '!')
  return name, 'Beau', 8

print(helloC('Syd'))
# Hello Syd!
# ('Syd', 'Beau', 8)
```

Variable Scope

```python
# Variable Scope
age = 8

def test():
  age = 6
  print(age)

print(age) # 8
test() # 6
```

Nested Functions

```python
def talk(phrase):
  def say(word):
    print(word)

  words = phrase.split(' ')
  for word in words:
    say(word)

talk('I am going to buy the milk')

# 另一個範例
def count():
  count = 0

  def increment():
    nonlocal count
    count = count + 1
    print(count)

  increment()

count() # 1
```

Closures

```python
def counter():
  count = 0

  def increment():
    nonlocal count
    count = count + 1
    return count

  return increment

increment = counter()

print(increment()) # 1
print(increment()) # 2
print(increment()) # 3
```

Objects

```python
# Objects
age = 8

print(age.real) # 8
print(age.imag) # 0
print(age.bit_length()) # 4

items = [1, 2]
items.append(3)
items.pop()
print(id(items))
```

Loops

```python
# While Loops
condition = True
while condition == True:
  print('The condition is True')
  condition = False

count = 0
while count < 10:
  print('The while condition is True')
  count += 1
print('After the loop')

# For loops
items = [1, 2, 3, 4]
for item in items:
  print(item)

names = ['beau', 'syd', 'quincy']
for index, item in enumerate(names):
  print(index, item)

# 也可以給定一個範圍從 0 開始不包含 15
for item in range(15):
  print(item)
```

Break and Continue

```python
items = [1, 2, 3, 4]

for item in items:
  if item == 2:
    continue
  print(item)

for item in items:
  if item == 2:
    break
  print(item)
```

Classes

```python
# Classes and 繼承
class Animal:
  def walk(self):
    print('Walking...')

class Dog(Animal):
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def bark(self):
    print('woof!')

roger = Dog('Roger', 8)

print(type(roger)) # <class '__main__.Dog'>
print(roger.name) # Roger
print(roger.age) # 8
roger.bark() # woof!
roger.walk() # Walking...
```

Modules

```python
# dog.py 裡面的內容
def bark():
  print('woof!')
```

```python
# 創建一個lib資料夾裡面有 __init__.py 檔案，並且把所有 modules 放在一起，創建一個 dog.py的檔案

# 所有dog.py的東西都會一起進來
# import dog
# dog.bark() # woof!

# 只進來bark
# from lib.dog import bark
# bark() # woof!

# 如果有資料夾放很多modules只進來dog.py
# from lib import dog
# dog.bark() # woof!

# 如果有資料夾放很多modules且只進來dog.py的bark
# from lib.dog import bark
# bark() # woof!

# Python standard library import
# import math
# print(math.sqrt(4)) #2.0

from math import sqrt
print(sqrt(4)) # 2.0
```

Arguments from Command Line

```python
# Accepting Arguments

# import sys

# name = sys.argv[1]

# 在 Terminal 輸入 python test-01.py beau 39

#print(sys.argv) # ['test-01.py', 'beau', '39']
#print('Hello ' + name) # Hello beau

import argparse

parser = argparse.ArgumentParser(
  description = 'This program prints the name of my dogs'
)

parser.add_argument('-c', '--color', metavar='color', required=True, choices={'red', 'yellow'}, help='the color to search for')

args = parser.parse_args()

print(args.color)
```

Lambda Functions

```python
# Lambda Functions
lambda num : num * 2

multiply = lambda a, b : a * b

print(multiply(2, 4)) # 8
```

Map, Filter, Reduce

```python
# map()
# numbers = [1, 2, 3]

# def double(a):
#   return a * 2

# result = map(double, numbers)

# print(list(result)) # [2, 4, 6]

# 或是

# numbers = [1, 2, 3]

# double = lambda a : a * 2

# result = map(double, numbers)

# print(list(result)) # [2, 4, 6]

# 或是

numbers = [1, 2, 3]

result = map(lambda a : a * 2, numbers)

print(list[result]) # [2, 4, 6]
```

```python
# filter()
# numbers = [1, 2, 3, 4, 5, 6]

# def isEven(n):
#   return n % 2 == 0

# result = filter(isEven, numbers)

# print(list(result)) # [2, 4, 6]

# 或是
numbers = [1, 2, 3, 4, 5, 6]

result = filter(lambda n : n % 2 == 0, numbers)

print(list(result)) # [2, 4, 6]
```

```python
# reduce()
# expenses = [
#   ('Dinner', 80), ('Car repair', 120)
# ]

# sum = 0
# for expense in expenses:
#   sum += expense[1]

# print(sum) # 200

# 或是使用 reduce
from functools import reduce
expenses = [
  ('Dinner', 80),
  ('Car repair', 120)
]

sum = reduce(lambda a, b: a[1] + b[1], expenses)

print(sum)

```
