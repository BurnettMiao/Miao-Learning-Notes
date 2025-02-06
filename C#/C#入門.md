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

// 只要有一邊數字是有浮點數，那計算出來的結果就會是浮點數，如果都是整數就只會回傳都是整數
System.Console.WriteLine(5.0/2);

// 絕對值
System.Console.WriteLine(System.Math.Abs(-10));

// 次方 (範例為2的3次方)
System.Console.WriteLine(System.Math.Pow(2, 3));

// 開根號
System.Console.WriteLine(System.Math.Sqrt(64));

// 數字大小比較
System.Console.WriteLine(System.Math.Max(2, 100));
System.Console.WriteLine(System.Math.Min(2, 100));

// 四捨五入
System.Console.WriteLine(System.Math.Round(3.4));
```

```csharp
// 取得用戶輸入
System.Console.Write("Enter your name: ");
string name = System.Console.ReadLine();
System.Console.Write("Enter your age: ");
string age = System.Console.ReadLine();
System.Console.WriteLine("Hello " + name + " yuor age is " + age);
```

```csharp
// 基本計算機(加法)
System.Console.Write("Input first Number: ");
double num1 = System.Convert.ToDouble(System.Console.ReadLine());
System.Console.Write("Input Second Number: ");
double num2 = System.Convert.ToDouble(System.Console.ReadLine());
System.Console.WriteLine(num1 + num2);
```

```csharp
// Array 陣列
int[] scores = {50, 60, 70, 30, 20};

scores[0] = 60;
System.Console.WriteLine(scores[0]);
System.Console.WriteLine(scores[1]);
System.Console.WriteLine(scores[2]);
System.Console.WriteLine(scores[3]);
System.Console.WriteLine(scores[4]);

// 如果還不知道陣列要放什麼，可以先創一個空陣列
// 以下表示創建phones這個陣列可以放10個值
string[] phones = new string[10];

phones[0] = "0123456789";
phones[1] = "088888888";

System.Console.WriteLine(phones[0]);
System.Console.WriteLine(phones[1]);
```

```csharp
// if 判斷句

bool hungry = false;

if(hungry)
{
    System.Console.WriteLine("Eat something.");
}
else
{
    System.Console.WriteLine("Go to exercise.");
}

// if, else if, else
int score = 90;

if (score == 100)
{
    System.Console.WriteLine("you get 1000.");
}
else if (score >= 80)
{
    System.Console.WriteLine("you get 500.");
}
else if (score >= 60)
{
    System.Console.WriteLine("you get 500.");
}
else
{
    System.Console.WriteLine("i get 300.");
}

// &&(且) or ||(或)
int testScore = 90;
bool rain = true;

if (testScore == 100 && rain)
{
     System.Console.WriteLine("you get 1000.");
}
else
{
    System.Console.WriteLine("i get 100.");
}


if (testScore == 100 || rain)
{
     System.Console.WriteLine("you get 1000.");
}
else
{
    System.Console.WriteLine("i get 100.");
}

// != 不等於
if (testScore != 100 || !rain)
{
     System.Console.WriteLine("you get 1000.");
}
else
{
    System.Console.WriteLine("i get 100.");
}
```

```csharp
// while 迴圈
int num = 1;
while (num <= 5)
{
    System.Console.WriteLine(num);
    num += 1;
}

// do while
int num1 = 6;
do
{
    System.Console.WriteLine(num);
    num1 += 1;
}
while (num1 <= 5);
```

```csharp
// 猜數字遊戲

int secret_num = 66;
int guess;
int guess_count = 0;
int guess_limit = 3;
bool win = false;

do
{
    System.Console.Write("enter guess number: ");
    guess = System.Convert.ToInt32(System.Console.ReadLine());
    guess_count++;

    if(guess > secret_num)
    {
        System.Console.WriteLine("lower");
    }
    else if (guess < secret_num)
    {
        System.Console.WriteLine("higher");
    }
    else
    {
        System.Console.WriteLine("congratulations");
        win = true;
    }
}
while(guess != secret_num && guess_count < guess_limit);

if (!win)
{
    System.Console.WriteLine("you lost");
}
else
{
    System.Console.WriteLine("you win");
}
```

```csharp
// for 迴圈
for (int i = 1; i <= 5; i++) {
    System.Console.WriteLine(i);
}

// 讀取陣列的值
int[] nums = {15, 1561, 6, 2, 8156, 156, 626};

for (int i = 0; i < nums.Length; i++) {
    System.Console.WriteLine(nums[i]);
}
```

```csharp
// 2維陣列
int[,] nums = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

System.Console.WriteLine(nums[0, 0]); // 1
System.Console.WriteLine(nums[1, 1]); // 5

// 創建空的2維陣列 -----
// 3 row, 4 column
int[,] num = new int[3, 4];
// 填入想要的值
num[0, 0] = 3;
num[0, 1] = 4;

// 假如想要創建3維陣列
int[,,] num1 = new int[3, 4, 3];
// 4維, 5維其他依此類推
```

```csharp
// class 類別, object 物件

// 建立一個 Person.cs 檔案
class Person
{
  public double height;
  public int age;
  public string name;
}

// 於 Program.cs 創建實體
// 模板名稱 變數名字 = new 模板名稱()
// 由模板所建立的都稱為一個object (person1)
Person person1 = new Person();
person1.height = 170.5;
person1.age = 42;
person1.name = "Bob";
System.Console.WriteLine(person1.name);
System.Console.WriteLine(person1.age);
System.Console.WriteLine(person1.height);

Person person2 = new Person();
person2.height = 166.3;
person2.age = 30;
person2.name = "Alice";
System.Console.WriteLine(person2.name);
System.Console.WriteLine(person2.age);
System.Console.WriteLine(person2.height);
```

```csharp
// namespace(用於模板(class)分類跟管理), using

// 建立一個 Person.cs 檔案
namespace Animal
{
    class Person
    {
        public double height;
        public int age;
        public string name;
    }
}

// 於 Program.cs 創建實體
using System // 也是 namespace 模板
using Animal; // 使用使用 Animal 這個 namespace 模板

Person person1 = new Person();
person1.height = 170.5;
person1.age = 42;
person1.name = "Bob";
Console.WriteLine(person1.name);
Console.WriteLine(person1.age);
Console.WriteLine(person1.height);

Person person2 = new Person();
person2.height = 166.3;
person2.age = 30;
person2.name = "Alice";
Console.WriteLine(person2.name);
Console.WriteLine(person2.age);
Console.WriteLine(person2.height);
```
