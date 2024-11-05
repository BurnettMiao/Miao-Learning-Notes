sales.py

```python
def calc_tax():
    pass

def calc_shipping():
    pass
```

app.py

```python
# 方法一
from sales import calc_shipping, calc_tax

calc_shipping()
calc_tax()

# 方法二
import sales

sales.calc_shipping()
```
