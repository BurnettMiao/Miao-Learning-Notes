```python
# try:
#     age = int(input("Age: "))
# except ValueError:
#     print("You didn't enter a valid age.")
# print("Execution continues.")


try:
    age = int(input("Age: "))
except ValueError as e:
    print("You didn't enter a valid age.")
    print(e)
    print(type(e))
else:
    print("No exception were thrown.")
print("Execution continues.")
```
