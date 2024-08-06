### 56. Nested Statements and Scope

```python
# python LEGB Rule:
# 練習一
name = "THIS IS A GLOBAL STRING"

def greet():
    name = 'Sammy'
    def hello():
        print('Hello ' + name)
    hello()
greet()

# 練習二
x = 50
def func(x):
    print(f'X is {x}')

    x = 200
    print(f'I JUST LOCALLY CHANGED X TO {x}')
func(x)

# 練習三
x = 50
def globalTest():
    global x
    print(f'X is {x}')
    # LOCAL REASSIGNMENT ON A GLOBAL VARIABLE!
    x = 'NEW VALUE'
    print(f'I JUST LOCALLY CHANGED GLOBAL X TO {x}')
globalTest()
print(x)
```
