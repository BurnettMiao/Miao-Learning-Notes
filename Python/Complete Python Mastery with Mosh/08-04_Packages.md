Python would treat the ecommerce folder as a package. So package is a container for one or more modules. In file system terms, the package is mapped to a directory and a module is mapped to a file

```
ecommerce/
    __init__.py
    sales.py

app.py
```

```python
from ecommercd.sales import calc_tax, calc_shipping

calc_tax()
calc_shipping()
```
