### 28. I/O with Basic Files in Python

指令: pwd 全名為“print working directory”，也就是當前的工作目錄。

1. 在 Pyhton 建立一個.txt 檔

```python
%%writefile myfile.txt
Hello this is a text file
this is the second line
this is the third line
```

2. Python 開啟檔案 並 讀取內容
   如果找不到檔案或是路徑不對則會跳出 (FileNotFoundError)，
   使用.read()之後須再使用.seek(0)來 reset cursor，不然會讀不到檔案內容

```python
myfile = open('myfile.txt')
myfile.read()
myfile.seek(0)
```

3. readlines() 則可以變成 list 可以被 loop，之後須再使用.seek(0)來 reset cursor，不然會讀不到檔案內容

```python
myfile.readlines()
```

4. 使用 .close() 來關閉檔案

```python
myfile.close()
```

5. 使用 with open as 的方式就不用考慮到檔案關閉的問題(以下 my_new_file 可自訂義)

```python
with open('myfile.txt') as my_new_file:
    content = my_new_file.read()
```

```python
content
```

#### Reading, Writing, Appending Modes

- **mode='r'**, is read only
- **mode='w'**, is write only (will overwrite files or create new!)
- **mode='a'** is append only (will add on to files)
- **mode='r+'**, is reading and writing
- **mode='w+'**, is writing and reading (Overwrites exiting files or creates a new file!)

```python
%%writefile my_new_file.txt
ONE ON FIRST
TWO ON SECOND
THREE ON THIRD
```

```python
with open('my_new_file.txt', mode='r') as f:
    print(f.read())
```

寫入 FOUR ON FOURTH，如要換行可加上 \nFOUR ON FOURTH

```python
with open('my_new_file.txt', mode='a') as f:
    f.write('FOUR ON FOURTH')
```

```python
with open('my_new_file.txt', mode='r') as f:
    print(f.read())
```

**使用 mode='w'** 如檔名不存在 python 會自動建立

```python
with open('new.txt', mode='w') as f:
    f.write('I CREATED THIS FILE!')
```
