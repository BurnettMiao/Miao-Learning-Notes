### 38. List Comprehensions in Python

```python
mystring = 'hello'
mylist = []

for letter in mystring:
    mylist.append(letter)

mylist

# 可以改寫成
mylist = [letter for letter in mystring]
mylist

#其他範例
mylist = [num for num in range(0, 11)]
mylist
```
