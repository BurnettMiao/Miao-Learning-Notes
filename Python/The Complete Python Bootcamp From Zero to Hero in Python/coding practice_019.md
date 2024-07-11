### 編碼練習 19： Functions #10: skyline

Define a function called myfunc that takes in a string, and returns a matching string where every even letter is uppercase, and every odd letter is lowercase. Assume that the incoming string only contains letters, and don't worry about numbers, spaces or punctuation. The output string can start with either an uppercase or lowercase letter, so long as letters alternate throughout the string.

Remember, don't run the function, simply provide the definition.

To give an idea what the function would look like when tested:

```python
myfunc('Anthropomorphism')
# Output: 'aNtHrOpOmOrPhIsM'
```

Added note: this exercise requires that the function return a string. Print statements will not work here.

```python
def myfunc(string):
    transformed = ''
    for index, letter in enumerate(string):
        if index % 2 == 0:
            transformed += letter.upper()
        else:
            transformed += letter.lower()
    return transformed

test = myfunc('hello')
print(test)
```

```python
def myfunc(*args):
    result = []
    for string in args:
        print(string)
        transformed = ''
        for index, letter in enumerate(string):
            if index % 2 == 0:
                transformed += letter.upper()
            else:
                transformed += letter.lower()
        result.append(transformed)
    return result

test_string = myfunc('Hello', 'world', 'test')

for s in test_string:
    print(s)
```
