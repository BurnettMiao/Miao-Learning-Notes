```python
letters = ['a', 'b', 'c']

# Add
letters.append('d')
letters.insert(0, '-')
print(letters)

# Remove
letters.pop() # 移除最後一個
letters.pop(0)
letters.remove('b') # 如果有很多 b 只會移除第一個，要移除很多的話只能用 loop 的方式
del letters[0:3] # delete range of item
letters.clear() # 移除全部
print(letters)
```
