```python
letters = ['a', 'b', 'c']

print(letters.index('a'))

print(letters.count('d')) # 如果沒有會得到 0

print(letters.index('d')) # 會得到 ValueError，故使用以下方式避免得到 error
if 'd' in letters:
    print(letters.index('d'))
```
