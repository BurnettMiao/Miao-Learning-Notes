### 064-067-Milestone Project - 2

```python
from IPython.display import clear_output
import random


def display_board(board):
    clear_output()
    print(board[1]+"|"+board[2]+"|"+board[3])
    print(board[4]+"|"+board[5]+"|"+board[6])
    print(board[7]+"|"+board[8]+"|"+board[9])


def player_input():

    '''
    OUTPUT = (Play 1 marker, Player 2 marker)
    '''

    marker = ''

    while not (marker == 'X' or marker == 'O'):
        marker = input('Player1: Choose X or O: ').upper()

    if marker == 'X':
        return ('X', 'O')
    else:
        return ('O', 'X')


def place_marker(board, marker, position):

    board[position] = marker


def win_check(board, mark):

    # WIN TIC TAC TOE?
    return (board[1] == board[2] == board[3] == mark) or(board[4] == board[5] == board[6] == mark) or (board[7] == board[8] == board[9] == mark) or(board[1] == board[4] == board[7] == mark) or(board[2] == board[5] == board[8] == mark) or(board[3] == board[6] == board[9] == mark) or(board[1] == board[5] == board[9] == mark) or(board[3] == board[5] == board[7] == mark)


def choose_first():

    flip = random.randint(0, 1)

    if flip == 0:
        return 'Player 1'
    else:
        return 'Player 2'


def space_check(board, position):

    return board[position] == ' '


def full_board_check(board):

    for i in range(1, 10):
        if space_check(board, i):
            return False

    # BOARD IS FULL IS WE RETURN TRUE
    return True


def player_choice(board):

    position = 0

    while position not in [1, 2, 3, 4, 5, 6, 7, 8, 9] or not space_check(board, position):
        position = int(input("Choose a position: (1-9) "))

    return position


def replay():
    choice = input("Play again? Enter Yes or No")

    return choice == 'Yes'


# WHILE LOOP TO KEEP RUNNING THE GAME
print("Welcome to Tic TAC TOE")

while True:
    # PLAY THE GAME

    ## SET EVERYTHING UP (BOARD, WHOS, FIRST, CHOOSE MARKES X, O)
    the_board = [' ']*10
    player1_marker, player2_marker = player_input()

    turn = choose_first()
    print(turn + ' will go first')

    play_game = input('Ready to play? y or n? ')

    if play_game == 'y':
        game_on = True
    else:
        game_on = False

    ## GAME PLAY
    while game_on:

        if turn == "Player 1":
            # Show the board
            display_board(the_board)
            # Choose a position
            position = player_choice(the_board)
            # Place the marker on the position
            place_marker(the_board, player1_marker, position)
            # Check if they won
            if win_check(the_board, player1_marker):
                display_board(the_board)
                print('PLAY 1 HAS WON!!')
                game_on = False
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print("TIE GAME!!")
                    game_on = False
                else:
                    turn = 'Player 2'

        else:
            # Show the board
            display_board(the_board)
            # Choose a position
            position = player_choice(the_board)
            # Place the marker on the position
            place_marker(the_board, player2_marker, position)
            # Check if they won
            if win_check(the_board, player2_marker):
                display_board(the_board)
                print('PLAY 2 HAS WON!!')
                game_on = False
            else:
                if full_board_check(the_board):
                    display_board(the_board)
                    print("TIE GAME!!")
                    game_on = False
                else:
                    turn = 'Player 1'


    if not replay():
        break


# BREAK OUT OF THE WHILE LOOP ON replay()
```
