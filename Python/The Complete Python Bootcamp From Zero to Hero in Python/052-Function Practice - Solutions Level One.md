### 52. Function Practice - Solutions Level One

```python
# 方法1
# def myfunc(name):
#     first_letter = name[0]
#     inbetween = name[1:3]
#     fourth_letter = name[3]
#     rest = name[4:]
#
#     return first_letter.upper() + inbetween + fourth_letter.upper() + rest

# 方法2
def old_macdonald(name):
    first_half = name[:3]
    second_half = name[3:]

    return first_half.capitalize() + second_half.capitalize()

value = old_macdonald('macdonald')
print(value)
```

如何使用 .join()

```python
mylist = ['a', 'b', 'c']
test = '--'.join(mylist)
print(test)
```

```python
def master_yoda(text):
    wordlist = text.split()
    reverse_word_list = wordlist[::-1]
    return ' '.join(reverse_word_list)

value1 = master_yoda('I am home')
value2 = master_yoda('We are ready')

print(value1)
print(value2)
```

```python
def almost_there(n):
    return (abs(100-n) <= 10) or (abs(200-n) <= 10)

value1 = almost_there(90)
value2 = almost_there(104)
value3 = almost_there(150)
value4 = almost_there(209)

print(value1, value2, value3, value4)
```
