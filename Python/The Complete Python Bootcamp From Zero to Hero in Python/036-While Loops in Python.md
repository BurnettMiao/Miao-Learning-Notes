### 36. While Loops in Python

```python
x = 0

while x < 5:
    print(f'The current value of x is {x}')
    #x = x + 1
    x += 1
else:
    print('X IS NOT LESS THAN 5')
```

#### break, continue, pass

We can use break, continue, and pass statements in our loops to add additional functionality for various cases. The three statements are define by:

- **break**: Breaks out of the current closest enclosing loop.
- **continue**: Goes to the top of the closest enclosing loop.
- **pass**: Does nothing at all.

```python
mystring = 'Sammy'

for letter in mystring:
    if letter == 'a':
        continue
    print(letter)
```

```python
mystring = 'Sammy'

for letter in mystring:
    if letter == 'a':
        break
    print(letter)
```

```python
x = 0
while x < 5:
    if x == 2:
        break
    print(x)
    x += 1
```
