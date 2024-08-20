### 059-067-Milestone Project - 1

```python
game_list = [0,1,2]


def user_choice():
    # VARIABLES

    # Initial
    choice = 'WRONG'
    acceptable_range = range(0, 10)
    within_range = False

    # TOW CONDITIONS TO CHECK
    # DIGIT OR WITHIN_RANGE==FALSE
    while choice.isdigit() == False or within_range==False:

        choice = input("Please enter a number (0-10): ")

        # DIGIT CHECK
        if choice.isdigit() == False:
            print("Sorry that is not a digit!")

        # RANGE CHECK
        if choice.isdigit() == True:
            if int(choice) in acceptable_range:
                within_range = True
            else:
                print("Sorry, you are out of acceptable range (0-10)")
                within_range = False

    return int(choice)


def display_game(game_list):
    print("Here is the current list")
    print(game_list)


def position_choice():

    choice = 'wrong'

    while choice not in ['0', '1', '2']:

        choice = input("Pick a position (0, 1, 2): ")

        if choice not in ['0', '1', '2']:
            print("Sorry, invalid choice! ")

    return int(choice)


def replacement_choice(game_list, position):

    user_placement = input("Type a string to place at position: ")

    game_list[position] = user_placement

    return game_list


def gameon_choice():

    choice = 'wrong'

    while choice not in ['Y', 'N']:

        choice = input("Keep playing? (Y or N) ")

        if choice not in ['Y', 'N']:
            print("Sorry, I dont understand, please choose Y or N ")

    if choice == "Y":
        return True
    else:
        return False


# 程式執行
game_on = True
game_list = [0, 1, 2]

while game_on:

    display_game(game_list)

    position = position_choice()

    game_list = replacement_choice(game_list, position)

    display_game(game_list)

    game_on = gameon_choice()
```

**tips**

```python
result = "WRONG VALUE"
acceptable_values = [0, 1, 2]

result in acceptable_values
# 得到 False

result not in acceptable_values
# 得到 True
```
