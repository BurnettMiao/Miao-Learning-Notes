### 064-067-Milestone Project - 2

```python
from IPython.display import clear_output

def display_board(board):
    clear_output()
    print(board[1]+"|"+board[2]+"|"+board[3])
    print(board[4]+"|"+board[5]+"|"+board[6])
    print(board[7]+"|"+board[8]+"|"+board[9])


# test_board = ['#', 'X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X']
test_board = [' ']*10
display_board(test_board)


def player_input():

    marker = ''

    # KEEP ASKING PLAYER 1 TO CHOOSE X or O
    while marker != 'X' and marker != 'O':
        marker = input("Player 1, choose X or O: ")


    # ASSIGN PLAYER 2, the opposite marker
    player1 = marker

    if player1 == 'X':
        player2 = 'O'
    else:
        player2 = 'X'

    return (player1, player2)



```
