---
menu: "学艺"
title: "CSharp"
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Crying Cat
  picture: "/assets/blog/authors/head.jpg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

- [C#](#c)
  - [IDE](#ide)
  - [Hello World](#hello-world)
  - [注释](#注释)
  - [命名规则](#命名规则)
  - [基本数据类型](#基本数据类型)
  - [强制类型转换](#强制类型转换)
  - [运算符](#运算符)
  - [判断](#判断)
  - [循环](#循环)
    - [while](#while)
    - [do-while](#do-while)
    - [for](#for)
    - [foreach](#foreach)
  - [方法/函数](#方法函数)
    - [按值传参](#按值传参)
    - [引用传参](#引用传参)
    - [输出传参](#输出传参)
  - [数组](#数组)
    - [一维数组](#一维数组)
    - [多维数组](#多维数组)
    - [交错数组](#交错数组)
    - [params](#params)
    - [Array](#array)
  - [String](#string)
  - [结构体](#结构体)
  - [枚举](#枚举)
    - [定义](#定义)
    - [遍历](#遍历)
    - [强制转换](#强制转换)
- [C#进阶](#c进阶)
  - [集合](#集合)
    - [ArrayList](#arraylist)
    - [Hashtable](#hashtable)
    - [Dictionary](#dictionary)
    - [HashTable 和 Dictionary 的比较](#hashtable和dictionary的比较)
    - [SortedList](#sortedlist)
    - [List](#list)
    - [Stack](#stack)
    - [Queue](#queue)
    - [BitArray](#bitarray)
    - [Dictionary](#dictionary-1)
    - [SortedDictionary](#sorteddictionary)
  - [类与封装](#类与封装)
  - [继承](#继承)
  - [多态](#多态)
  - [运算符重载](#运算符重载)
  - [索引器](#索引器)
  - [接口](#接口)
  - [属性](#属性)
  - [委托](#委托)
    - [多播委托](#多播委托)
    - [方法参数](#方法参数)
    - [Action](#action)
    - [Func](#func)
    - [UnityAction](#unityaction)
  - [事件](#事件)
    - [Event](#event)
    - [UnityEvent](#unityevent)
  - [泛型](#泛型)
  - [反射](#反射)
  - [特性](#特性)
  - [多线程](#多线程)
    - [异步](#异步)
  - [文件操作](#文件操作)
    - [DirectoryInfo](#directoryinfo)
    - [DriveInfo](#driveinfo)
- [设计模式](#设计模式)
  - [六大基本原则](#六大基本原则)
  - [单例模式](#单例模式)
    - [懒人单例](#懒人单例)
    - [标准单例](#标准单例)
    - [泛型单例](#泛型单例)
    - [继承 MonoBehaviour 单例](#继承monobehaviour单例)
      - [lock 方式](#lock方式)
  - [创建型模式](#创建型模式)
    - [简单工厂模式](#简单工厂模式)
  - [观察者模式](#观察者模式)
  - [MVC 模式](#mvc模式)
  - [命令模式](#命令模式)

# C#

## IDE

Visual Studio Community 2019 => https://visualstudio.microsoft.com/zh-hans/vs/

VSCode

名称: C#
ID: ms-dotnettools.csharp
说明: C# for Visual Studio Code (powered by OmniSharp).
版本: 1.24.3
发布者: Microsoft
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp

名称: C# Extensions
ID: jchannon.csharpextensions
说明: C# IDE Extensions for VSCode
版本: 1.3.1
发布者: jchannon
VS Marketplace 链接: https://marketplace.visualstudio.com/items?itemName=jchannon.csharpextensions

安装 dotnet

使用 dotnet new console

重启 VSCode

## Hello World

```c#
using System; // 引入命名空间

// 自定义命名空间 使用namespace关键字
namespace MyNameSpace{
    // 测试类 访问域 + Class关键字
    public Class Test{
        // Main方法 访问域 + static关键字 + 返回值类型 + 方法名(参数类型 + 参数名)
    	public static void Main(String[] args){
        	Console.WriteLine("Hello World"); // 输出流打印一行
    	}
    }
}
```

因为 C#是以 C/C++为基础开发的，所以很多方面与 C/C++很相似，C#对大小写敏感，并且沿用了 C/C++的语法格式，语句块使用大括号{}括起，语句或表达式以分号;结尾。

## 注释

```c#
// 单行注释

/*
	多行注释
	多行注释
*/
```

## 命名规则

C#常用两种命名规则：驼峰命名和帕斯卡命名规则。

```
// Pascal 规则：每个单词开头的字母大写(如 Student).
// Camel 规则：除了第一个单词外的其他单词的开头字母大写. 如 testCounter.
```

对于命名空间、类名、方法名以及共有变量一般常用 Pascal 命名规则，变量命名则使用驼峰命名规则，私有变量可在开头加下划线。

## 基本数据类型

```c#
// 8位Unicode字符
char c = 'a';
// 8位无符号整数
byte b = 255;
// 8位有符号整数
sbyte = -1;
// 16位无符号整数
ushort = 100;
// 16位有符号
short = 100;
// 32位无符号整数
uint = 100;
// 32位有符号整数
int num = 1;
// 64位无符号整数
ulong = 100;
// 64位有符号整数
long num = 1l; // 1L
// 32位单精度浮点型
float num = 1.0f; // 1.0F
// 64位双精度浮点型
double num = 1.0d; // 1.0、1.0D
// 128位精确的十进制值
decimal = 111;
// 0/非0
bool flag = true; // false
// 字符串
string str = "unity";
// 指针
int* p;
```

C#提供了和 C/C++基本相同的数据类型，包括 char、int、bool、float、double 等，与 C/C++不同的是，C#中 float 和 double 类型定义变量需要在数值后添加 f/F、d/D 后缀，并且 C#只提供了 long 一种长整型变量，而没有 long long

## 强制类型转换

隐式类型转换安全不会造成数据丢失，比如短整型转换为长整型，派生类转换为基类，显示转换需要使用强制转换运算符，可能会造成数据丢失。

```c#
int x = 1, y = 3;
float f = x / y;
float f = (float)x / (float)y;
```

除了在变量前声明强制转换类型外，C#还提供 as 关键字实现强制类型转换，转换失败不会抛出异常

```c#
Object obj = new StringReader("Hello");
StringReader r = obj as StringReader;
```

## 运算符

C#提供 C/C++中基本的运算符，包括三目运算符等，其中较特殊的有：

```c#
// 判断对象是否为某一种类型
if( Ford is Car)
```

## 判断

```c#
if(i>0){
    Console.WriteLine("i>0");
}
else if(a<0){
    Console.WriteLine("i<0");
}
else{
    Console.WriteLine("i=0");
}
```

## 循环

### while

```c#
while(i>0){
    Console.WriteLine(a);
    i--;
}
```

### do-while

```c#
do{
    Console.WriteLine(i);
    i--;
}while(i>0);
```

### for

```c#
for(int i=0;i<n;i++){
    Console.WriteLine("a>0");
}
```

### foreach

除了 C/C++中出现的三种循环语句，C#还提供 foreach，经有人对比分析 foreach 的效率随运算量的提升而不及 for 循环，所以还是建议使用 for 语句

```c#
foreach(char c in str){
    Console.WriteLine(c);
}

break
continue
```

## 方法/函数

### 按值传参

向方法形参传递一个实参的值，方法体内对该形参的操作不会改变实参。

```c#
// 访问修饰符 返回值类型 方法名 (参数列表)
public bool Comp(int x, int y){
	return x>y;
}

public static void Main(string[] args){
    Console.WriteLine(Comp(1, 2));
}
```

### 引用传参

向方法形参传递实参的地址，方法体内对形参的改变会引起实参的改变

```c#
public static void Swap(int x,int y){
    int temp = x;
    x = y;
    y = temp;
}

public static void Swap(ref int x, ref int y){
    int temp = x;
    x = y;
    y = temp;
}

public static void Main(string[] args){
    int a = 1, b = 2;
    Swap(a, b);
    Console.WriteLine(string.Format("{0},{1}", a, b));
}
```

### 输出传参

与引用传参类似，形参的变化会导致实参发生改变，同时使用输出传参可实现方法拥有多个返回值

```c#
public static void SetValue(out int x)
{
    int t = 5;
    x = t;
}

public static void Main(string[] args){
    int a = 1;
    SetValue(out a);
    Console.WriteLine(a);
}
```

## 数组

### 一维数组

```c#
// 一维数组，未赋值的元素默认值为0
int[] arr = new int[5];
int[] arr = new int[10] { 0, 1, 2, 3, 4};
int[] arr = new int[]{0, 1, 2, 3, 4};
for (int i = 0; i < arr.Length; i++)
{
    Console.WriteLine(arr[i]);
}
```

### 多维数组

个人感觉 C#多维数组的定义在形式上真正做到了多维空间的表达，和数学中的维度定义相似，一维表示线性，使用 x 指代，二维表示平面，使用（x, y）表示这种含义。

```c#
int[,] arr = new int[3, 4];
int[,] arr = new int[3, 4] { { 11, 12, 13, 14 }, { 21, 22, 23, 24 }, { 31, 32, 33, 34 } };
int[,] arr = new int[,] { { 11, 12 }, { 21, 22} };
for (int i = 0; i < arr.GetLength(0); i++)
{
    for (int j = 0; j < arr.GetLength(1); j++)
    {
        Console.WriteLine(arr[i, j]);
    }
}
```

### 交错数组

C#的交错数组与 C/C++多维数组的定义类似，但交错数组被认定为是一维数组，而每个元素又是一个数组

```c#
int[][] arr = new int[3][];
int[][] arr = new int[3][] { new int[] { 11, 12, 13, 14 }, new int[] { 21, 22, 23, 24 }, new int[] { 31, 32, 33, 34 } };
int[][] arr = new int[][] { new int[] { 11, 12, 13, 14 }, new int[] { 21, 22, 23, 24 }};
for (int i = 0; i < arr.GetLength(0); i++)
{
    for (int j = 0; j < arr[i].GetLength(0); j++)
    {
        Console.WriteLine(arr[i][j]);
    }
}
```

### params

先看一下向一个方法传递数组的实现：

```c#
public int CalSum(int[] arr){
    int sum = 0;
    foreach(int i in arr){
        sum+=i;
    }
    return sum;
}

public static void Main(string[] args){
    int[] arr = new int[]{0,1,2,3,4};
    Console.WriteLine(CalSum(arr));
}
```

使用 params，可以不必直接定义数组， 使传入数组的方式像传递形参一样：

```c#
public int CalSum(params int[] arr){
    int sum = 0;
    foreach(int i in arr){
        sum+=i;
    }
    return sum;
}

public static void Main(string[] args){
    Console.WriteLine(CalSum(0, 1, 2, 3, 4));
}
```

params 解决了什么问题呢，在需要向一个方法中传递未知个参数时，可以使用这种方法。

### Array

Array 是所有数组的基类，提供一些对一维数组的操作

```c#
int[] arr = new int[]{0,1,2,3,4};

// 所有维度的元素个数之和
arr.Length; // 32位整数
arr.LongLength; // 64位整数

// 数组的维度
arr.Rank;

// 指定维度的元素个数
arr.GetLength(int index);
arr.GetLongLength(int index);

// 指定维度的上下界（索引值）
arr.GetLowerBound(int index);
arr.GetUpperBound(int index

// 数组类型
arr.GetType();

// 获取指定位置的值
arr.GetValue(int index);

// 设置指定位置的值
arr.SetValue(int value, int index)

// 获取数组某元素下标
Array.IndexOf(arr, 3); // 不存在返回-1

// 复制数组
Array.Copy(arr, targetArr, int length); // 复制arr到targetArr从第一个元素开始长度为length
arr.CopyTo(targetArr, int targetIndex); // 复制arr的全部元素到targetArr数组，从targetArr的targetIndex下标开始

// 排序（改变原数组）
Array.Sort(arr);

// 翻转
Array.Reverse(arr);
```

## String

String 类提供了很多关于字符串操作的方法，比如比较、连接、大小写转换等，这些方法的使用不过多讲解，可自行百度查阅资料，这里主要关注一下 Format 方法格式化字符串，以变量占位输出为例

```c#
int x = 0, y = 1;
// 使用大括号占位输出{}，大括号内以0开始的数值声明对应占位点替换第几位参数
Console.WriteLine(string.Format("x = {0}, y = {1}", x, y);
```

## 结构体

C#中没有 C++的 typedef 函数，所以没有取别名的功能，结构体定义如下：

```c#
struct Node
{
    public int id;
    public string name;
};

public static void Main(string[] args)
{
    Node node;
    node.id = 0;
    node.name = "unity";
    Console.WriteLine(string.Format("{0},{1}", node.id, node.name));
    Console.ReadKey();
}
```

## 枚举

#### 定义

C#枚举是值类型，每一个元素的值是比它前面的元素大一的值

```c#
public enum GoType{
    Player = 0,
    Enemy = 1,
    Npc = 2,
};
```

#### 遍历

```c#
foreach(GoType type in Enum.GetValues(typeof(Gotype)))
{
    print(type);
}
```

#### 强制转换

```c#
TryParse(Type, String, Object)
// 将一个或多个枚举常数的名称或数字值的字符串表示转换成等效的枚举对象。
TryParse(Type, String, Boolean, Object)
// 将一个或多个枚举常数的名称或数字值的字符串表示转换成等效的枚举对象。
TryParse<TEnum>(String, Boolean, TEnum)
// 将一个或多个枚举常数的名称或数字值的字符串表示转换成等效的枚举对象。 一个参数指定该操作是否区分大小写。 用于指示转换是否成功的返回值。
    类型参数
TEnum
要将 value 转换到的枚举类型。
参数
value
String
要转换的枚举名称或基础值的字符串表示形式。
ignoreCase
Boolean
若要不区分大小写，则为 true；若要区分大小写，则为 false。
result
TEnum
当此方法返回时，如果分析操作成功，result 将包含值由 value 表示的 TEnum 类型的对象。 如果分析操作失败，result 将包含 TEnum 的基础类型的默认值。 请注意，此值无需为 TEnum 枚举的成员。 此参数未经初始化即被传递。
TryParse<TEnum>(String, TEnum)
// 将一个或多个枚举常数的名称或数字值的字符串表示转换成等效的枚举对象。 用于指示转换是否成功的返回值。
```

# C#进阶

## 集合

### ArrayList

ArrayList 是 C#的动态数组类型，C/C++中是 Vector

```c#
// 创建一个动态数组arrl
ArrayList arrl = new ArrayList();

// 添加元素
arrl.Add("C#");

// 删除元素
arrl.Remove("C#");
arrl.RemoveAt(0);

// 清空数组
arrl.Clear();

// 数组排序
arrl.Sort();
```

### Hashtable

C#哈希表，元素以键值对形式存在。

```c#
Hashtable ht = new Hashtable();

// 添加键值对
ht.Add("zhangsan", 1);

// 删除键值对
ht.Remove("zhangsan");

// 清空哈希表
ht.Clear();

// 是否包含键/值
ht.ContainsKey("zhangsan");
ht.ContainsValue(1);
```

### Dictionary

```c#

```

### HashTable 和 Dictionary 的比较

HashTable 添加数据时更快，频繁调用数据时则 Dictionary 更快。单线程推荐 Dictionary，有泛型优势，当键-值是值类型时，效率比 HashTable 快，并且 Dictionary 按数据添加顺序排列，所以在需要考虑添加顺序时使用 Dictionary。多线程推荐使用 HashTable，默认允许单线程写入，多线程读取，而 Dictionary 需要自己加锁。

### SortedList

C#排序列表，元素以键值对形式存在，同时也允许使用索引访问元素，所以是 ArrayList 和 Hashtable 的结合体

```c#
SortedList sl = new SortedList();
sl.Add("zhangsan", 1);

// 根据键访问元素
sl["zhangsan"];

// 根据索引访问
sl.GetKey(0);
```

### List

C#列表数据结构，和 ArrayList 作用相似

```c#
List<int> l = new List<int>();
// 添加元素
l.Add(0);

// 删除元素
l.Remove(0);
```

### Stack

C#堆栈数据结构

```c#
Stack<int> s = new Stack<int>();

// 取栈顶元素
s.peek();

// 栈顶入栈
s.Push(1);

// 栈顶出栈
s.Pop();
```

### Queue

C#队列数据结构

```c#
Queue q = new Queue();

// 队尾入队
q.Enqueue(1);

// 返回队首元素并出队
q.Dequeue();
```

### BitArray

C#点阵列，存储一个二进制序列，true 表示位 1，false 表示位 0

```c#
// 创建大小为8的点阵列
BitArray ba = new BitArray(8);
// 存入值到点阵列
byte[] a = {60};
ba = new BitArray(a);
// 输出点阵列
for(int i = 0; i< ba.Count; i++){
	Console.Write(ba[i]);
}
// 结果
// FalseFalseTrueTrueTrueTrueFalseFalse
```

### Dictionary

### SortedDictionary

底层是二叉搜索树实现

## 类与封装

**访问修饰符**

- public：所有对象都可以访问；
- private：对象本身在对象内部可以访问；
- protected：只有该类对象及其子类对象可以访问；
- internal：同一个程序集的对象可以访问；
- protected internal：访问限于当前程序集或派生自包含类的类型。

类是一堆数据类型的抽象，没有赋值具体的数据，将具有共同属性、方法抽象成一个集合体归为一个类，对象是类的实例，每个对象都记录属于自己的数据，就像一个人和人类的关系，人类是抽象概念，囊括所有人类个体，每个人都是人类的实例，每个人是一个对象，所有人在本质上具有人类的特征，但可以拥有其他不同点。

```c#
public class Test
{
    private int id;
    private string name;

    public Myclass(int id, string name)
    {
        this.id = id;
        this.name = name;
    }

    public int GetId()
    {
        return this.id;
    }

    public string GetName()
    {
        return this.name;
    }
}

public static Main(string[] args)
{
    Test t_1 = new Test(0, zhangjian);
    Test t_2 = new Test(1, huqiwen);
    Console.WriteLine(t_1.GetId());
    Console.WriteLine(t_2.GetName());
}
```

## 继承

继承是类的再抽象，将两个类的相同属性提取出来成为一个父类，而后让这两个类继承该父类，共同拥有父类的属性，使得代码结构更有层次。

```c#
public class ParentClass
{
    private int id;
    private string name;
}

public class SubClass_1 : ParentClass
{
    private int physicScore;

    public SubClass_1(int id, string name, int socre)
    {
        base.id = id;
        base.name = name;
        this.physicScore = score;
    }
    public void ReadInfo()
    {
        Console.WriteLine(string.Format("SubClass_1 : {0},{1},{2}"),id, name, physicScore);
	}
}

public class SubClass_2 : ParentClass
{
    private int historyScore;

    public SubClass_1(int id, string name, int socre)
    {
        base.id = id;
        base.name = name;
        this.historyScore = score;
    }

    public void ReadInfo()
    {
        Console.WriteLine(string.Format("SubClass_2 : {0},{1},{2}"),id, name, historyScore);
	}
}

public static Main(string[] args)
{
    SubClass_1 sub1 = new SubClass_1(0, zhangjian, 110);
    SubClass_2 sub2 = new SubClass_2(1, huqiwen, 150);
    sub1.ReadInfo();
    sub2.ReadInfo();
}
```

## 多态

多态允许具有相同名字但实现不同功能的方法或者运算符存在，多态方法也就是函数重载允许参数类型不同，或者参数个数不同，但不允许仅返回值类型不同的重载出现。

```c#
public class Test
{
    public static int Add(int a, int b)
    {
        reutrn a + b;
    }

    public static float Add(float a, float b, float c)
    {
        return a + b + c;
    }
}

public static Main(string[] args)
{
    int a1 = 1, b1 = 2;
    float a2 = 0.2f, b2 = 0.4f, c2 = 0.8f;
    Console.WriteLine(MyClass.Add(a1, b1));
    Console.WriteLine(MyClass.Add(a2, b2, c2));
}
```

## 运算符重载

## 索引器

索引器使得对象可以使用像数组下标的方式来访问

```c#
public class Test()
{
    List<GameObject> goList = new List<GameObject>();

    public GameObject this[int index]
    {
        get
        {
            for(int i=0;i<goList.Count;i++)
            {
                if(i == index)
                {
                    return goList[index];
                }
            }
        }
        set
        {
            for(int i=0;i<goList.Count;i++)
            {
                if(i == index)
                {
                    goList[i] = value;
                }
            }
        }
    }
}
```

## 接口

接口规定了子类的结构规范，在接口中只对属性、方法做声明，而不实现任何功能，比如以下代码模拟两台打印机，打印机必然具有打印功能，所以在接口 IPrintf 就规定了 Printf 作为具有打印功能的方法，所以对于 Printf1，Printf2 打印机，都需要实现 IPrintf 接口的规定。

都需要实现 IPrintf 接口中的 Printf 方法

```c#
interface IPrintf
{
    void Printf();
}

class Printf1 : IPrintf
{
    public void Printf()
    {
        Console.WriteLine("Printf1");
    }
}

class Printf2 : IPrintf
{
    public void Printf()
    {
        Console.WriteLine("Printf2");
    }
}

public class Test{
    public static void Main(string[] args)
    {
        Printf1 printf1 = new Printf1();
        printf1.Printf();
        Printf2 printf2 = new Printf2();
        printf2.Printf();
        Console.ReadKey();
    }
}
```

## 属性

属性的作用在笔者看来是对字段进行了一层封装，一来可以明确字段的读写权限，另一方面可以对字段的读取、修改添加监听的作用。

```c#
class GameObject
{
    private string name;

    public string Name
    {
        get { return this.name; }
        set { this.name = value; }
    }

    public string Name
    {
        get { return this.name; }
        set
        {
            this.name = value;
            NameValueChangedCallBack();
        }
    }

    // 使用lambda表达式的属性
    public string Name
    {
        get => this.name;
        set => this.name = value;
    }
}
```

## 委托

委托是对一个实例方法的引用，即可以通过一个委托变量实现方法的调用

```c#
public class Test{
    public delegate void printf(); // 声明一个委托

    public static void Printf_1(string str)
    {
        Console.WriteLine("Printf_1:" + str);
    }

    public static void Main(string[] args)
    {
        printf pf = new printf(Printf_1); // 创建一个Printf1的委托
        pf("unity"); // 使用委托调用函数
        Console.ReadKey();
    }
}
```

### 多播委托

委托的多播的意义在意可以通过一个委托变量一次调用多个方法，通过+=运算符合并多个委托变量

```c#
public class Test{
    public delegate void printf(); // 声明一个委托

    public static void Printf_1(string str)
    {
        Console.WriteLine("Printf_1:" + str);
    }

    public static void Printf_2(string str)
    {
        Console.WriteLine("Printf_2:" + str);
    }

    public static void Main(string[] args)
    {
        printf pf = new printf(Printf_1); // 创建一个Printf1的委托
        pf += Printf_2;
        pf("unity"); // 使用委托调用函数
        Console.ReadKey();
    }
}
```

### 方法参数

通过委托变量可以代替一个方法的调用，这么一来，在向方法传递参数时，就可以传递一个委托变量实现传递方法，这也是委托设计的初衷

```c#
public class Test{
    public delegate void printf(string str);

    public static void Printf_1(string str)
    {
        Console.WriteLine("Printf_1:" + str);
    }

    public static void Printf_2(string str)
    {
        Console.WriteLine("Printf_2:" + str);
    }

    public static void MyPrint(printf pf)
    {
        pf("unity");
    }

    public static void Main(string[] args)
    {
        printf p = new printf(Printf_1);
        p += Printf_2;
        MyPrint(p);
        Console.ReadKey();
    }
}
```

### Action

Action 提供一个没有返回值的委托类型

```c#
public void EAction(string str)
{
    Console.WriteLine(str);
}

public static void Main(string[] args)
{
    Action<string> action = EAction;
    action("Action");
}
```

### Func

Func 提供可带有一个返回值的委托类型，参数列表最后一个为返回值类型

```c#
public int EFunc(string str)
{
    Console.WriteLine(str);
    return Random.Range(0, 100);
}

public static void Main(string[] args)
{
    Func<string, int> func = EFunc;
    Console.WriteLine(func("Func"));
}
```

### UnityAction

UnityAction 是 Unity 封装的 Action，使用方法同 Action 一般无二，最多支持 4 个参数

## 事件

### Event

事件是对委托的封装，委托本质上指向一个方法，而事件是一个对象实例。两者的表面的区别在于事件只能允许注册和删除，而不允许赋值，也就是说事件只允许创建者进行赋值操作，而对于其他对象只允许添加和删除该事件的响应，只有+=、-=操作而没有=操作，这样避免了其他对象修改事件。

```c#
public delegate void Fun(string str);
public event Fun eEvent;

public event Action<string> eEvent;

public event UnityAction<string> eEvent;
```

### UnityEvent

UnityEvent 是 Unity 封装的 Event，可以序列化在 Inspector 面板显示

```c#

```

## 泛型

泛型实现了对数据类型的抽象，提供与任意数据类型互通的方法，在学习 C 语言之初，我们应该都写过 Swap 函数，我们可以实现一种数据类型的元素交换，但是对于多个数据类型的元素是不是需要写以不同变量类型的多个方法帮助我们完成这个功能呢，泛型就可以解决这个问题，使得只使用一个方法完成所有功能，不同数据类型参数的 Swap 方法的工作几乎是一样的，也就是具有相似性，因此具备抽象的条件。

```c#
public class Test
{
    public static T Swap<T>(ref T arg_0, ref T arg_1)
    {
        T temp = arg_0;
        arg_0 = arg_1;
        arg_1 = temp;

    }

    public static void Main(string[] args)
    {
        int a = 0, b = 1;
        Swap(a, b);
        float c = 0, d = 1;
        Swap(c, d);
    }
}
```

更加实用的泛型应用可参考 unity 扩展

## 反射

1. System.Type

   提供访问任意数据类型的信息

   Type 底层是一个抽象的基类，拥有与每种数据对应的派生类

   - 获取一个类型的 Type 信息

   ```c#
   Type type = typeof(Gameobject);
   ```

   - 获取一个对象的 Type 信息

   ```c#
   Gameobject go = new GameObject();
   Type type = go.GetType();
   ```

   - 使用类型名获取一个类型的 Type 信息

   ```c#
   class GameObject{}

   Type type = Type.GetType("GameObject");

   // 如果GameObject类在一个命名空间UnityEngine下，需要指明
   Type type = Type.GetType("UnityEngine.GameObject");
   ```

   - Type 类属性

     - Name => 类型名
     - FullName => 命名空间名+类型名
     - Namespace => 命名空间名
     - IsAbstract => 该类型是否抽象
     - IsArray => 该类型是否是数组
     - IsClass => 该类型是否是类
     - IsEnum => 该类型是否是枚举
     - IsInterface => 该类型是否是接口
     - IsPublic => 该类型是否公有
     - IsSealed => 该类型是否是密封类
     - IsValueType => 该类型是否是值类型

   - 获取类的接口

   ```c#
   // 接口列表
   Type[] interfaces = type.GetInterfaces();
   ```

   - 获取类的构造函数

   ```c#
   // 构造函数列表
   ConstructorInfo[] constructorInfos = type.GetConstructors();
   ```

   - 获取类的字段

   ```c#
   // 字段列表
   FieldInfo[] fieldInfos = type.GetFields();
   ```

   - 获取类的属性

   ```
   // 属性列表
   PropertyInfo[] propertyInfos = type.GetProperties();
   ```

   - 获取类的方法

   ```c#
   // 方法列表
   MethodInfo[] methodInfos = type.GetMethods();
   ```

   - 获取方法的参数

   ```c#
   // 构造函数
   ParameterInfo[] parameterInfos = constructorInfo.GetParameters();

   // 普通方法
   ParameterInfo[] parameterInfos = methodInfo.GetParameters();
   ```

   - 获取类的事件

   ```c#
   // 事件列表
   EventInfo[] eventInfos = type.GetEvents();
   ```

   - 获取类的成员

     包括继承父类、接口的字段、属性、方法等，但不包括子类成员。

     综上所说，接口、构造函数、字段等类都直接或间接继承自 MemberInfo，参数 ParameterInfo 除外

   ```c#
   // 类成员列表
   MemberInfo[] memberInfos = type.GetMembers();
   ```

   - 赋值

   ```c#
   FieldInfo fieldInfo = type.GetField("name");
   field.SetValue(this, "gameObject");
   ```

   - BindingFlags
     - BindingFlags.Default => 默认
     - BindingFlags.Public => 共有
     - BindingFlags.NonPublic => 非共有
     - BindingFlags.Instance => 实例
     - BindingFlags.Static => 静态

## 特性

## 多线程

```c#

```

### 异步

## 文件操作

### DirectoryInfo

C# Windows 文件系统操作

```c#
using System;

public class Test{
    public static void Main(string[] args){
        string path = "C://Users//24474//Desktop//最近作业"; // 文件路径
        DirectoryInfo directoryInfo = new DirectoryInfo(path);
        if (directoryInfo.Exists)
        {
            Console.WriteLine(directoryInfo.Name); // 当前文件夹名称
            Console.WriteLine(directoryInfo.FullName); // 文件完整的路径
            Console.WriteLine(directoryInfo.Parent); // 父目录名称
            Console.WriteLine(directoryInfo.Root); // 根目录名称
            FileSystemInfo[] fileSystemInfos = directoryInfo.GetFileSystemInfos(); // 获取所有文件夹和文件
            foreach(FileSystemInfo fileSystemInfo in fileSystemInfos)
            {
                Console.WriteLine(fileSystemInfo.Name);
            }
            FileInfo[] fileInfos = directoryInfo.GetFiles(); // 获取所有文件
            foreach (FileInfo fileInfo in fileInfos)
            {
                Console.WriteLine(fileInfo.Name);
            }
            DirectoryInfo[] directoryInfos = directoryInfo.GetDirectories(); // 获取所有文件夹
            foreach (DirectoryInfo directory in directoryInfos)
            {
                Console.WriteLine(directory.Name);
            }
            DirectoryInfo newDirectory = new DirectoryInfo(directoryInfo.FullName + "//" + "test");
            newDirectory.Create();
            newDirectory.MoveTo(directoryInfo.FullName + "//" + "新建文件夹" + "//" + "test");
            newDirectory.Delete();
            Directory.Delete(directoryInfo.FullName + "//" + "新建文件夹", true);
        }
    }
}
```

### DriveInfo

C# Windows 磁盘操作

```c#
// 获取计算机所有驱动器信息
DriveInfo[] driveInfos = DriveInfo.GetDrives();
foreach(DriveInfo drive in driveInfos)
{
    if (drive.IsReady)
    {
        Console.WriteLine(drive.Name); // 驱动器名称
        Console.WriteLine(drive.DriveType); // 驱动器类型（CD-ROM、可移动驱动器、网络驱动器或固定驱动器）
        Console.WriteLine(drive.DriveFormat); // 驱动器格式（NTFS/FAT32）
        Console.WriteLine(drive.VolumeLabel); // 驱动器卷标
        Console.WriteLine(drive.TotalSize); // 驱动器总空间
        Console.WriteLine(drive.TotalFreeSpace); // 驱动器可用空闲空间总量（单位：字节）
        Console.WriteLine(drive.AvailableFreeSpace); // 驱动器可获取的可用空闲空间量（单位字节）
        Console.WriteLine(drive.RootDirectory); // 驱动器根目录
    }
}

// 根据驱动器名称获取某一个驱动器
Console.WriteLine(new DriveInfo("f"));
```

---

# 设计模式

## 六大基本原则

1. ### 单一职责原则

> 单一职责又叫做单一功能原则，原则规定一个类应该有且仅有只有一个引起它改变的原因，否则类应该被拆分。
>
> 该原则提出对象不应承担过多的职责，否则会存在一下两个缺点：
>
> 1. 一个职责的变化可能会抑制或削弱类实现其他职责的能力
> 2. 当客户端需要类的某个职责时，不得不把其他不需要的职责也包含进来，从而造成代码冗余

2. ### 开放封闭原则

> 原则规定软件实体应该对扩展开放，对修改关闭，进一步解释为当软件需求发生改变，在不修改源代码的前提下，可以实现扩展功能模块。

3. ### 接口隔离原则

   > 原则规定接口应拆分成尽量小且具体，为各个类建立需要的专用接口，而不是一个庞大臃肿的接口供其他类调用

4. ### 依赖倒置原则

   > 原则规定高层模块不应该依赖底层模块，两者都应该依赖它们的抽象；抽象不应该依赖细节，细节应该依赖抽象。其核心思想在于要面向接口编程，而不要面向实现编程。

5. ### 里氏转换原则

   > 原则规定继承必须确保超类所拥有的性质在子类中仍然成立，也就是说子类可以扩展父类的功能，但是不能修改父类原有的功能。

6. ### 迪米特原则

   > 迪米特原则又叫做最少知识原则，原则规定只与你的直接朋友交谈，而不与陌生人说话，朋友指的是该对象本身、该对象的成员对象、该对象创建的对象、该对象的方法参数

## 单例模式

### 懒人单例

```c#
public class Singleton{
    // 私有化构造函数
    private Singleton(){}
    // 提供唯一一个公共静态只读变量
    public static readonly Singleton instance = new Singleton();
}
```

### 标准单例

```c#
public class Singleton{
    // 私有唯一静态变量
    private static Singleton _instance = new Singleton();
    // 私有化构造函数
    private Singleton(){}

    // 提供唯一一个公共静态属性
    public static Singleton Instance{
        get{
            return _instance;
        }
    }
}
```

### 泛型单例

```c#
public class Singleton<T> where T : new() {
	// 泛型限制条件为可new
    // 私有唯一静态变量
    private static T _instance;

    // 静态构造函数
    static Singleton() {
        _instance = new T();
	}

    // 提供唯一一个公共静态属性
    public static T instance{
        get{
            return _instance;
        }
    }
}
```

### 继承 MonoBehaviour 单例

#### lock 方式

```c#
using UnityEngine;

public abstract class MonoSingleton<T> : MonoBehaviour where T : MonoBehaviour
{
    private static T instance = null;

    private static readonly object dontDestroyGo = new object();

    private static bool appQuitting;

    public static T Instance
    {
        get
        {
            if (appQuitting)
            {
                instance = null;
                return instance;
            }

            lock (dontDestroyGo)
            {
                if (instance == null)
                {
                    instance = FindObjectOfType<T>();
                    if (FindObjectsOfType<T>().Length > 1)
                    {
                        Debug.LogError(string.Format("class {0} has more then one singleton gameobject instance in the scene", typeof(T)));
                        return instance;
                    }

                    if (instance == null)
                    {
                        var singleton = new GameObject();
                        instance = singleton.AddComponent<T>();
                        singleton.name = "(singleton)" + typeof(T);
                        singleton.hideFlags = HideFlags.None;
                        DontDestroyOnLoad(singleton);
                    }
                    else
                    {
                        DontDestroyOnLoad(instance.gameObject);
                    }
                }
                instance.hideFlags = HideFlags.None;
                return instance;
            }
        }
    }

    private void Awake()
    {
        appQuitting = false;
    }

    private void OnDestroy()
    {
        appQuitting = true;
    }
}
```

## 创建型模式

### 简单工厂模式

## 观察者模式

## MVC 模式

## 命令模式
