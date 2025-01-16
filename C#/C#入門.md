```csharp
// 常見資料型態與變數

// 字串 string "小白好帥"
// 字元 char 'a'
// 整數 int 160
// 浮點數 double 160.5
// 布林值 bool true false

string name = "Bob";
char sex = 'M';
int age = 10;
double height = 180.3;
bool is_male = true;

System.Console.WriteLine("有一個人叫" + name);

name = "小黃";

System.Console.WriteLine(name + "今年87歲");
System.Console.WriteLine(name + "身高187公分");
System.Console.WriteLine(name + "討厭自己89歲");
```

```csharp
// 字串常見的用法

// \n 換行
System.Console.WriteLine("Hello \nMr.White");

// \"
System.Console.WriteLine("Hello\" Mr.White");

// 字串長度
string phrase = "Hello Mr.White";
System.Console.WriteLine(phrase.Length);

// 大寫小寫
System.Console.WriteLine(phrase.ToUpper());
System.Console.WriteLine(phrase.ToLower());

// 是否含有以下字串
System.Console.WriteLine(phrase.Contains("Hello"));

// 回傳指定位置的值
System.Console.WriteLine(phrase[1]);

// 從值去找位置(只回傳最先找到的，找不到則回傳-1)
System.Console.WriteLine(phrase.IndexOf('H'));

// 切割字串，數字以前的都會被去掉，回傳 "llo Mr.White"
System.Console.WriteLine(phrase.Substring(2));
// 回傳 "Mr."
System.Console.WriteLine(phrase.Substring(6, 3));
```

```csharp
// 數字常見的用法(整數 浮點數)
```
