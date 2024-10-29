```python
point = {"x": 1, "y": 2}

# 建議創建dictionary寫法
point = dict(x=1, y=2)

print(point["x"])

# 更改x的值
point["x"] = 10
# 新增key與值
point["z"] = 20
print(point)

# 找是否有這個key可以用
if "a" in point:
    print(point["a"])

# 可以使用 get() methods 假如不存在則會出現 None
print(point.get("a"))
# 也可以設定找不到之後回傳的預設值(這邊設為0)
print(point.get("a", 0))

# 刪除可以使用 del
del point["x"]
print(point)

# 也可以使用loop方式讀取
for key in point:
    print(key, point[key])

# 也可使用.items()來得到tuple，故可以unpack
for key, value in point.items():
    print(key, value)
```
