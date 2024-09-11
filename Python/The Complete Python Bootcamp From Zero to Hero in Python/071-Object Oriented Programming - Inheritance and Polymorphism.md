### 071-Object Oriented Programming - Inheritance and Polymorphism

Inheritance

```python
class Animal():

    def __init__(self):
        print("ANIMAL CREATED")

    def who_am_i(self):
        print("I am an animal")

    def eat(self):
        print("I am eating")


class Dog(Animal):

    def __init__(self):
        Animal.__init__(self)
        print("Dog Created")

    # 可以覆蓋掉之前繼承的但命名須要一樣
    def who_am_i(self):
        print("I am a dog!")

    def eat(self):
        print("I am a dog and eating")

    def bark(sef):
        print("WOOF!!!")


mydog = Dog()
mydog.eat()
mydog.who_am_i()
mydog.bark()
```

Polymorphism
方法一

```python
class Dog():

    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name + " says woof!"


class Cat():
    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name + " says meow!"


niko = Dog("niko")
felix = Cat("felix")

print(niko.speak())
print(felix.speak())


for pet in [niko, felix]:
    print(type(pet))
    print(pet.speak())


# Dog() 與 Cat() 有共同的.speak()
def pet_speak(pet):
    print(pet.speak())


pet_speak(niko)
pet_speak(felix)
```

方法二

```python
class Animal():
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement this abstract method")


class Dog(Animal):

    def speak(self):
        return self.name + " says woof!!"


class Dog(Animal):

    def speak(self):
        return self.name + " says meow!!"


fido = Dog("Fido")
isis = Cat("Isis")

print(fido.speak())
print(isis.speak())
```
