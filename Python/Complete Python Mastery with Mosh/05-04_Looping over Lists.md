```python
letters = ['a', 'b', 'c']

for letter in letters:
    print(letter)

# 如果想取得 index 使用 enumerate()，則會得到 tuple (0, 'a') (1, 'b') (2, 'c')，所以可以 unpacking
for index, letter in enumerate(letters):
    print(index, letter)
```
