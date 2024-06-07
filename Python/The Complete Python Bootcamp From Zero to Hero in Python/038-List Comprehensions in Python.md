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

#其他範例 加入相乘要素
mylist = [num**2 for num in range(0, 11)]
mylist

#其他範例 加入 if 判斷式
mylist = [x for x in range(0, 11) if x%2==0]
mylist

#其他範例 溫度轉換練習
celcius = [0, 10, 20, 34.5]
fahrenheit = [((9/5)*temp +32) for temp in celcius]
fahrenheit

#其他範例 溫度轉換練習另一種寫法
celcius = [0, 10, 20, 34.5]
fahrenheit = []
for temp in celcius:
    fahrenheit.append((9/5)*temp + 32)
fahrenheit

# 使用 if else (不建議)
results = [x if x%2==0 else 'ODD' for x in range(0, 11)]
results

# 巢狀 for loop
mylist = []

for x in [2, 4, 6]:
    for y in [100, 200, 300]:
        mylist.append(x*y)
mylist
```
