## Python for Beginners – Full Course [Programming Tutorial]-01

[YT 頻道-freeCodeCamp](https://www.youtube.com/watch?v=eWRfhZUzrAc&t=1071s)
[replit 線上編輯器](https://replit.com/@BurnettMiao/day-1-printing-start)

---

- 使用到 Variables, Function, Dictionaries, User Input, Libraries, Lists, Methods

```python
import random

def get_choice():
    player_choice = input('Enter a choice (rock, paper, scissors: ')
    options = ['rock', 'paper', 'scissors']
    computer_choice = random.choice(options)
    choices = {'player': player_choice, 'computer': computer_choice}

    return choices

choices = get_choice()
print(choices)
```

- RPS - f-strings

```python
age = 25
print(f"Jim is {age} years old.")
```

- if else 判斷式

```python
age = 21

if age > 18:
    print('You are an adult.')
elif age > 12:
    print('You are a teenager.')
elif age > 1:
    print('You are a child.')
else:
    print('You are a baby.')
```

- access dictionary

```python
choices = {"player": "rock", "computer": "paper"}
p_choice = choices["player"]
c_choice = choices["computer"]
print(p_choice, c_choice)
```

- 練習一 剪刀石頭布

```python
import random

def get_choice():
    player_choice = input('Enter a choice (rock, paper, scissors): ')
    options = ['rock', 'paper', 'scissors']
    computer_choice = random.choice(options)
    choices = {'player': player_choice, 'computer': computer_choice}

    return choices

def check_win(player, computer):
    # print('You chose ' + player + ', computer chose ' + computer)
    print(f"You chose {player}, computer chose {computer}")
    if player == computer:
        return "It's a tie!"
    elif player == 'rock':
        if computer == 'scissors':
            return 'Rock smashes scissors! You win!'
        else:
            return 'Paper covers rock! You lose!'
    elif player == 'paper':
        if computer == 'rock':
            return 'Paper covers rock! You win!'
        else:
            return 'Scissors cuts paper! You lose!'
    elif player == 'scissors':
        if computer == 'paper':
            return 'Scissors cuts paper! You win!'
        else:
            return 'Rock smashes scissors! You lose!'

choices = get_choice()
result = check_win(choices['player'], choices['computer'])
print(result)
```
