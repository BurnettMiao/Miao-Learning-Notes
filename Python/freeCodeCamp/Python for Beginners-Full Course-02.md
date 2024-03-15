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

```python
print('burnett'.upper()) # BURNETT
print('BURNETT'.lower()) # burnett
```
