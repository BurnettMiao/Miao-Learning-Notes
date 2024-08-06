### 58. Methods and Functions Homework - Solutions

```python
# 練習一
def vol(rad):
    return (4/3)*(3.14)*(rad**3)
x = vol(2)
print(x)

# 練習二
def ran_check(num,low,high):
    if num in range(low, high+1):
        print(f'{num} is in range of {low} and {high}')
    else:
        print('not in range')
ran_check(5, 2, 7)

# 練習三
# def up_low(s):
#     lowercase = 0
#     uppercase = 0
#
#     for char in s:
#         if char.isupper():
#             uppercase += 1
#         elif char.islower():
#             lowercase += 1
#         else:
#             pass
#     print(f'Original String: {s}')
#     print(f'Lowercase count: {lowercase}')
#     print(f'Uppercase count: {uppercase}')
# s = 'Hello Mr. Rogers, how are you this fine Tuesday'
# up_low(s)

def up_low(s):
    d = {'upper': 0, 'lower': 0}

    for char in s:
        if char.isupper():
            d['upper'] += 1
        elif char.islower():
            d['lower'] += 1
        else:
            pass
    print(f'Original String: {s}')
    print(f'Lowercase count: {d["lower"]}')
    print(f'Uppercase count: {d["upper"]}')

s = 'Hello Mr. Rogers, how are you this fine Tuesday'
up_low(s)

# 練習四
# def unique_list(lst):
#     return list(set(lst))
def unique_list(lst):
    seen_numbers = []
    for number in lst:
        if number not in seen_numbers:
            seen_numbers.append(number)
    return seen_numbers


x = unique_list([1,1,1,1,1,1,2,2,2,2,2,3,3,3,3,4,5])
print(x)

# 練習五
```
