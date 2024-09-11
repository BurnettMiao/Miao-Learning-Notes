### 069-Object Oriented Programming - Attributes and Class Keyword

```python
class Dog():
    def __init__(self, breed, name, spots):
        # Attribues
        # We take in the argument
        # Assign in seing self.attrubue_name
        self.breed = breed
        self.name = name

        # Expect boolean True/False
        self.spots = spots


my_dog = Dog(breed='lab', name='Sammy', spots=False)

my_dog.breed
my_dog.name
my_dog.spots
```
