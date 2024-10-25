```python
def save_user(**user):
    print(user) #會變成dictionary
    print(user['id'])

save_user(id=1, name='John', age=22)
```
