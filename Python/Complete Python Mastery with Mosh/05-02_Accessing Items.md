letters = ['a', 'b', 'c', 'd']
print(letters[0])
print(letters[-1])

letters[0] = 'A'
print(letters)

# List Slicing 不會改變原 list

print(letters[0:3])
print(letters[:3])
print(letters[0:])

# 會拷貝一份原始的 list

print(letters[:])

# 跳過幾個 item

print(letters[::2])
numbers = list(range(20))
print(numbers)
print(numbers[::2])

# reverse list

print(numbers[::-1])
