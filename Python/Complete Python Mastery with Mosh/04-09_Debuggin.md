```python
def multiply(*numbers):
    total = 1
    for number in numbers:
        total *= number
    return total

print('Start')
print(multiply(1, 2, 3))
```

點擊左側 Run and Debug 的圖示(快捷鍵: Ctrl+Shift+D)
點擊面版裡面的 To customize Run and Debug(create a lunch.json file)
選擇 Python Debugger
選擇 Python File(Debug the currently active Python file)
F9: 設定 breakpoint，再按一次即可取消
F5: To run the application up to this point
Shift+F5: Stop the debugger
F10: Execute this program line by line and see exactly what happens at run time
F11: Step into this multiply function what was going on here，接著可以再執行 F10
Shift+F11: Immediately step out of function
左側面板則可以顯示目前執行的狀態
