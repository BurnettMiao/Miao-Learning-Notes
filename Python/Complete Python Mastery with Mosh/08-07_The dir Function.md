```
ecommerce/
    __init__.py

    shopping/
      __init__.py
      sales.py

app.py
```

In Python, the dir() function is a built-in function used to list the attributes (methods, properties, and other members) of an object.

```python
from ecommerce.shopping import sales

print(dir(sales))
print(sales.__name__)
print(sales.__package__)
print(sales.__file__)
```
