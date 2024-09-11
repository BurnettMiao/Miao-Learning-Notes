### 070-Object Oriented Programming - Class Object Attributes and Methods

```python
class Dog():

    # CLASS OBJECT ATTRIBUTE
    # SAME FOR ANY INSTANCE OF A CLASS
    species = 'mammal'

    def __init__(self, breed, name):
        # Attribues
        # We take in the argument
        # Assign in seing self.attrubue_name
        self.breed = breed
        self.name = name

    # OPERATIONS/Actions ---> Methods
    def bark(self, number):
        print('WOOF!! My name is {} and the number is {}'.format(self.name, number))

my_dog = Dog('lab', 'Frankie')
my_dog.bark(10)
```

```python
class Circle():
    # CLASS OBJECT ATTRIBUTE
    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius
        # self.area = radius*radius*self.pi 可以寫成以下方式
        self.area = radius*radius*Circle.pi

    # METHOD
    def get_circumference(self):
        return self.radius * self.pi * 2


my_circle = Circle(30)
my_circle.pi
my_circle.radius
my_circle.get_circumference()
my_circle.area
```
